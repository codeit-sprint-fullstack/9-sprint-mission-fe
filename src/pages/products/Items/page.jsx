<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
=======
import { useState } from "react";
<<<<<<< HEAD
import { useOutletContext } from "react-router-dom";
>>>>>>> d185975 (Style: NavLink로 active시 3692FF색상변경, 호버시 navlink호비서 3692FF)
=======
import { Link, useOutletContext } from "react-router-dom";
>>>>>>> 127ba03 (Design: products/registration 페이지 디자인 완성)
import { usePagination } from "@/hooks/usePagination";

import { Pagination } from "@/components/Pagination/Pagination";
import { Input } from "@/components/UI/Input/Input";
import { DropDown } from "@/components/UI/Button/DropDown";
import { MyCardList } from "@/components/UI/Card/MyCardList";

<<<<<<< HEAD
<<<<<<< HEAD
import styles from './ItemsPage.module.css';

export function ItemsPage() {
  const { isMobile, isTablet, itemsPerPage } = useOutletContext();
  const [keyword, setKeyword] = useState('');
  const [sortType, setSortType] = useState('recent');

  const initialItemPerPage = isMobile ? 4 : isTablet ? 6 : 10;

  const {
    currentPage,
    setTotalItems,
    goToPage,
    totalPages
  } = usePagination(1, itemsPerPage);
  // 모바일 기기별 가져올 페이지 세팅 (초기에 먼저 렌더링)

  const handleSearch = (value) => {
    setKeyword(value);
    goToPage(1); // 검색 시 첫페이지로
  };

  return (
    <main className={styles.mainContainer}>
      <div className={styles.sellItemContainerPostion}>
        <div className={styles.sellItemContainer}>
          <div className={isMobile ? styles.sellItemTop : ""}>
            <p className={styles.sellItemPara}>판매 중인 상품</p>
            <div className={styles.sellItemFilter}>
              <Input className={styles.sellItemInput} onSearch={handleSearch} />
              <DropDown onChange={setSortType} page={goToPage} />
              {!isMobile ? (
                <Link to="/products/registration" className={styles.sellItemButton} >상품 등록하기</Link>
              ) : (
                <button className={styles.sellItemButton}>상품 등록하기</button>
              )}
            </div>
          </div>
        </div>
        <MyCardList
          currentPage={currentPage}
          page={initialItemPerPage}
          keyword={keyword}
          sortType={sortType}
          setTotalItems={setTotalItems}
          onSearch={handleSearch}
        />
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={goToPage}
      />
    </main>
  );
=======

export function ItemsPage() {
  <>
  <div>ites..</div>
  </>
>>>>>>> f60f038 (feat: items페이지 추가, Outlet Context로 products페이지 코드 수정)
=======
import styles from './ItemsPage.module.css'
=======
import styles from './ItemsPage.module.css';
>>>>>>> 38982bb (Style: eslint설정및 컨벤션유지)

export function ItemsPage() {
  const { isMobile, isTablet, itemsPerPage } = useOutletContext();
  const [keyword, setKeyword] = useState('');
  const [sortType, setSortType] = useState('recent');

  const initialItemPerPage = isMobile ? 4 : isTablet ? 6 : 10;

  const {
    currentPage,
    setTotalItems,
    goToPage,
    totalPages
  } = usePagination(1, itemsPerPage);
  // 모바일 기기별 가져올 페이지 세팅 (초기에 먼저 렌더링)

  const handleSearch = (value) => {
    setKeyword(value);
    goToPage(1); // 검색 시 첫페이지로
  };

  return (
    <>
      <main className={styles.mainContainer}>
        <div className={styles.sellItemContainerPostion}>
          {!isMobile ? (
            <div className={styles.sellItemContainer}>
              <p className={styles.sellItemPara}>판매 중인 상품</p>
              <div className={styles.sellItemFilter}>
                <Input className={styles.sellItemInput} onSearch={handleSearch} />
                <Link to="/products/registration" className={styles.sellItemButton} >상품 등록하기</Link>
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
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={goToPage}
        />
      </main>
    </>
<<<<<<< HEAD
  )
>>>>>>> d185975 (Style: NavLink로 active시 3692FF색상변경, 호버시 navlink호비서 3692FF)
=======
  );
>>>>>>> 38982bb (Style: eslint설정및 컨벤션유지)
}