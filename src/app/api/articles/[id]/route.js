import { NextResponse } from 'next/server';

import prisma from '@/libs/prisma';

export const GET = async (request, { params }) => {
  try {
    const { id } = await params;
    if (!id) {
      return NextResponse.json(
        { success: false, message: 'not found article' },
        { status: 400 },
      );
    }

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
