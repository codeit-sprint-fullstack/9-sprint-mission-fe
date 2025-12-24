import { z } from 'zod';

const titleRule = z
  .string()
  .min(1, '제목을 입력해주세요.')
  .max(30, '제목은 30자 이내로 입력해주세요.')
  .trim();

const contentRule = (min: number, max: number) => {
  return z
    .string()
    .min(min, `내용은 ${min}자 이상 입력해주세요.`)
    .max(max, `내용은 ${max}자 이내로 입력해주세요.`)
    .trim();
};

export const articleFormSchema = z.object({
  title: titleRule,
  content: contentRule(10, 100),
});

export const articleCommentSchema = z.object({
  context: z.string().min(1, '댓글 내용을 입력해주세요'),
});

export const updateArticleCommentSchema = z.object({
  commentId: z.number({ message: '유효한 댓글 ID가 아닙니다.' }),
  context: z.string().min(1, '수정할 댓글 내용을 입력해주세요.'),
});

export type ArticleFormValues = z.infer<typeof articleFormSchema>;
export type ArticleCommentValues = z.infer<typeof articleCommentSchema>;
export type UpdateCommentFormValues = z.infer<
  typeof updateArticleCommentSchema
>;
