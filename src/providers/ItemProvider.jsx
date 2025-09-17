import { useState, useEffect } from 'react';
import { usePagination } from '@/hooks/usePagination';
import { getProductList } from '../api/ProductService.js';
import { ItemContext } from '@/contexts/ItemContext.js';

const BEST_ITEM_PAGE_SIZE = 4;
const SALES_ITEM_PAGE_SIZE = 10;
const ITEM_PAGE_DEFULT = 1;

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

  const { currentPage, totalPages, setTotalItems, goToPage } = usePagination(
    ITEM_PAGE_DEFULT,
    SALES_ITEM_PAGE_SIZE,
  );

  useEffect(() => {
    const getBestItems = async () => {
      setIsBestLoading(true);
      setBestError(null);
      try {
        const data = await getProductList({
          page: ITEM_PAGE_DEFULT,
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
          page: currentPage,
          pageSize: SALES_ITEM_PAGE_SIZE,
          orderBy: salesOrderBy,
        };
        if (salesSearchTerm) {
          params.keyword = salesSearchTerm;
        }
        const data = await getProductList(params);
        console.log(data);
        setSalesItemList(data.list);
        setTotalItems(data.totalCount);
      } catch (err) {
        setSalesError(err);
      } finally {
        setIsSalesLoading(false);
      }
    };
    getSalesItems();
  }, [salesSearchTerm, salesOrderBy, currentPage, setTotalItems]);

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
      currentPage,
      totalPages,
      goToPage,
      handleSearchTermChange,
      handleOrderByChange,
    },
  };

  return (
    <ItemContext.Provider value={contextValue}>{children}</ItemContext.Provider>
  );
};
