import { useContext } from 'react';
import styles from './BestItemList.module.css';
import { ItemCard } from '@/pages/ItemPage/ItemCard';
import { ItemContext } from '@/contexts/ItemContext.js';

export function BestItemList() {
  const {
    best: { itemList: bestItemList, isLoading, error },
  } = useContext(ItemContext);

  if (isLoading) return <p>로딩 중...</p>;
  if (error) return <p>에러가 발생했습니다.</p>;

  return (
    <div className={styles.itemLsit}>
      {bestItemList.map((item) => (
        <ItemCard key={item.id} itemValue={item} isParentBest={true} />
      ))}
    </div>
  );
}
