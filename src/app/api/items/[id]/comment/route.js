import prisma from '@/libs/prisma';
import {
  backItemCommentSchema,
  itemCommentSchema,
  updateCommentSchema,
} from '@/libs/schemas/comment.schema';
import { apiResponse } from '@/libs/utils/api-helper';

export const POST = async (request) => {
  const body = await request.json();
  const validateData = backItemCommentSchema.parse(body);
  const { authorId, itemId, context } = validateData;

  try {
    const newComment = await prisma.itemComment.create({
      data: {
        authorId,
        itemId,
        context,
      },
    });

    if (!newComment) {
      return apiResponse(false, '댓글 생성에 실패하였습니다.', null, 400);
    }

    return apiResponse(true, '상품 생성에 성공하였습니다.', newComment);
  } catch (error) {
    console.error(error);
    return apiResponse(false, 'Internal Server Error', null, 500);
  }
};

export const PATCH = async (request) => {
  const body = await request.json();

  const validateData = updateCommentSchema.parse(body);
  const { commentId, context } = validateData;

  try {
    await prisma.itemComment.update({
      where: { id: commentId },
      data: { context: context },
    });

    //prettier-ignore
    return apiResponse(true, '성공적으로 댓글을 업데이트하였습니다.', null, 200);
  } catch (error) {
    console.error(error);
    return apiResponse(false, 'Internal Server Error', null, 500);
  }
};

export const DELETE = async (request, { params }) => {
  const id = request.nextUrl.searchParams.get('commentId');

  if (!id) {
    console.log(id);
    return apiResponse(false, '문의댓글 아이디를 찾을수 없습니다.', null, 404);
  }
  try {
    await prisma.itemComment.delete({
      where: { id: id },
    });

    return apiResponse(true, '성공적으로 댓글을 삭제하였습니다.', null, 200);
  } catch (error) {
    console.error(error);
    return apiResponse(false, 'Internal Server Error', null, 500);
  }
};
