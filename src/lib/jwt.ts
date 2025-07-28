import { SignJWT } from 'jose';

const AUTH_SECRET = new TextEncoder().encode(process.env.AUTH_JWT_SECRET!);

export async function signJwt(payload: { uid: string; email: string }): Promise<string> {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(AUTH_SECRET);
}
