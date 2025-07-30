import type { RequestEvent } from '@sveltejs/kit';
import prisma from '$lib/prisma';
import { hashPassword } from '$lib/crypto';
import { signJwt } from '$lib/jwt';

export const POST = async ({ request, cookies }: RequestEvent) => {
  try {
    const { email, password, name } = await request.json();

    if (!email || !password) {
      return new Response('Email and password are required', { status: 400 });
    }

    const existingUser = await prisma.krasavaUsers.findUnique({ where: { email } });

    if (existingUser) {
      return new Response('User already exists', { status: 409 });
    }

    const hashedPassword = await hashPassword(password);

    const user = await prisma.krasavaUsers.create({
      data: {
        email,
        name,
        password: hashedPassword
      }
    });

    const token = await signJwt({ uid: user.id, email: user.email });

    cookies.set('auth_token', token, {
      httpOnly: true,
      path: '/',
      maxAge: 60 * 60 * 24 * 7,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production'
    });

    return new Response(JSON.stringify({ user: { id: user.id, email: user.email } }), { status: 201 });
  } catch (error) {
    console.error('Registration error:', error);
    return new Response('Internal server error', { status: 500 });
  }
};
