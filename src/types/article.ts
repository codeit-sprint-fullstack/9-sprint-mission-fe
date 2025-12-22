import type { User } from './auth';

export type Article = {
  id: number;
  authorId: number;
  title: string;
  content: string;
  images?: string[];
  view: number;
  createdAt: string;
  updatedAt: string;
  author: User;

  _count: {
    comment: number;
  };
};

export type ArticleComment = {
  id: string;
  authorId: string;
  articleId: string;
  context: string;
  createdAt: string | Date;
  updatedAt: string | Date;
  author?: User;
};

export type ArticleListResponse = {
  list: Article[];
  pagination: {
    totalPage: number;
    page: number;
  };
};
