import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { getProducts } from '@/api/items'
import { ItemContext } from '@/context/ItemContext';


// API 로부터 상품 목록과 페이지네이션 상태를 관리

const ITEMS_PER_PAGE = 12;

// 상품 데이터와 상태를 제공
const ItemProvider = ({ children }) => {
  const [bestProduct, setBestProduct] = useState([]);
  const [isBestProductLoading, setIsBestProductLoading] = useState(true);
  const [bestProductError, setBestProductError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const getBestProduct = async () => {
      setIsBestProductLoading(true);
      setBestProductError(null);
      try {
        const { data, totalCount } = await getProducts(
          currentPage,
          ITEMS_PER_PAGE,
        );
        setBestProduct(data);
      } catch (err) {
        setBestProductError(err.message);
      } finally {
        setIsBestProductLoading(false);
      }
    };
    getBestProduct();
  }, [currentPage]);

  return (
    <ItemContext.Provider value={{
      bestProduct, isBestProductLoading, bestProductError, currentPage, setCurrentPage

    }}
    >
      {children}
    </ItemContext.Provider>
  );
}

export default ItemProvider;





