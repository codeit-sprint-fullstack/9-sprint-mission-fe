import React from 'react';
//import clsx from 'clsx';
import style from './BestItemsSection.module.css';
import { ItemCard } from '@/pages/ItemPage/ItemCard';

export function BestItemsSection() {
  return (
    <section id={style.bestItemSection}>
      <h2 className={style.sectionTitle}>베스트 상품</h2>
      <div className={style.itemLsit}>
        <ItemCard isParentBest={true} />
        <ItemCard isParentBest={true} />
        <ItemCard isParentBest={true} />
        <ItemCard isParentBest={true} />
      </div>
    </section>
  );
}
