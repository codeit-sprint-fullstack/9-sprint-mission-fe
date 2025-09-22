import { BestItemsSection } from './BestItemsSection';
import { SalesItemsSection } from './SalesItemsSection';
import { ItemProvider } from '@/providers/ItemProvider';

export function ItemPage() {
  return (
    <ItemProvider>
      <main className="main item-main">
        <BestItemsSection />
        <SalesItemsSection />
      </main>
    </ItemProvider>
  );
}
