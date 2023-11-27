import { NextRequest, NextResponse } from 'next/server';
import { decode } from 'next-auth/jwt';

export default async function middleware(req: NextRequest) {
  const token = req.cookies.get('next-auth.session-token')?.value;
  console.log(token);
  const payload = await decode({
    token,
    secret: process.env.NEXTAUTH_SECRET as string,
  });

  if (req.nextUrl.pathname === '/admin' && payload?.role === 'ADMIN') {
    console.log('You are admin');
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin', '/dashboard'],
};
