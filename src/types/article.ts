import type { User } from './auth';

export type Article = {
  id: string;
  authorId: number;
  title: string;
  content: string;
  images?: string[];
  view: number;
  createdAt: string;
  updatedAt: string;
  author: User;

  comment: ArticleComment[];
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
