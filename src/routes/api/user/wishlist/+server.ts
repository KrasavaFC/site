import type { RequestHandler } from '@sveltejs/kit';
import prisma from '$lib/prisma';
import { verifyJwt } from '$lib/jwt';

export const POST: RequestHandler = async ({ request, cookies }) => {
  const token = cookies.get('auth_token');

  if (!token) {
    return new Response('Unauthorized: no token', { status: 401 });
  }

  const payload = await verifyJwt(token);

  if (!payload || !payload.uid) {
    return new Response('Invalid token', { status: 401 });
  }

  const { productId } = await request.json();

  if (!productId) {
    return new Response('Missing productId', { status: 400 });
  }

  try {
    const product = await prisma.product.findUnique({ where: { id: productId } });

    if (!product) {
      return new Response('Product not found', { status: 404 });
    }

    const exists = await prisma.wishlist.findFirst({
      where: {
        userId: payload.uid,
        productId
      }
    });

    if (exists) {
      return new Response('Product already in wishlist', { status: 409 });
    }

    const wishlistItem = await prisma.wishlist.create({
      data: {
        userId: payload.uid,
        productId
      }
    });

    return new Response(JSON.stringify(wishlistItem), {
      status: 201,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    console.error('Failed to add to wishlist:', err);
    return new Response('Internal Server Error', { status: 500 });
  }
};

export const DELETE: RequestHandler = async ({ request, cookies }) => {
  const token = cookies.get('auth_token');

  if (!token) {
    return new Response('Unauthorized: no token', { status: 401 });
  }

  const payload = await verifyJwt(token);

  if (!payload || !payload.uid) {
    return new Response('Invalid token', { status: 401 });
  }

  const { productId } = await request.json();

  if (!productId) {
    return new Response('Missing productId', { status: 400 });
  }

  try {
    const deleted = await prisma.wishlist.deleteMany({
      where: {
        userId: payload.uid,
        productId
      }
    });

    if (deleted.count === 0) {
      return new Response('Item not found in wishlist', { status: 404 });
    }

    return new Response('Removed from wishlist', { status: 200 });
  } catch (err) {
    console.error('Failed to delete from wishlist:', err);
    return new Response('Internal Server Error', { status: 500 });
  }
};

export const PUT: RequestHandler = async ({ request, cookies }) => {
  const token = cookies.get("auth_token");
  if (!token) return new Response("Unauthorized", { status: 401 });

  const payload = await verifyJwt(token);
  if (!payload || !payload.uid) return new Response("Invalid token", { status: 401 });

  const { productId, quantity } = await request.json();

  if (!productId || typeof quantity !== "number") {
    return new Response("Missing or invalid parameters", { status: 400 });
  }

  try {
    const updated = await prisma.wishlist.updateMany({
      where: { userId: payload.uid, productId },
      data: { quantity },
    });

    if (updated.count === 0) {
      return new Response("Item not found", { status: 404 });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Update wishlist quantity failed:", err);
    return new Response("Server error", { status: 500 });
  }
};
