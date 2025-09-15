import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@/styles/reset.css';
import '@/styles/fontface.css';
import '@/styles/style.css';
import Item from '@/Item.jsx';
//import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Header /> */}
    <Item />
    <Footer />
  </StrictMode>,
);
