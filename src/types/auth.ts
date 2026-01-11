export type User = {
  id: string;
  nickname: string;
  email: string;
  createdAt: string | Date;
  updatedAt: string | Date;
  deletedAt?: String | Date | null;

  userProfile?: UserProfile | null;
  image?: string | null;
};

export type UserProfile = {
  id: string;
  userId: string;
  photoUrl: string | null;
  bio: string | null;
};

export type AuthResponse = {
  accessToken: string;
  refreshToken: string;
  user: User;
};

// 토큰 관련 타입 (필요 시)
export type RefreshToken = {
  id: string;
  token: string;
  expiresAt: string | Date;
  userId: string;
};
