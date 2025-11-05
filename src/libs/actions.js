'use server';

import { updateTag } from 'next/cache';
import { z } from 'zod';

import prisma from './prisma';

const createCommentSchema = z.object({
  authorId: z.int(),
  articleId: z.int(),
  context: z.string().min(1, '댓글 내용을 입력해주세요.'),
});

export const createComment = async (formData) => {
  const rawAuthorId = formData.get('authorId');
  const rawArticleId = formData.get('articleId');

  try {
    const validateSchema = createCommentSchema.parse({
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
      return { message: 'Invalid input data', issues: error.issues };
    }
    return { message: 'Failed to create comment' };
  }
};

export const updateComment = async (formData) => {
  const commentId = formData.get('commentId');
  const newContext = formData.get('context');
  console.log(commentId);
  try {
    if (!commentId) return { success: false, message: 'Invalid input' };

    await prisma.comment.update({
      where: { id: parseInt(commentId) },
      data: { context: newContext },
    });

    updateTag('comment');

    return { success: true, message: 'success update comment' };
  } catch (error) {
    console.error(error);
    if (error instanceof z.ZodError) {
      return { message: 'Invalid input data', issues: error.issues };
    }
    return { success: false, message: 'falied update comment' };
  }
};

export const deleteComment = async (id) => {
  try {
    if (!id) return { success: false, message: 'Invalid id' };

    await prisma.comment.delete({
      where: { id: parseInt(id) },
    });

    updateTag('comment');

    return { success: true, message: 'success delete comment' };
  } catch (error) {
    console.error(error);
    if (error instanceof z.ZodError) {
      return { message: 'Invalid data', issues: error.issues };
    }
    return { success: false, message: 'falied delete comment' };
  }
};
