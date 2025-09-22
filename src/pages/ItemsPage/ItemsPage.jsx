import { BestItemsSection } from './BestItemsSection';
import { SalesItemsSection } from './SalesItemsSection';
import { ItemProvider } from '@/providers/ItemProvider';
import './ItemsPage.css';

export function ItemsPage() {
  return (
    <ItemProvider>
      <main className="main item-main">
        <title>판다마켓-중고마켓</title>
        <BestItemsSection />
        <SalesItemsSection />
      </main>
    </ItemProvider>
  );
}
