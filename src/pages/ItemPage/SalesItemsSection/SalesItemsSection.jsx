import React from 'react';
//import clsx from 'clsx';
import style from './SalesItemsSection.module.css';
import { ItemCard } from '@/pages/ItemPage/ItemCard';
import searchIcon from '@/assets/img/ic_search.svg';

export function SalesItemsSection() {
  return (
    <section id={style.salesItemSection}>
      <div className={style.sectionTopWrap}>
        <h2 className={style.sectionTitle}>판매 중인 상품</h2>
        <div className={style.inputWrap}>
          <img src={searchIcon} alt="검색" />
          <input
            id="serch-input"
            type="text"
            placeholder="검색할 상품을 입력해주세요"
          />
        </div>
      </div>
      <div className={style.itemLsit}>
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
