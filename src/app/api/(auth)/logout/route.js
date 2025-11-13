import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

import prisma from '@/libs/prisma';

export async function POST() {
  try {
    const cookieStore = cookies();
    const refreshToken = cookieStore.get('refreshToken')?.value;

    if (refreshToken) {
      await prisma.refreshToken.deleteMany({
        where: { token: refreshToken },
      });
    }

    cookies().set('refreshToken', '', {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
      sameSite: 'strict',
      path: '/',
      expires: new Date(0),
    });

    return NextResponse.json({ message: 'Logged out successfully' });
  } catch (error) {
    return NextResponse.json(
      { message: 'An error occurred during logout', error: error.message },
      { status: 500 },
    );
  }
}
