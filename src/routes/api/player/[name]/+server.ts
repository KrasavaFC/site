import { json, type RequestHandler } from '@sveltejs/kit';
import prisma from '$lib/prisma';

export const GET: RequestHandler = async ({ params }) => {
  const name = params.name;

  if (!name) {
    return new Response('Missing name parameter', { status: 400 });
  }

  try {
    const player = await prisma.player.findFirst({
      where: {
        firstName: {
          equals: name,
          mode: 'insensitive'
        }
      }
    });

    if (!player) {
      return new Response('Player not found', { status: 404 });
    }

    return json(player);
  } catch (error) {
    console.error('Failed to fetch player:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
};
