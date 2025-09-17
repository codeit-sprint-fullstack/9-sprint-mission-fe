import { BestItemsSection } from './pages/ItemPage/BestItemsSection';
import { SalesItemsSection } from './pages/ItemPage/SalesItemsSection';
import { ItemProvider } from './providers/ItemProvider';

function App() {
  return (
    <ItemProvider>
      <main className="main item-main">
        <BestItemsSection />
        <SalesItemsSection />
      </main>
    </ItemProvider>
  );
}

export default App;
