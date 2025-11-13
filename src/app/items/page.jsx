import Link from 'next/link'

import { CardList } from '@/components/layouts/Items/card-list';
// import { Pagination } from "@/components/Pagination/Pagination";
// import { CardList } from "@/components/UI/Card/CardList";
// import { FavoriteCardList } from "@/components/UI/Card/FavoriteCardList";
import { Dropdown } from '@/components/ui/dropdown';
import { Search } from '@/components/ui/search';
import { getItems } from '@/services/item-service';

export default async function ProductPage(props) {
  const searchParams = await props.searchParams
  const keyword = searchParams.keyword || ''
  const orderBy = searchParams.orderBy || 'recent'
  const { items } = await getItems(keyword, orderBy)
  // custom hooks
  // const {
  //   currentPage,
  //   setTotalItems,
  //   goToPage,
  //   totalPages
  // } = usePagination(1, itemsPerPage);
  // 모바일 기기별 가져올 페이지 세팅 (초기에 먼저 렌더링)

  // search
  // const handleSearch = (value) => {
  //   setKeyword(value);
  //   goToPage(1); // 검색 시 첫페이지로
  // };

  return (
    <>
      <main className="container w-full min-h-screen flex flex-col items-center mx-auto py-0 max-w-480">

        <div className="pt-6.5 flex flex-col max-w-480">
          <p className="font-pretendard text-gray-900 font-bold m-0">베스트 상품</p>
          {/* <FavoriteCardList
            page={initialFavoritePerPage}
          /> */}
        </div>

        <div className="flex flex-col items-center m-0 max-md:flex max-md:flex-row max-md:justify-around max-md:pr-11.25 max-md:full">
          <div className="flex items-center justify-between w-full max-md:flex max-md:flex-row max-md:justify-around pr-11.25">
            <p className="text-start font-pretendard text-gray-900 text-xl/loose font-bold" >판매 중인 상품</p>
            <div className="flex items-center gap-3">
              <Search />
              <Dropdown />
              <Link href="/items/registration" className="flex justify-center items-center gap-2.5 h-10.5 px-3 py-5.75 border-0 rounded-lg bg-primary-100 text-gray-100 font-pretendard text-lg font-semibold leading-6.5 no-underline cursor-pointer" >
                상품 등록하기
              </Link>
            </div>
          </div>
          {items.length > 0 ? (
            <CardList items={items} />
          ) : (
            <p className='text-center text-gray-500 py-10'>등록된 상품이 없습니다.</p>
          )}
        </div >
      </main >
      <div>
        {/** pagination */}
        {/* <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={goToPage}
        /> */}
      </div>
    </>
  );
}