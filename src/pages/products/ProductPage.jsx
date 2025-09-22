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
<<<<<<< HEAD
>>>>>>> f60f038 (feat: items페이지 추가, Outlet Context로 products페이지 코드 수정)
=======
import { Link } from "react-router-dom"
>>>>>>> 127ba03 (Design: products/registration 페이지 디자인 완성)
import { usePagination } from "@/hooks/usePagination"
import { useOutletContext } from "react-router-dom"

import { DropDown } from "@/components/UI/Button/DropDown"
import { CardList } from "@/components/UI/Card/CardList"
import { FavoriteCardList } from "@/components/UI/Card/FavoriteCardList"
import { Input } from "@/components/UI/Input/Input"
import { Pagination } from "@/components/Pagination/Pagination"

import styles from './ProductPage.module.css'

export function ProductPage() {
  const { isMobile, isTablet, itemsPerPage } = useOutletContext()
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
<<<<<<< HEAD
      <ItemHeader />
>>>>>>> c0ce3ff (Refactor: 리액트로 코드 리팩토링)
=======
>>>>>>> 0bbce66 (Design: 중복된 헤더 푸터제거, a태그를 라우터Link로 변경)
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
<<<<<<< HEAD
                <Link to="/products/registration" className={styles.sellItemButton} >상품 등록하기</Link>
=======
                <button className={styles.sellItemButton} >상품 등록하기</button>
>>>>>>> c0ce3ff (Refactor: 리액트로 코드 리팩토링)
=======
                <Link to="/products/registration" className={styles.sellItemButton} >상품 등록하기</Link>
>>>>>>> 127ba03 (Design: products/registration 페이지 디자인 완성)
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
<<<<<<< HEAD
=======

>>>>>>> c0ce3ff (Refactor: 리액트로 코드 리팩토링)
=======
>>>>>>> 0bbce66 (Design: 중복된 헤더 푸터제거, a태그를 라우터Link로 변경)
      <div>
        {/** pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={goToPage}
        />
      </div>
<<<<<<< HEAD
<<<<<<< HEAD

    </>
  );
=======
      {isMobile ? (
        <Footer type={'mobile'} />
      ) : (
        <Footer />
      )}
=======

>>>>>>> 0bbce66 (Design: 중복된 헤더 푸터제거, a태그를 라우터Link로 변경)
    </>
  )
>>>>>>> c0ce3ff (Refactor: 리액트로 코드 리팩토링)
}