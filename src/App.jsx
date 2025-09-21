import NavBar from "@/components/navBar/NavBar";
import BestProducts from "@/components/bestProducts/BestProducts";
import ProductList from "@/pages/ProductList/ProductList";
import Footer from "@/components/footer/Footer";
import { MarketProvider } from "@/context/MarketContext";
import styles from '@/styles/app.module.css'
import '@/styles/global.css';
function App() {
  return (
    <MarketProvider>
        <NavBar />
        <div className={styles.wrap}>
          <BestProducts />
          <ProductList />
          <Footer/>
        </div>
    </MarketProvider>
  );
}

export default App;
