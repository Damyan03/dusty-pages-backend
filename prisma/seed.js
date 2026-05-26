import { faker } from '@faker-js/faker';
import { prisma, disconnectPrisma } from '../src/lib/prisma.js';

async function main() {
	// Categories
	const categories = await Promise.all(
		Array.from({ length: 5 }).map(() =>
			prisma.category.create({
				data: {
					name: faker.lorem.word(),
				},
			}),
		),
	);

	// Eras
	const eras = await Promise.all(
		Array.from({ length: 3 }).map(() =>
			prisma.era.create({
				data: {
					name: faker.lorem.word(),
				},
			}),
		),
	);

	// Users
	const users = await Promise.all(
		Array.from({ length: 10 }).map(() =>
			prisma.user.create({
				data: {
					username: faker.internet.username(),
					displayName: faker.person.fullName(),
					email: faker.internet.email(),
					password: faker.internet.password(),
					provider: faker.helpers.arrayElement(['local', 'google', 'facebook']),
					providerUserId: faker.string.uuid(),
				},
			}),
		),
	);

	// Articles
	for (let i = 0; i < 10; i++) {
		const article = await prisma.article.create({
			data: {
				title: faker.lorem.sentence(),
				body: faker.lorem.paragraphs(3),
				author: faker.person.fullName(),
				date: faker.date.past(),
				contentDate: faker.date.recent(),
				tags: faker.helpers.arrayElements(['news', 'tech', 'opinion'], 2),
				categories: {
					create: [
						{
							category: {
								connect: { id: categories[i % categories.length].id },
							},
						},
					],
				},
				eras: {
					create: [
						{
							era: {
								connect: { id: eras[i % eras.length].id },
							},
						},
					],
				},
				users: {
					create: [
						{
							user: {
								connect: { id: users[i % users.length].id },
							},
						},
					],
				},
			},
		});

		// Views
		await prisma.articleView.create({
			data: {
				articleId: article.id,
				userId: users[i % users.length].id,
				viewedAt: new Date(),
			},
		});

		// Comments
		await prisma.comments.create({
			data: {
				articleId: article.id,
				userId: users[i % users.length].id,
				body: faker.lorem.sentences(2),
			},
		});
	}
}

main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(() => disconnectPrisma());
