import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/style.css'
import Item from './Item.jsx'
import { Footer } from './components/Footer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Item />
    <Footer />
  </StrictMode>,
)
