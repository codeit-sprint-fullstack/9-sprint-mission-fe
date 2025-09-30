import { createContext, useState, useEffect } from "react";
import { getProductList } from "@/api/product/productService";

export const MarketContext = createContext();

export function MarketProvider({ children }) {
  const [bestProducts, setBestProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [orderBy  , setOrder] = useState("recent");
  const [keyword, setKeyword] = useState("");
  const [totalPages, setTotalPages] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [bestPageSize, setBestPageSize] = useState(4);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 640) {
        setPageSize(4);
        setBestPageSize(1);
      } else if (window.innerWidth < 1024) {
        setPageSize(6);
        setBestPageSize(2);
      } else {
        setPageSize(10);
        setBestPageSize(4);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    async function fetchData() {
      const best = await getProductList({ orderBy : "favorite", page: 1, pageSize: bestPageSize });
      if (best&& best.list)
        setBestProducts(best.list)
      else setBestProducts([])

      const list = await getProductList({ orderBy , page, pageSize, keyword });
      if (list && list.list)
        setProducts(list.list);
      else setProducts([]);
      if (list&& list.totalCount)
        setTotalPages(Math.ceil(list.totalCount / pageSize))
      else setTotalPages(1)
    }
    fetchData();
  }, [page, orderBy , keyword, pageSize, bestPageSize]);

  return (
    <MarketContext.Provider
      value={{
        bestProducts,
        products,
        page,
        setPage,
        orderBy ,
        setOrder,
        keyword,
        setKeyword,
        totalPages,
      }}
    >
      {children}
    </MarketContext.Provider>
  );
}
