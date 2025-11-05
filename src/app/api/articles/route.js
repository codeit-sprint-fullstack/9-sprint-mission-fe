import { NextResponse } from 'next/server';

import prisma from '@/libs/prisma';

export const GET = async (request) => {
  try {
    const { searchParams } = new URL(request.url);

    const pageStr = searchParams.get('page') ?? '1';
    const limitStr = searchParams.get('limit') ?? '10';
    const keyword = searchParams.get('keyword') ?? '';
    const orderBy = searchParams.get('orderBy') ?? 'recent';

    const page = parseInt(pageStr);
    const limit = parseInt(limitStr);
    const total = await prisma.article.count();
    const totalPage = Math.ceil(total / limit);

    const SORT_MAP = {
      recent: { createdAt: 'desc' },
      favorite: { createdAt: 'asc' },
    };
    const sortOptions = SORT_MAP[orderBy] ?? { createdAt: 'desc' };

    const articles = await prisma.article.findMany({
      where: {
        OR: [{ title: { contains: keyword, mode: 'insensitive' } }],
      },
      include: {
        author: {
          include: {
            userProfile: true,
          },
        },
      },
      orderBy: sortOptions,
      skip: limit * (page - 1),
      take: limit,
    });

    return NextResponse.json({
      success: true,
      message: 'success get articles',
      data: articles,
      pagination: {
        page,
        limit,
        total,
        totalPage,
      },
    });
  } catch (error) {
    console.error('API Error:', error);

    return NextResponse.json(
      {
        success: false,
        message: 'Internal Server Error',
      },
      { status: 500 },
    );
  }
};

export const POST = async (request) => {
  try {
    const body = await request.json();
    const { title, content } = body;

    const FAKE_ID = 72;

    // TODO: userId
    const newArticle = await prisma.article.create({
      data: {
        title,
        content,
        authorId: FAKE_ID,
        view: 0,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: 'success create article',
        data: newArticle,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error('API Post Error', error);

    return NextResponse.json(
      {
        success: false,
        message: 'Internal Server Error',
      },
      { status: 500 },
    );
  }
};
