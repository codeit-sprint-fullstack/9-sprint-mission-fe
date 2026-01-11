import jwt, { type JwtPayload } from 'jsonwebtoken';
import { cookies } from 'next/headers';

import { apiResponse } from './api-helper';

const JWT_SECRET = process.env.JWT_SECRET;

interface CustomJwtPayload extends JwtPayload {
  userID: string;
}

export const getUserIdFromToken = async () => {
  const cookieStore = await cookies();
  const accessTokenCookie = cookieStore.get('accessToken');

  if (!accessTokenCookie) {
    return apiResponse(false, '인증이 필요합니다.', null, 401);
  }

  if (!JWT_SECRET) {
    throw new Error('JWT_SECRET이 환경 변수에 설정되지  않았습니다.');
  }

  try {
    const decodedToken = jwt.verify(
      accessTokenCookie.value,
      JWT_SECRET,
    ) as CustomJwtPayload;
    return decodedToken.userId;
  } catch (error) {
    return apiResponse(false, '유효하지 않거나 만료된 토큰', null, 401);
  }
};
