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
    const purchases = await prisma.purchaseHistory.findMany({
      where: {
        userId: payload.uid
      },
      include: {
        item: true, 
        transaction: true 
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    const formatted = purchases.map((p) => ({
      id: p.id,
      productId: p.itemId,
      productName: p.item.name,
      productImage: p.item.imageUrl,
      quantity: p.quantity,
      priceAtPurchase: p.priceAtPurchase,
      status: p.status,
      transactionId: p.transaction?.id || null,
      amountPaid: p.transaction?.amount || null,
      currency: p.transaction?.currency || null,
      purchasedAt: p.createdAt
    }));

    return new Response(JSON.stringify({ purchases: formatted }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Failed to fetch purchase history:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
};
