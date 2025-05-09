import { PrismaClient } from '../generated/prisma/client.js';

const prisma = new PrismaClient();

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

export default { getArticleById };