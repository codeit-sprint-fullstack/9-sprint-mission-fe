import { BestItemsSection } from './pages/ItemPage/BestItemsSection';
import { SalesItemsSection } from './pages/ItemPage/SalesItemsSection';
import { ItemProvider } from './providers/ItemProvider';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

function App() {
  return (
    <ItemProvider>
      <Header />
      <main className="main item-main">
        <BestItemsSection />
        <SalesItemsSection />
      </main>
      <Footer />
    </ItemProvider>
  );
}

export default App;
