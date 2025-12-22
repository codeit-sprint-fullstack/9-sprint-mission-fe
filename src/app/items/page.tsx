import Link from 'next/link'

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
  }>
}

export default async function ProductPage({ searchParams }: ProductPageProps) {
  const params = await searchParams
  const keyword = params.keyword || ''
  const orderBy = params.orderBy || 'recent'
  const page = parseInt(params.page || "1", 10)

  const itemData = await itemService.getItems(keyword, orderBy, page)

  const items = itemData.list || [];
  const pagination = itemData.pagination;

  return (
    <>
      <main className="container min-h-screen flex flex-col items-center mx-auto py-0 max-w-7xl">

        <div className="pt-6.5 flex flex-col w-full mx-auto ustify-center">
          <p className="font-pretendard text-gray-900 font-bold m-0">베스트 상품</p>
          <BestCardList items={items.slice(0, 4)} />
        </div>

        <div className="flex flex-col m-0 w-full max-md:flex max-md:flex-row max-md:justify-around max-md:pr-11.25 max-md:full">
          <div className="flex items-center justify-between w-full max-md:flex max-md:flex-row max-md:justify-around pr-11.25">
            <p className="text-start text-nowrap mr-2 font-pretendard text-gray-900 text-xl/loose font-bold" >판매 중인 상품</p>
            <div className="flex gap-3 text-nowrap">
              <Search placeholder="검색할 상품을 입력해주세요" />
              <Link href="/items/registration" className="flex justify-center items-center gap-2.5 h-10.5 px-3 py-5.75 border-0 rounded-lg bg-primary-100 text-gray-100 font-pretendard text-lg font-semibold leading-6.5 no-underline cursor-pointer" >
                상품 등록하기
              </Link>
              <Dropdown />
            </div>
          </div>
          <ul>
            {items.length > 0 ? (
              <li className='w-full'>
                <CardList items={items} />
              </li>
            ) : (
              <p className='text-center text-gray-500 py-10'>등록된 상품이 없습니다.</p>
            )}
          </ul>
        </div >
      </main >
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