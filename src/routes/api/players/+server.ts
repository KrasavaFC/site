import { json } from '@sveltejs/kit';
import prisma from '$lib/prisma';

export async function GET() {
  try {
    const players = await prisma.player.findMany({
      where: { active: true },
      orderBy: { number: 'asc' },
    });
    return json(players);
  } catch (error) {
    console.error('Failed to fetch players:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}
