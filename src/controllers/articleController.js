import { prisma } from '../lib/prisma.js';
import { startOfWeek, endOfWeek } from 'date-fns';

const getArticleById = async (req, res) => {
	try {
		const { id } = req.params;
		const article = await prisma.article.findUnique({
			where: { id: Number(id) },
		});
		res.json(article);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Failed to fetch article' });
	}
};

const getFeaturedArticles = async (req, res) => {
	try {
		const now = new Date();
		const weekStart = startOfWeek(now, { weekStartsOn: 1 });
		const weekEnd = endOfWeek(now, { weekStartsOn: 1 });

		// Get top articles this week
		const topThisWeek = await prisma.articleView.groupBy({
			by: ['articleId'],
			where: {
				viewedAt: {
					gte: weekStart,
					lte: weekEnd,
				},
			},
			_count: {
				articleId: true,
			},
			orderBy: {
				_count: {
					articleId: 'desc',
				},
			},
			take: 3,
		});

		let articleIds = topThisWeek.map((v) => v.articleId);

		// If less than 3, add from top of all-time articles
		if (articleIds.length < 3) {
			const topAllTime = await prisma.articleView.groupBy({
				by: ['articleId'],
				_count: {
					articleId: true,
				},
				orderBy: {
					_count: {
						articleId: 'desc',
					},
				},
				take: 5,
			});

			for (const view of topAllTime) {
				if (articleIds.length >= 3) break;
				if (!articleIds.includes(view.articleId)) {
					articleIds.push(view.articleId);
				}
			}
		}

		// Fetch full article details
		const articles = await prisma.article.findMany({
			where: {
				id: {
					in: articleIds,
				},
			},
			select: {
				id: true,
				title: true,
			},
		});

		// Sort articles in the same order as articleIds
		const sortedArticles = articleIds.map((id) => articles.find((a) => a.id === id));

		res.json(sortedArticles);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Failed to fetch featured articles' });
	}
};

export default { getArticleById, getFeaturedArticles };
