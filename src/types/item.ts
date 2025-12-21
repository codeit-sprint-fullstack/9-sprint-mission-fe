export type Item = {
  id: number;
  name: string;
  description: string;
  price: number;
  images: string[];
  ownerId: number;
  favoriteCount: number;
  createdAt: string;
  updatedAt: string;
  // prisma 관계형 데이터 카운트
  _count: {
    itemLikes: number;
  };
  type?: string;
};

export type ItemListResponse = {
  list: Item[];
  totalCount: number;
};
