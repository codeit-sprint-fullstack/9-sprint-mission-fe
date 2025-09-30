

import TopBar from '@/components/TopBar';
import Footer from '@/components/Footer';
import ProductList from './components/ProductList';
import BestProduct from './components/BestProduct';
import ItemProvider from './provider/ItemProvider';
import PaginationBar from './Pagination/Pagination';
import styles from './App.module.css';
import DropdownList from './components/DropdownList';

function App() {

  return (
    <>
      <ItemProvider>
        <h1 className={styles.title}>판다마켓</h1>
        <TopBar />
        <main className={styles.mainSection}>
          <BestProduct />
          <ProductList />
        </main>
        <Footer />
      </ItemProvider>
    </>
  );
}

export default App;