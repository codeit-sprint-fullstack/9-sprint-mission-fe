import { Routes, Route } from 'react-router';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LandingPage } from './pages/LandingPage';
import { ItemPage } from './pages/ItemPage';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/items" element={<ItemPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
