import { prisma } from '../lib/prisma.js';
import { subDays, subMonths, subYears } from 'date-fns';

const getCategories = async (req, res) => {
	try {
		const categories = await prisma.category.findMany();
		res.json(categories);
	} catch (error) {
		console.error('Error fetching categories:', error);
		res.status(500).json({ error: 'Internal server error' });
	}
};

const getTopArticlesPerCategory = async (req, res) => {
	try {
		const { categoryName } = req.params;
		const { timeframe = 'all' } = req.query;

		let dateThreshold = null;
		const now = new Date();

		switch (timeframe) {
			case '1day':
				dateThreshold = subDays(now, 1);
				break;
			case '7days':
				dateThreshold = subDays(now, 7);
				break;
			case '1month':
				dateThreshold = subMonths(now, 1);
				break;
			case '1year':
				dateThreshold = subYears(now, 1);
				break;
			case 'all':
			default:
				break;
		}

		const category = await prisma.category.findUnique({ where: { name: categoryName } });
		if (!category) {
			return res.status(404).json({ error: 'Category not found' });
		}

		const whereCondition = {
			...(dateThreshold && { viewedAt: { gte: dateThreshold } }),
			article: {
				categories: {
					some: {
						categoryId: category.id,
					},
				},
			},
		};

		const topViewed = await prisma.articleView.groupBy({
			by: ['articleId'],
			where: whereCondition,
			_count: { articleId: true },
			orderBy: {
				_count: {
					articleId: 'desc',
				},
			},
			take: 5,
		});

		const articleIds = topViewed.map((v) => v.articleId);

		const articles = await prisma.article.findMany({
			where: {
				id: { in: articleIds },
			},
			select: {
				id: true,
				title: true,
				contentDate: true,
			},
		});

		const sortedArticles = articleIds.map((id) => articles.find((a) => a.id === id));

		res.json(sortedArticles);
	} catch (error) {
		console.error('Error fetching top articles:', error);
		res.status(500).json({ error: 'Internal server error' });
	}
};

export default { getCategories, getTopArticlesPerCategory };
