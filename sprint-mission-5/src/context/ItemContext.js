import { createContext, useContext } from 'react';

const defaultItemValue = {
  itemList: [],
  isLoading: false,
  error: null,
  currentPage: 1,
  totalPage: 1,
  totalTitleLength: 0,
};

export const ItemContext = createContext(defaultItemValue);

export const useItem = () => {
  return useContext(ItemContext);
}