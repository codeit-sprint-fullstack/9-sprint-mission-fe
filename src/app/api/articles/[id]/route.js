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
    async (id) => {
      const article = await prisma.article.findUnique({
        where: {
          id: parseInt(id),
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
        { success: false, message: `ID ${id} not found` },
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

export const PATCH = async (request, { params }) => {
  try {
    const { id } = await params;
    if (!id) {
      return NextResponse.json(
        { success: false, message: 'not found article' },
        { status: 400 },
      );
    }
    const { title, content } = await request.json();

    const updateArticle = await prisma.article.update({
      where: { id: parseInt(id) },
      data: {
        title,
        content,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: 'success update article',
        data: updateArticle,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error('게시글 업데이트 중 오류 발생:', error);

    return NextResponse.json(
      {
        success: false,
        message: '서버 오류로 게시글 업데이트에 실패했습니다.',
      },
      { status: 500 },
    );
  }
};

export const DELETE = async (request, { params }) => {
  const { id } = await params;
  if (!id) {
    return NextResponse.json(
      {
        success: false,
        message: 'Not Found Article id',
      },
      { status: 404 },
    );
  }

  try {
    await prisma.article.delete({
      where: { id: parseInt(id) },
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        success: false,
        message: 'Internal Server Error',
      },
      { status: 500 },
    );
  }
};
