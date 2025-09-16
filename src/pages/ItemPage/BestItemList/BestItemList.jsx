import React from 'react';
import style from './BestItemList.module.css';
import { ItemCard } from '@/pages/ItemPage/ItemCard';

export function BestItemList() {
  return (
    <div className={style.itemLsit}>
      <ItemCard isParentBest={true} />
    </div>
  );
}
