import { z } from 'zod';

const createCommentSchema = z.object({
  authorId: z.number(),
  articleId: z.number(),
  context: z.string().min(1, '댓글 내용을 입력해주세요.'),
});

const updateCommentSchema = z.object({
  commentId: z.string({ message: '유효한 댓글 ID가 아닙니다.' }),
  context: z.string().min(1, '수정할 댓글 내용을 입력해주세요.'),
});

const itemCommentSchema = z.object({
  context: z.string().min(1, '댓글 내용을 입력해주세요'),
});

const backItemCommentSchema = z.object({
  authorId: z.string(),
  itemId: z.string(),
  context: z.string().min(1, '댓글 내용을 입력해주세요.'),
});

const updateItemCommentSchema = z.object({
  commentId: z.number({ message: '유효한 댓글 ID가 아닙니다.' }),
  context: z.string().min(1, '수정할 댓글 내용을 입력해주세요.'),
});

export {
  backItemCommentSchema,
  createCommentSchema,
  itemCommentSchema,
  updateCommentSchema,
  updateItemCommentSchema,
};
