import type { RequestHandler } from '@sveltejs/kit';
import prisma from '$lib/prisma';
import { verifyJwt } from '$lib/jwt';

export const GET: RequestHandler = async ({ cookies }) => {
  const token = cookies.get('auth_token');

  if (!token) {
    return new Response('Unauthorized: No token provided', { status: 401 });
  }

  const payload = await verifyJwt(token);

  if (!payload || !payload.uid) {
    return new Response('Invalid token', { status: 401 });
  }

  try {
    const wishlist = await prisma.wishlist.findMany({
      where: { userId: payload.uid },
      include: { product: true },
      orderBy: { addedAt: 'desc' }
    });

    return new Response(JSON.stringify({ cart: wishlist }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Failed to fetch user cart:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
};
