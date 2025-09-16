import React from 'react';
//import clsx from 'clsx';
import style from './BestItemsSection.module.css';
import { BestItemList } from '../BestItemList';

export function BestItemsSection() {
  return (
    <section id={style.bestItemSection}>
      <h2 className={style.sectionTitle}>베스트 상품</h2>
      <BestItemList />
    </section>
  );
}
