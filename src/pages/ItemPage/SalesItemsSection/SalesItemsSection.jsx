import { useState, useContext } from 'react';
import clsx from 'clsx';
import styles from './SalesItemsSection.module.css';
import { SalesItemList } from '@/pages/ItemPage/SalesItemList';
import { ItemContext } from '@/contexts/ItemContext.js';
import { Pagination } from '@/components/Pagenation';
import searchIcon from '@/assets/img/ic_search.svg';
import arrowDownIcon from '@/assets/img/ic_arrow_down.svg';
import DropDownIcon from '@/assets/img/ic_sort.svg';

export function SalesItemsSection() {
  const {
    sales: {
      itemList: salesItemList,
      isLoading,
      error,
      currentPage,
      totalPages,
      goToPage,
      handleSearchTermChange,
      handleOrderByChange,
    },
  } = useContext(ItemContext);
  const [isDropDownActive, setIsDropDownActive] = useState(false);
  const [dropDownState, setDropDownState] = useState('recent');

  const handleSearchInput = (event) => {
    handleSearchTermChange(event.target.value);
  };

  const handleDropDownBtnClick = () => {
    setIsDropDownActive(!isDropDownActive);
  };

  const handleOrderDropDwonSelect = (event) => {
    handleOrderByChange(event.target.value);
    setDropDownState(event.target.value);
    setIsDropDownActive(false);
  };

  return (
    <section id={styles.salesItemSection}>
      <div className={styles.sectionTopWrap}>
        <h2 className={styles.sectionTitle}>판매 중인 상품</h2>
        <div className={styles.inputWrap}>
          <img src={searchIcon} alt="검색" />
          <input
            id="serch-input"
            type="text"
            onKeyUp={handleSearchInput}
            placeholder="검색할 상품을 입력해주세요"
          />
        </div>
        <a href="" className={clsx('s-btn', 'compact', styles.newItemBtn)}>
          상품 등록하기
        </a>
        <div className={styles.dropdownMenu}>
          <button
            className={styles.dropdownMenuBtn}
            onClick={handleDropDownBtnClick}
          >
            <span className={styles.dropdownState}>
              {dropDownState === 'recent' ? '최신순' : '좋아요순'}
            </span>
            <picture>
              <source media="(max-width: 46.4rem)" srcSet={DropDownIcon} />
              <img
                className={styles.dropdownIcon}
                src={arrowDownIcon}
                alt="정렬메뉴"
              />
            </picture>
          </button>
          <ul
            className={clsx(
              styles.dropdownMenuSelecte,
              isDropDownActive && styles.on,
            )}
          >
            <li>
              <button value="recent" onClick={handleOrderDropDwonSelect}>
                최신순
              </button>
            </li>
            <li>
              <button value="favorite" onClick={handleOrderDropDwonSelect}>
                좋아요순
              </button>
            </li>
          </ul>
        </div>
      </div>
      {isLoading ? (
        <p>로딩 중...</p>
      ) : error ? (
        <p>에러가 발생했습니다...</p>
      ) : (
        <SalesItemList itemList={salesItemList} />
      )}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={goToPage}
      />
    </section>
  );
}
