import React from 'react';
//import clsx from 'clsx';
import styles from './SalesItemsSection.module.css';
import { ItemCard } from '@/pages/ItemPage/ItemCard';
import searchIcon from '@/assets/img/ic_search.svg';
import arrowDownIcon from '@/assets/img/ic_arrow_down.svg';

export function SalesItemsSection() {
  return (
    <section id={styles.salesItemSection}>
      <div className={styles.sectionTopWrap}>
        <h2 className={styles.sectionTitle}>판매 중인 상품</h2>
        <div className={styles.inputWrap}>
          <img src={searchIcon} alt="검색" />
          <input
            id="serch-input"
            type="text"
            placeholder="검색할 상품을 입력해주세요"
          />
        </div>
        <a href="" className="s-btn compact">
          상품 등록하기
        </a>
        <div className="dropdown-menu">
          <button className="dropdown-menu-btn">
            <span className="dropdown-state">최신순</span>
            <picture>
              <img
                className="dropdown-icon"
                src={arrowDownIcon}
                alt="정렬메뉴"
              />
            </picture>
          </button>
          <ul className="dropdown-menu-selecte">
            <li>
              <button>최신순</button>
            </li>
            <li>
              <button>좋아요순</button>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.itemLsit}>
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </div>
    </section>
  );
}
