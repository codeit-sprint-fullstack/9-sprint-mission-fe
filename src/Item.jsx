import { BestItemsSection } from './pages/ItemPage/BestItemsSection';
import { SalesItemsSection } from './pages/ItemPage/SalesItemsSection';

function Item() {
  return (
    <main className="main">
      <BestItemsSection />
      <SalesItemsSection />
    </main>
  );
}

export default Item;
