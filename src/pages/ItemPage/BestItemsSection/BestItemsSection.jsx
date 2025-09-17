import styles from './BestItemsSection.module.css';
import { BestItemList } from '../BestItemList';

export function BestItemsSection() {
  return (
    <section id={styles.bestItemSection}>
      <h2 className={styles.sectionTitle}>베스트 상품</h2>
      <BestItemList />
    </section>
  );
}
