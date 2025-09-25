import React, { useEffect, useState } from 'react';
import { ProductCard } from './ProductCard';
import { getProducts } from '@/api/items';
import SortIconArrowDown from '/resources/img/ic_arrow_down.svg?react';
import searchIcon from '../../resources/img/ic_search.png';
import sortIconMobile from '../../resources/img/ic_sort.png';
import DropdownList from './DropdownList.jsx';
import PaginationBar from '../Pagination/Pagination';
import styles from './ProductList.module.css';

const getPageSize = () => {
  const width = window.innerWidth;
  if (width < 768) {
    return 4;
  } else if (width < 1280) {
    return 6;
  } else {
    return 10;
  }
};



export default function ProductList() {
  const [orderBy, setOrderBy] = useState("recent");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(getPageSize());
  const [itemList, setItemList] = useState([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [totalPageNum, setTotalPageNum] = useState();
  const [keyword, setKeyword] = useState("");

  const fetchSortedData = async ({ orderBy, page, pageSize, keyword }) => {
    const products = await getProducts({ orderBy, page, pageSize, keyword });
    setItemList(products.list);
    setTotalPageNum(Math.ceil(products.totalCount / pageSize));
  }

  const handleSortSelection = (sortOption) => {
    setOrderBy(sortOption);
    setIsDropdownVisible(false);
  }

  //검색어 입력 변경 핸들러
  const handleInputChange = (event) => {
    setKeyword(event.target.value);
    setPage(1);
  };

  const handleSearch = () => {
    setPage(1);
    fetchSortedData({ orderBy, page: 1, pageSize, keyword });
  }

  const convertToKorean = (orderBy) => {
    switch (orderBy) {
      case "recent":
        return "최신순";
      case "favorite":
        return "좋아요순";
      default:
        return "최신순";
    }
  };


  useEffect(() => {

    const handleResize = () => {
      setPageSize(getPageSize());
    };

    window.addEventListener("resize", handleResize);
    fetchSortedData({ orderBy, page, pageSize, keyword });

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [orderBy, page, pageSize, keyword]);


  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const onPageChange = (pageNumber) => {
    setPage(pageNumber);
    fetchSortedData({ orderBy, page: pageNumber, pageSize, keyword });
  };

  return (
    <section id={styles.productList}>
      <div className={styles.productListInner}>
        <h2 className={styles.productListFont}>판매 중인 상품</h2>
        <div className={styles.searchSectionWrapper}>
          <div className={styles.searchSection}>
            <input
              placeholder='검색할 상품을 입력해주세요'
              value={keyword}
              className={styles.searchInput}
              onChange={handleInputChange}>
            </input>
          </div>
          <div to="additem" className={styles.createItemButton}>상품 등록하기</div>
          <div className={styles.sortButtonWrapper}>
            <button
              className={styles.sortDropdownTriggerButton}
              onClick={toggleDropdown}>
              <div className={styles.sortBtn}>
                <span>{convertToKorean(orderBy)}</span>
                <SortIconArrowDown />
              </div>
              <img src={sortIconMobile} className={styles.mobileSortBtn} alt="sort"></img>
            </button>
            {isDropdownVisible && (
              <DropdownList onSortSelection={handleSortSelection} />
            )}
          </div>
        </div>
      </div>
      <div className={styles.productGrid}>
        {itemList?.map((item) => (
          <ProductCard product={item} key={`market-item-${item.id}`} imageSize="small" />
        ))}
      </div>
      <div className={styles.paginationBarWrapper}>
        <PaginationBar
          totalPageNum={totalPageNum}
          activePageNum={page}
          onPageChange={onPageChange}
        />
      </div>
    </section >
  )

};

