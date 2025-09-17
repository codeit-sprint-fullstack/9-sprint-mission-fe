import React, { createContext, useContext } from 'react';

export const ItemContext = createContext({
  itemList:[],
  error: null,
  currentPage: 1,
  totalPages: 1,
  isLoading: false,
});

export const useItems = () => {
  return useContext(ItemContext);
};