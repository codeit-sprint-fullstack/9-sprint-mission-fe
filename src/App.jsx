import { Routes, Route } from 'react-router';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LandingPage } from './pages/LandingPage';
import { ItemsPage } from './pages/ItemsPage';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/items" element={<ItemsPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
