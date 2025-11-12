import { unstable_cache } from 'next/cache';

import prisma from '@/libs/prisma';
import { articleFormSchema } from '@/libs/schemas/article.schema';
import { apiResponse } from '@/libs/utils/api-helper';

export const GET = async (request, { params }) => {
  const { id } = await params;
  if (!id) {
    return apiResponse(false, 'Not Found Article', null, 400);
  }
  /** @see https://nextjs.org/docs/app/api-reference/functions/unstable_cache */
  const articleCached = unstable_cache(
    async (id) => {
      const article = await prisma.article.findUnique({
        where: {
          id: id,
        },
        include: {
          Comment: {
            include: {
              author: {
                include: {
                  userProfile: true,
                },
              },
            },
          },
          author: {
            include: {
              userProfile: true,
            },
          },
        },
      });
      return article;
    },
    [`article-detail-${id}`],
    {
      tags: ['article', 'comment', `article-${id}`],
      revalidate: 3,
    },
  );

  try {
    const article = await articleCached(id);

    if (!article) {
      return apiResponse(false, `ID ${id} not found`, null, 404);
    }
    return apiResponse(true, 'Success Get Article', article, 200);
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
      return apiResponse(false, 'Not Found Article', null, 400);
    }
    const body = await request.json();
    const validateData = articleFormSchema.parse(body);
    const { title, content } = validateData;

    const updateArticle = await prisma.article.update({
      where: { id: parseInt(id) },
      data: {
        title,
        content,
      },
    });

    return apiResponse(true, 'Success Update Article', updateArticle, 200);
  } catch (error) {
    console.error('게시글 업데이트 중 오류 발생:', error);

    return apiResponse(
      false,
      '서버 오류로 게시글 업데이트에 실패했습니다.',
      null,
      500,
    );
  }
};

export const DELETE = async (request, { params }) => {
  const { id } = await params;
  if (!id) {
    return apiResponse(false, 'Not Found Article Id', null, 404);
  }
  const articleId = parseInt(id);
  try {
    await prisma.article.delete({
      where: { id: articleId },
    });

    return apiResponse(true, 'Article Deleted Successfully', null, 200);
  } catch (error) {
    console.error(error);
    return apiResponse(false, 'Internal Server Error', null, 500);
  }
};
