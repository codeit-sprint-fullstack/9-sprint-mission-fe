import { NextResponse } from 'next/server';

import prisma from '@/libs/prisma';

export async function GET() {
  try {
    const articles = await prisma.article.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      take: 3,

      include: {
        author: {
          include: {
            userProfile: true,
          },
        },
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Success getting best articles',
        data: articles,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error('Best Articles API Error:', error);

    return NextResponse.json(
      {
        success: false,
        message: 'Internal Server Error while fetching best articles',
      },
      { status: 500 },
    );
  }
}
