import { useContext } from 'react';
import styles from './SalesItemList.module.css';
import { ItemCard } from '@/pages/ItemPage/ItemCard';
import { ItemContext } from '@/contexts/ItemContext.js';

export function SalesItemList() {
  const {
    sales: { itemList: salesItemList, isLoading, error },
  } = useContext(ItemContext);

  if (isLoading) return <p>로딩 중...</p>;
  if (error) return <p>에러가 발생했습니다.</p>;

  return (
    <div className={styles.itemLsit}>
      {salesItemList.map((item) => (
        <ItemCard key={item.id} itemValue={item} />
      ))}
    </div>
  );
}
