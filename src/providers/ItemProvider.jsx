import { useState, useEffect } from 'react';
import { getProductList } from '../api/ProductService.js';
import { ItemContext } from '@/contexts/ItemContext.js';

const BEST_ITEM_PAGE_SIZE = 4;
const SALES_ITEM_PAGE_SIZE = 8;
const ITEM_PAGE_NUM = 1;

export const ItemProvider = ({ children }) => {
  // State for Best Items
  const [bestItemList, setBestItemList] = useState([]);
  const [isBestLoading, setIsBestLoading] = useState(true);
  const [bestError, setBestError] = useState(null);

  useEffect(() => {
    const getBestItems = async () => {
      setIsBestLoading(true);
      setBestError(null);
      try {
        const data = await getProductList({
          page: ITEM_PAGE_NUM,
          pageSize: BEST_ITEM_PAGE_SIZE,
          orderBy: 'favorite',
        });
        setBestItemList(data.list);
      } catch (err) {
        setBestError(err);
      } finally {
        setIsBestLoading(false);
      }
    };

    getBestItems();
  }, []);

  const contextValue = {
    best: {
      itemList: bestItemList,
      isLoading: isBestLoading,
      error: bestError,
    },
  };

  return (
    <ItemContext.Provider value={contextValue}>{children}</ItemContext.Provider>
  );
};
