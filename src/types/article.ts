export type Article = {
  id: number;
  title: string;
  content: string;
  image?: string;
  createdAt: string;
  updatedAt: string;
  writerId: number;
  likeCount: number;
  _count: {
    commentCounter: number;
  };
};

export type ArticleListResponse = {
  list: Article[];
  totalCount: number;
};
