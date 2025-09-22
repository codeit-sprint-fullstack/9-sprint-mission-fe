<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from "react";
import { Link } from "react-router-dom";
import { usePagination } from "@/hooks/usePagination";
import { useOutletContext } from "react-router-dom";

import { DropDown } from "@/components/UI/Button/DropDown";
import { CardList } from "@/components/UI/Card/CardList";
import { FavoriteCardList } from "@/components/UI/Card/FavoriteCardList";
import { Input } from "@/components/UI/Input/Input";
import { Pagination } from "@/components/Pagination/Pagination";

import styles from './ProductPage.module.css';

export function ProductPage() {
  const { isMobile, isTablet, itemsPerPage } = useOutletContext();
  const [keyword, setKeyword] = useState('');
  const [sortType, setSortType] = useState('recent');

  const initialItemPerPage = isMobile ? 4 : isTablet ? 6 : 10;
  const initialFavoritePerPage = isMobile ? 1 : isTablet ? 2 : 4;
  // custom hooks
=======
import { useEffect, useState } from "react"
=======
import { useState } from "react"
>>>>>>> f60f038 (feat: items페이지 추가, Outlet Context로 products페이지 코드 수정)
import { usePagination } from "@/hooks/usePagination"

import { ItemHeader } from "@/components/UI/Nav/ItemHeader"
import { DropDown } from "@/components/UI/Button/DropDown"
import { Footer } from "@/components/UI/Footer/Footer"
import { CardList } from "@/components/UI/Card/CardList"
import { FavoriteCardList } from "@/components/UI/Card/FavoriteCardList"
import { Input } from "@/components/UI/Input/Input"
import { Pagination } from "@/components/Pagination/Pagination"

import styles from './ProductPage.module.css'
import { useOutletContext } from "react-router-dom"

export function ProductPage() {
  const {isMobile, isTablet, itemsPerPage } = useOutletContext()
  const [keyword, setKeyword] = useState('');
  const [sortType, setSortType] = useState('recent');

  const initialItemPerPage = isMobile ? 4 : isTablet ? 6 : 10;
  const initialFavoritePerPage = isMobile ? 1 : isTablet ? 2 : 4;
  // custom hooks
<<<<<<< HEAD
  const { isTablet, isMobile } = useBreakPoint();
>>>>>>> c0ce3ff (Refactor: 리액트로 코드 리팩토링)
=======
>>>>>>> f60f038 (feat: items페이지 추가, Outlet Context로 products페이지 코드 수정)
  const {
    currentPage,
    setTotalItems,
    goToPage,
    totalPages
<<<<<<< HEAD
  } = usePagination(1, itemsPerPage);
  // 모바일 기기별 가져올 페이지 세팅 (초기에 먼저 렌더링)

=======
  } = usePagination(1, itemsPerPage)
  // 모바일 기기별 가져올 페이지 세팅 (초기에 먼저 렌더링)

<<<<<<< HEAD
  useEffect(() => {
    if (isMobile) {
      setItemsPerPage(4);
    } else if (isTablet) {
      setItemsPerPage(6);
    } else {
      setItemsPerPage(10);
    }
  }, [isMobile, isTablet])

  const initialItemPerPage = isMobile ? 4 : isTablet ? 6 : 10
  const initialFavoritePerPage = isMobile ? 1 : isTablet ? 2 : 4;

>>>>>>> c0ce3ff (Refactor: 리액트로 코드 리팩토링)
=======
>>>>>>> f60f038 (feat: items페이지 추가, Outlet Context로 products페이지 코드 수정)
  // search
  const handleSearch = (value) => {
    setKeyword(value);
    goToPage(1); // 검색 시 첫페이지로
<<<<<<< HEAD
  };

  return (
    <>
=======
  }

  return (
    <>
      <ItemHeader />
>>>>>>> c0ce3ff (Refactor: 리액트로 코드 리팩토링)
      <main className={styles.mainContainer}>

        <div className={styles.bestItemList}>
          <p className={styles.bestItemPara}>베스트 상품</p>
          <FavoriteCardList
            page={initialFavoritePerPage}
          />
        </div>

        <div className={styles.sellItemContainerPostion}>
          {!isMobile ? (
            <div className={styles.sellItemContainer}>
              <p className={styles.sellItemPara}>판매 중인 상품</p>
              <div className={styles.sellItemFilter}>
                <Input className={styles.sellItemInput} onSearch={handleSearch} />
<<<<<<< HEAD
                <Link to="/products/registration" className={styles.sellItemButton} >상품 등록하기</Link>
=======
                <button className={styles.sellItemButton} >상품 등록하기</button>
>>>>>>> c0ce3ff (Refactor: 리액트로 코드 리팩토링)
                <DropDown onChange={setSortType} page={goToPage} />
              </div>
            </div>
          ) : (
            <div className={styles.sellItemContainer}>
              <div className={styles.sellItemTop}>
                <p className={styles.sellItemPara}>판매 중인 상품</p>
                <button className={styles.sellItemButton}>상품 등록하기</button>
              </div>
              <div className={styles.sellItemFilter}>
                <Input className={styles.sellItemInput} onSearch={handleSearch} />
                <DropDown deviceType={"mobile"} onChange={setSortType} page={goToPage} />
              </div>
            </div>
          )}
          <CardList
            currentPage={currentPage}
            page={initialItemPerPage}
            keyword={keyword}
            sortType={sortType}
            setTotalItems={setTotalItems}
            backKeyword={handleSearch}
          />
        </div>
      </main>
<<<<<<< HEAD
=======

>>>>>>> c0ce3ff (Refactor: 리액트로 코드 리팩토링)
      <div>
        {/** pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={goToPage}
        />
      </div>
<<<<<<< HEAD

    </>
  );
=======
      {isMobile ? (
        <Footer type={'mobile'} />
      ) : (
        <Footer />
      )}
    </>
  )
>>>>>>> c0ce3ff (Refactor: 리액트로 코드 리팩토링)
}