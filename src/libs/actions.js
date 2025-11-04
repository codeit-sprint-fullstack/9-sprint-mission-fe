'use server';

import { updateTag } from 'next/cache';
import { z } from 'zod';

import prisma from './prisma';

const schema = z.object({
  authorId: z.int(),
  articleId: z.int(),
  context: z.string().min(1, '댓글 내용을 입력해주세요.'),
});

export const createComment = async (formData) => {
  console.log(formData);

  const rawAuthorId = formData.get('authorId');
  const rawArticleId = formData.get('articleId');

  try {
    const validateSchema = schema.parse({
      authorId: parseInt(rawAuthorId),
      articleId: parseInt(rawArticleId),
      context: formData.get('context'),
    });

    await prisma.comment.create({
      data: {
        authorId: validateSchema.authorId,
        articleId: validateSchema.articleId,
        context: validateSchema.context,
      },
    });
    /**
     * @see https://nextjs.org/docs/messages/revalidate-tag-single-arg
     * @see https://nextjs.org/docs/app/api-reference/functions/updateTag
     * 두 번쨰 인수 없을시 헬퍼 호출됨(더이상 사용되지 않음) -> max추가
     */
    updateTag('comment');

    return { message: 'Added Todo Successfully' };
  } catch (error) {
    console.error(error);
    if (error instanceof z.ZodError) {
      return { message: 'Invalid input data', errors: error.errors };
    }
    return { message: 'Failed to create comment' };
  }
};
