import styles from './SalesItemList.module.css';
import { ItemCard } from '@/pages/ItemPage/ItemCard';

export function SalesItemList({ itemList }) {
  return (
    <div className={styles.itemLsit}>
      {itemList.map((item) => (
        <ItemCard key={item.id} itemValue={item} />
      ))}
    </div>
  );
}
