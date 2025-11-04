import { unstable_cache } from 'next/cache';
import { NextResponse } from 'next/server';

import prisma from '@/libs/prisma';

export const GET = async (request, { params }) => {
  const { id } = await params;
  if (!id) {
    return NextResponse.json(
      { success: false, message: 'not found article' },
      { status: 400 },
    );
  }
  /** @see https://nextjs.org/docs/app/api-reference/functions/unstable_cache */
  const articleCached = unstable_cache(
    async (articleId) => {
      const article = await prisma.article.findUnique({
        where: {
          id: parseInt(articleId),
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
      return NextResponse.json(
        { success: false, message: `ID ${articleId} not found` },
        { status: 404 },
      );
    }
    return NextResponse.json(
      {
        success: true,
        message: 'success get article',
        data: article,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error('API Error', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Internal Server Error',
        error: error.message,
      },
      { status: 500 },
    );
  }
};
