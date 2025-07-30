import type { RequestHandler } from '@sveltejs/kit';
import prisma from '$lib/prisma';
import { verifyJwt } from '$lib/jwt';

export const GET: RequestHandler = async ({ cookies }) => {
  const token = cookies.get('auth_token');

  if (!token) {
    return new Response('Unauthorized: no token', { status: 401 });
  }

  const payload = await verifyJwt(token);

  if (!payload || !payload.uid) {
    return new Response('Invalid token', { status: 401 });
  }

  try {
    const user = await prisma.krasavaUsers.findUnique({
      where: { id: payload.uid },
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true,
      }
    });

    if (!user) {
      return new Response('User not found', { status: 404 });
    }

    return new Response(JSON.stringify(user), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    console.error('Error fetching user profile:', err);
    return new Response('Internal server error', { status: 500 });
  }
};
