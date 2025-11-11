import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

import prisma from '@/libs/prisma';
import { apiResponse } from '@/libs/utils/api-helper';

const JWT_SECRET = process.env.JWT_SECRET || 'your-super-secret-key';

export async function POST() {
  try {
    const cookieStore = await cookies();
    const refreshToken = cookieStore.get('refreshToken')?.value;

    if (!refreshToken) {
      return apiResponse(false, 'Refresh Token Not Found', null, 401);
    }

    // 저장된 토큰
    const storedToken = await prisma.refreshToken.findUnique({
      where: { token: refreshToken },
      include: { user: true },
    });

    // 저장된 토큰이 없거나 (현재시간이 만료시간을 넘은 즉,만료된 경우)
    if (!storedToken || new Date() > storedToken.expiresAt) {
      // 이 경우 이부분에서 다시 로그인을 해야하므로...
      return NextResponse.json(
        { message: 'Invalid or expired refresh token' },
        { status: 401 },
      );
    }

    const newAccessToken = jwt.sign(
      { userId: storedToken.user.id, email: storedToken.user.email },
      JWT_SECRET,
      { expiresIn: '15m' },
    );

    return NextResponse.json({ accessToken: newAccessToken });
  } catch (error) {
    console.error(error);
    // prettier-ignore
    return apiResponse(false, '토큰을 새로 고치는 동안 오류가 발생', null, 500, error.message)
  }
}
