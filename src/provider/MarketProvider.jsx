import { createContext, useState, useEffect } from "react";
import { getProductList } from "@/api/product/productService";

const MarketContext = createContext(null);

export function MarketProvider({ children }) {
  const [bestProducts, setBestProducts] = useState([]);   
  const [products, setProducts] = useState([]);           
  const [page, setPage] = useState(1);                    
  const [order, setOrder] = useState("recent");           
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
      try {
        const best = await getProductList({
          order: "favorite",
          page: 1,
          pageSize: bestPageSize,
        });
        setBestProducts(best?.list ?? []);

        const list = await getProductList({
          order,
          page,
          pageSize,
          keyword,
        });
        setProducts(list?.list ?? []);
        setTotalPages(
          list?.totalCount ? Math.ceil(list.totalCount / pageSize) : 1
        );
      } catch (error) {
        console.error("상품 데이터를 불러오는 중 오류 발생:", error);
        setBestProducts([]);
        setProducts([]);
        setTotalPages(1);
      }
    }

    fetchData();
  }, [page, order, keyword, pageSize, bestPageSize]);

  return (
    <MarketContext.Provider
      value={{
        bestProducts,
        products,
        page,
        setPage,
        order,
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

