import { NextRequest, NextResponse } from 'next/server';
// import { decode } from 'next-auth/jwt';

export default async function middleware(req: NextRequest) {
  const token = req.cookies.get('next-auth.session-token')?.value;

  // const payload = await decode({
  //   token,
  //   secret: process.env.NEXTAUTH_SECRET as string,
  // });

  if (!token) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin', '/dashboard'],
};
