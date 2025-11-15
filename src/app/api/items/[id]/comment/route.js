import prisma from '@/libs/prisma';
import {
  backItemCommentSchema,
  updateCommentSchema,
} from '@/libs/schemas/comment.schema';
import { apiResponse } from '@/libs/utils/api-helper';
import { getUserIdFromToken } from '@/libs/utils/auth-helper';

export const POST = async (request) => {
  let userId;
  try {
    userId = await getUserIdFromToken();
  } catch (error) {
    return apiResponse(false, error.message, null, 401);
  }

  const body = await request.json();
  const validateData = backItemCommentSchema.parse(body);
  const { itemId, context } = validateData;

  try {
    const newComment = await prisma.itemComment.create({
      data: {
        authorId: userId,
        itemId,
        context,
      },
    });

    if (!newComment) {
      return apiResponse(false, '댓글 생성에 실패하였습니다.', null, 400);
    }

    return apiResponse(true, '상품 생성에 성공하였습니다.', newComment, 201);
  } catch (error) {
    console.error(error);
    return apiResponse(false, 'Internal Server Error', null, 500);
  }
};

export const PATCH = async (request) => {
  let userId;
  try {
    userId = await getUserIdFromToken();
  } catch (error) {
    return apiResponse(false, error.message, null, 401);
  }

  const body = await request.json();
  const validateData = updateCommentSchema.parse(body);
  const { commentId, context } = validateData;

  try {
    await prisma.itemComment.update({
      where: { id: commentId },
      data: {
        authorId: userId,
        context: context,
      },
    });

    //prettier-ignore
    return apiResponse(true, '성공적으로 댓글을 업데이트하였습니다.', null, 200);
  } catch (error) {
    console.error(error);
    return apiResponse(false, 'Internal Server Error', null, 500);
  }
};

export const DELETE = async (request, { params }) => {
  let userId;
  try {
    userId = await getUserIdFromToken();
  } catch (error) {
    return apiResponse(false, error.message, null, 401);
  }

  const commentId = await request.nextUrl.searchParams.get('commentId');

  if (!commentId) {
    return apiResponse(false, '문의댓글 아이디를 찾을수 없습니다.', null, 404);
  }
  try {
    await prisma.itemComment.delete({
      where: { id: commentId, authorId: userId },
    });

    return apiResponse(true, '성공적으로 댓글을 삭제하였습니다.', null, 200);
  } catch (error) {
    console.error(error);
    return apiResponse(false, 'Internal Server Error', null, 500);
  }
};
