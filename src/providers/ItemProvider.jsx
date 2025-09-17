import { useState, useEffect } from 'react';
import { getProductList } from '../api/ProductService.js';
import { ItemContext } from '@/contexts/ItemContext.js';

const BEST_ITEM_PAGE_SIZE = 4;
const SALES_ITEM_PAGE_SIZE = 10;
const ITEM_PAGE_NUM = 1;

export const ItemProvider = ({ children }) => {
  // State for Best Items
  const [bestItemList, setBestItemList] = useState([]);
  const [isBestLoading, setIsBestLoading] = useState(true);
  const [bestError, setBestError] = useState(null);

  // State for Sales Items
  const [salesItemList, setSalesItemList] = useState([]);
  const [isSalesLoading, setIsSalesLoading] = useState(true);
  const [salesError, setSalesError] = useState(null);
  const [salesSearchTerm, setSalesSearchTerm] = useState('');
  const [salesOrderBy, setSalesOrderBy] = useState('recent');

  const handleSearchTermChange = (value) => {
    setSalesSearchTerm(value);
  };

  const handleOrderByChange = (value) => {
    setSalesOrderBy(value);
  };

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

  useEffect(() => {
    const getSalesItems = async () => {
      setIsSalesLoading(true);
      setSalesError(null);
      try {
        const params = {
          page: ITEM_PAGE_NUM,
          pageSize: SALES_ITEM_PAGE_SIZE,
          orderBy: salesOrderBy,
        };
        if (salesSearchTerm) {
          params.keyword = salesSearchTerm;
        }
        const data = await getProductList(params);
        setSalesItemList(data.list);
      } catch (err) {
        setSalesError(err);
      } finally {
        setIsSalesLoading(false);
      }
    };
    getSalesItems();
  }, [salesSearchTerm, salesOrderBy]);

  const contextValue = {
    best: {
      itemList: bestItemList,
      isLoading: isBestLoading,
      error: bestError,
    },
    sales: {
      itemList: salesItemList,
      isLoading: isSalesLoading,
      error: salesError,
      handleSearchTermChange,
      handleOrderByChange,
    },
  };

  return (
    <ItemContext.Provider value={contextValue}>{children}</ItemContext.Provider>
  );
};
