import prisma from '@/libs/prisma';
import { apiResponse } from '@/libs/utils/api-helper';

export const GET = async (request) => {
  try {
    const { searchParams } = new URL(request.url);

    const pageStr = searchParams.get('page') ?? '1';
    const limitStr = searchParams.get('limit') ?? '10';
    const keyword = searchParams.get('keyword') ?? '';
    const orderBy = searchParams.get('keyword') ?? 'recent';

    const page = parseInt(pageStr);
    const limit = parseInt(limitStr);
    const total = await prisma.item.count();
    const totalPage = Math.ceil(total / limit);

    const SORT_MAP = {
      recent: { createdAt: 'desc' },
      favorite: { createdAt: 'asc' },
    };

    const sortOptions = SORT_MAP[orderBy] ?? { createdAt: 'desc' };

    const items = await prisma.item.findMany({
      where: {
        OR: [
          { name: { contains: keyword, mode: 'insensitive' } },
          { description: { contains: keyword, mode: 'insensitive' } },
        ],
      },
      include: {
        user: {
          include: {
            userProfile: true,
          },
        },
      },
      orderBy: sortOptions,
      skip: limit * (page - 1),
      take: limit,
    });

    return apiResponse(true, '성공적으로 아이템을 가져왔습니다.', {
      items,
      pagination: { page, limit, total, totalPage },
    });
  } catch (error) {
    console.error('API Error:', error);
    return apiResponse(false, 'Internal Server Error', null, 500);
  }
};
