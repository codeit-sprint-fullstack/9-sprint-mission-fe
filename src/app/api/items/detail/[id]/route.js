import { unstable_cache } from 'next/cache';

import prisma from '@/libs/prisma';
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
