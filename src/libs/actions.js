'use server';

import { revalidateTag } from 'next/cache';
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

    revalidateTag('comment');

    return { message: 'Added Todo Successfully' };
  } catch (error) {
    console.error(error);
    if (error instanceof z.ZodError) {
      return { message: 'Invalid input data', errors: error.errors };
    }
    return { message: 'Failed to create comment' };
  }
};
