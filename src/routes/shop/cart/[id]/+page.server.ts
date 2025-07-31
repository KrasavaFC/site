import type { PageServerLoad } from './$types';
import prisma from '$lib/prisma';

export const load: PageServerLoad = async ({ params }) => {
	const id = params.id;

	if (!id) {
		throw new Error('Missing product ID');
	}

	const product = await prisma.product.findUnique({
		where: {
			id: id
		}
	});

	if (!product) {
		return {
			status: 404,
			error: new Error('Product not found')
		};
	}

	return {
		product
	};
};
