import { unstable_cache } from 'next/cache';

import prisma from '@/libs/prisma';
import { itemFormSchema } from '@/libs/schemas/item.schema';
import { apiResponse } from '@/libs/utils/api-helper';

export const GET = async (request, { params }) => {
  const { id } = await params;
  if (!id) {
    return apiResponse(false, 'Not Found Article', null, 400);
  }
  /** @see https://nextjs.org/docs/app/api-reference/functions/unstable_cache */
  const itemCached = unstable_cache(
    async (itemId) => {
      const item = await prisma.item.findUnique({
        where: {
          id: itemId,
        },
        include: {
          user: {
            include: {
              userProfile: true,
            },
            include: {
              comments: true,
            },
          },
        },
      });
      return item;
    },
    [`article-detail-${id}`],
    {
      tags: ['item', 'item-comment', `article-${id}`],
      revalidate: 3,
    },
  );

  try {
    const item = await itemCached(id);

    if (!item) {
      return apiResponse(false, `ID ${id} not found`, null, 404);
    }
    return apiResponse(true, 'Success Get Article', item, 200);
  } catch (error) {
    console.error('API Error', error);
    return apiResponse(
      false,
      'Internal Server Error',
      null,
      500,
      error.message,
    );
  }
};

export const PATCH = async (request, { params }) => {
  try {
    const { id } = await params;
    if (!id) {
      return apiResponse(false, '상품 아이디를 찾을수없습니다.', null, 404);
    }
    const body = await request.json();
    const validateData = itemFormSchema.parse(body);
    const { name, description, price } = validateData;

    const updateItem = await prisma.item.update({
      where: { id: id },
      data: {
        name,
        description,
        price,
      },
    });
    return apiResponse(
      true,
      '상품 업데이트가 완료되었습니다.',
      updateItem,
      200,
    );
  } catch (error) {
    console.error(error);

    return apiResponse(
      false,
      '서버 오류로 상품 업데이트에 실패했습니다',
      null,
      500,
    );
  }
};
