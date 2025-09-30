// import { BestItemsSection } from './BestItemsSection';
import { SalesItemsSection } from './SalesItemsSection';
import { ItemProvider } from '@/providers/ItemProvider';
import './ItemsPage.css';

export function ItemsPage() {
  return (
    <ItemProvider>
      <main className="main item-main">
        <title>판다마켓-중고마켓</title>
        {/* 요구사항에 따른 임시적 주석 */}
        {/* <BestItemsSection /> */}
        <SalesItemsSection />
      </main>
    </ItemProvider>
  );
}
