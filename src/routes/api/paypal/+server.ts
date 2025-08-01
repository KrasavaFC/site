import type { RequestHandler } from "@sveltejs/kit";
import prisma from "$lib/prisma";
import { verifyJwt } from "$lib/jwt";

export const POST: RequestHandler = async ({ request, cookies }) => {
  const token = cookies.get("auth_token");

  if (!token) {
    return new Response("Unauthorized: no token", { status: 401 });
  }

  const payload = await verifyJwt(token);

  if (!payload || !payload.uid) {
    return new Response("Unauthorized: invalid token", { status: 401 });
  }

  const { orderId, payerId, details, cart } = await request.json();

  if (!orderId || !payerId || !details || !Array.isArray(cart)) {
    return new Response("Invalid data", { status: 400 });
  }

  const currency = details.purchase_units?.[0]?.amount?.currency_code || "EUR";
  const status = details.status || "COMPLETED";

  try {
    for (const item of cart) {
      const purchase = await prisma.purchaseHistory.create({
        data: {
          userId: payload.uid,
          itemId: item.product.id,
          quantity: item.quantity,
          priceAtPurchase: item.product.price,
          status: "PAID",
        },
      });

      await prisma.transactions.create({
        data: {
          purchaseId: purchase.id,
          productId: item.product.id,
          amount: item.product.price,
          currency,
          status,
        },
      });

      await prisma.wishlist.deleteMany({
        where: {
          userId: payload.uid,
          productId: item.product.id,
        },
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("❌ Failed to process PayPal transaction:", err);
    return new Response("Internal Server Error", { status: 500 });
  }
};
