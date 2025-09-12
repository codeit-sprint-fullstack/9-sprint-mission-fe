import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import ItemPage from './ItemPage'; 

createRoot(document.getElementById('items-root')).render(
  <StrictMode>
    <ItemPage />
  </StrictMode>
)