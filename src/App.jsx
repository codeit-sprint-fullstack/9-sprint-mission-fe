import { Routes, Route } from 'react-router';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LandingPage } from './pages/LandingPage';
import { ItemsPage } from './pages/ItemsPage';
import { RegistItemPage } from './pages/RegistItemPage';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/items" element={<ItemsPage />} />
        <Route path="/registration" element={<RegistItemPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
