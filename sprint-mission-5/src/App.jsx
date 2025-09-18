import React, { useState } from 'react';
import TopBar from './components/TopBar';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import BestProduct from './components/BestProduct';
import style from './App.module.css';

function App(items) {
  /* const [order, setOrder] = useState('createdAt')
  const sortedItems = items.sort((a, b) => b[order] - a[order])
*/
  const handleNewestClick = () => setOrder('createdAt');
  const handleBestClick = () => setOrder('favorite');
  return (
    <>
      <h1 className={style.title}>판다마켓</h1>
      <TopBar />
      <section>
        <h2>베스트 상품</h2>
        <BestProduct />
      </section>

      <section>
        <button onClick={handleNewestClick}>최신순</button>
        <button onClick={handleBestClick}>베스트순</button>
       {/*} <ProductList items={sortedItems} /> */}
      </section>
      <Footer />
    </>
  );
}

export default App;