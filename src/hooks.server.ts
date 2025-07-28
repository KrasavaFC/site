import type { Handle } from "@sveltejs/kit";
import { jwtVerify } from "jose";

const AUTH_JWT_SECRET = new TextEncoder().encode(process.env.AUTH_JWT_SECRET!);

export const handle: Handle = async ({ event, resolve }) => {
  const token = event.cookies.get("auth_token");

  if (token) {
    try {
      const { payload } = await jwtVerify(token, AUTH_JWT_SECRET);
      (event.locals as any).user = {
        id: payload.uid as string,
        email: payload.email as string,
      };
    } catch {}
  }

  return resolve(event);
};
