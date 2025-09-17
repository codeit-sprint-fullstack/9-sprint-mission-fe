import { useState, useEffect, useCallback } from 'react'; 
import { getProductList, getBestProducts } from '../api/productService'; 
import ProductCard from '../components/ProductCard';
import Pagination from '../components/Pagination';

function ItemsPage() {
  const [products, setProducts] = useState([]);
  const [bestProducts, setBestProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [sortBy, setSortBy] = useState('latest');


  const fetchProducts = useCallback(async () => {

    const data = await getProductList(currentPage, 10, searchKeyword, sortBy);
    setProducts(data.list);
    setTotalPages(data.totalPages);
  }, [currentPage, searchKeyword, sortBy]); 

  const fetchBestProducts = async () => {
    const data = await getBestProducts();
    setBestProducts(data.list);
  };

  useEffect(() => {
    fetchBestProducts();
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]); 
  

  const handleSearchChange = (e) => {
    setSearchKeyword(e.target.value);
    setCurrentPage(1);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section className="products container">
      <div className="best-products">
        <h2>베스트 상품</h2>
        <ul className="product-list">
          {bestProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
      </div>

      <div className="selling-products">
        <div className="products-header">
          <h2>판매 중인 상품</h2>
          <div className="search-sort-controls">
            <input 
              type="text" 
              placeholder="상품 검색" 
              value={searchKeyword} 
              onChange={handleSearchChange} 
              className="search-input"
            />
            <select 
              value={sortBy} 
              onChange={handleSortChange} 
              className="sort-dropdown"
            >
              <option value="latest">최신 순</option>
              <option value="favorite">좋아요 순</option>
            </select>
          </div>
        </div>
        <ul className="product-list">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
        <Pagination 
          currentPage={currentPage} 
          totalPages={totalPages} 
          onPageChange={handlePageChange}
        />
      </div>
    </section>
  );
}

export default ItemsPage;