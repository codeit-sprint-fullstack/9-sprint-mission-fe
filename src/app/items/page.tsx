import Link from 'next/link';

import { BestCardList } from '@/components/layouts/Items/best-card-list';
import { CardList } from '@/components/layouts/Items/card-list';
import { Pagination } from '@/components/layouts/Pagination';
import { Dropdown } from '@/components/ui/dropdown';
import { Search } from '@/components/ui/search';
import { itemService } from '@/services/item-service';

interface ProductPageProps {
  searchParams: Promise<{
    keyword?: string;
    orderBy?: string;
    page?: string;
  }>;
}

export default async function ProductPage({ searchParams }: ProductPageProps) {
  const params = await searchParams;
  const keyword = params.keyword || '';
  const orderBy = params.orderBy || 'recent';
  const page = params.page || '1';

  const itemData = await itemService.getItems(keyword, orderBy, page);

  const items = itemData.data || [];
  const pagination = itemData.pagination || { page: 1, totalPage: 10 };

  return (
    <>
      <main className="container mx-auto flex min-h-screen max-w-7xl flex-col items-center py-0">
        <div className="ustify-center mx-auto flex w-full flex-col pt-6.5">
          <p className="font-pretendard m-0 font-bold text-gray-900">
            베스트 상품
          </p>
          <BestCardList items={items.slice(0, 4)} />
        </div>

        <div className="max-md:full m-0 flex w-full flex-col max-md:flex max-md:flex-row max-md:justify-around max-md:pr-11.25">
          <div className="flex w-full items-center justify-between pr-11.25 max-md:flex max-md:flex-row max-md:justify-around">
            <p className="font-pretendard mr-2 text-start text-xl/loose font-bold text-nowrap text-gray-900">
              판매 중인 상품
            </p>
            <div className="flex gap-3 text-nowrap">
              <Search placeholder="검색할 상품을 입력해주세요" />
              <Link
                href="/items/registration"
                className="bg-primary-100 font-pretendard flex h-10.5 cursor-pointer items-center justify-center gap-2.5 rounded-lg border-0 px-3 py-5.75 text-lg leading-6.5 font-semibold text-gray-100 no-underline"
              >
                상품 등록하기
              </Link>
              <Dropdown />
            </div>
          </div>
          <ul>
            {items.length > 0 ? (
              <li className="w-full">
                <CardList items={items} />
              </li>
            ) : (
              <p className="py-10 text-center text-gray-500">
                등록된 상품이 없습니다.
              </p>
            )}
          </ul>
        </div>
      </main>
      <>
        {/* * pagination */}
        <Pagination
          currentPage={pagination.page}
          totalPages={pagination.totalPage}
        />
      </>
    </>
  );
}
