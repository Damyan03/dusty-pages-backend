import { PrismaClient } from '../generated/prisma/client.js';

const prisma = new PrismaClient();

const getCategories = async (req, res) => 
{
	try {
		const categories = await prisma.category.findMany();
		res.json(categories);
	} catch (error) {
		console.error('Error fetching categories:', error);
		res.status(500).json({ error: 'Internal server error' });
	}
};

export default { getCategories };