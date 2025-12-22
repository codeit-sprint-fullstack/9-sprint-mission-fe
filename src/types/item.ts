import type { User } from './auth';
export type Item = {
  id: string;
  authorId: string;
  name: string;
  description: string;
  price: string;
  images: string[];
  favoriteCount: number;
  createdAt: string | Date;
  updatedAt: string | Date;
  deletedAt?: String | Date | null;
  // prisma 관계형 데이터 카운트
  user?: User;
  tags?: Tag[];
  _count: {
    comment: number;
    itemLikes: number;
  };
  type?: string;
  isLiked?: boolean;
};

export type ItemListResponse = {
  list: Item[];
  pagination: {
    totalPage: number;
    page: number;
    totalCount: number;
  };
};

export type Tag = {
  id: string;
  name: string;
};

export type ItemComment = {
  id: string;
  authorId: string;
  itemId: string;
  context: string;
  createdAt: string | Date;
  updatedAt: string | Date;

  author?: User;
};

export type ItemLike = {
  id: string;
  userId: string;
  itemId: string;
  createdAt: string | Date;
};
