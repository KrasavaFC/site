import type { PageServerLoad } from './$types';
import prisma from '$lib/prisma';

export const load: PageServerLoad = async ({ params }) => {
	const name = params.name;

	if (!name) {
		throw new Error('Missing name parameter');
	}

	const player = await prisma.player.findFirst({
		where: {
			firstName: {
				equals: name,
				mode: 'insensitive'
			}
		}
	});

	if (!player) {
		return {
			status: 404,
			error: new Error('Player not found')
		};
	}

	return {
		player,
		name
	};
};
