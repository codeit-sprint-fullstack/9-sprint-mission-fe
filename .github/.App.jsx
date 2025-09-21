// src/pages/MarketPage.jsx
import { useEffect, useState } from "react";
import { getProductList } from "@/api/product/productService";
import "./app.css";

function MarketPage() {
    const [bestProducts, setBestProducts] = useState([]);
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [order, setOrder] = useState("recent");
    const [keyword, setKeyword] = useState("");
    const [totalPages, setTotalPages] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [bestPageSize, setBestPageSize] = useState(4); // 베스트 상품

    useEffect(() => {
    function handleResize() {
        // 전체 상품
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

    handleResize(); // 초기 실행
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
    async function fetchData() {
        // 베스트 상품 (반응형 pageSize 적용)
        const best = await getProductList({ order: "favorite", page: 1, pageSize: bestPageSize });
        setBestProducts(best?.list || []);
        // 전체 상품
        const list = await getProductList({ order, page, pageSize, keyword });
        setProducts(list?.list || []);
        if (list?.totalCount) {
        setTotalPages(Math.ceil(list.totalCount / pageSize));
        } else {
        setTotalPages(1);
        }
    }
    fetchData();
    }, [page, order, keyword, pageSize, bestPageSize]);

    return (
        <div className="market-page">
        {/* 네비게이션 */}
        <header className="nav-bar">
            <div className="nav-left">
            <h1 className="logo">판다마켓</h1>
            <nav>
                <a href="/">지원사랑</a>
                <a href="/">중고거래</a>
            </nav>
            </div>
            <button className="login-btn">로그인</button>
        </header>

        <main className="content">
            {/* 베스트 상품 */}
            <section className="best-section">
            <h2 className="section-title">베스트 상품</h2>
            <div className="grid best-grid">
                {bestProducts.map((p) => (
                <div key={p.id} className="card">
                    <img src={p.images?.[0]} alt={p.name} />
                    <div className="card-body">
                    <h3>{p.name}</h3>
                    <p className="price">{p.price.toLocaleString()}원</p>
                    <p className="favorite">❤️ {p.favoriteCount}</p>
                    </div>
                </div>
                ))}
            </div>
            </section>

            {/* 판매중인 상품 */}
            <section className="all-section">
            <div className="section-header">
                <h2 className="section-title">판매 중인 상품</h2>
                <div className="controls">
                <input
                    type="text"
                    placeholder="검색할 상품을 입력해주세요"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                />
                <select onChange={(e) => setOrder(e.target.value)} value={order}>
                    <option value="recent">최신순</option>
                    <option value="favorite">좋아요순</option>
                </select>
                </div>
            </div>

            <div className="grid all-grid">
                {products.map((p) => (
                <div key={p.id} className="card">
                    <img src={p.images?.[0]} alt={p.name} />
                    <div className="card-body">
                    <h3>{p.name}</h3>
                    <p className="price">{p.price.toLocaleString()}원</p>
                    <p className="favorite">❤️ {p.favoriteCount}</p>
                    </div>
                </div>
                ))}
            </div>
    <div className="pagination">
        {/* 이전 버튼 */}
        <button
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
            className="arrow"
        >
            &lt;
        </button>

        {(() => {
            const pages = [];
            const maxVisible = 5; // 항상 5개까지만 보이게
            let start = Math.max(1, page - 2); // 현재 페이지 기준 좌우 2칸
            let end = Math.min(totalPages, start + maxVisible - 1);

            // 만약 끝에서 잘리면 start 조정
            if (end - start < maxVisible - 1) {
            start = Math.max(1, end - maxVisible + 1);
            }

            for (let i = start; i <= end; i++) {
            pages.push(
                <button
                key={i}
                onClick={() => setPage(i)}
                className={page === i ? "active" : ""}
                >
                {i}
                </button>
            );
            }
            return pages;
        })()}

        {/* 다음 버튼 */}
        <button
            onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={page === totalPages}
            className="arrow"
        >
            &gt;
        </button>
        </div>

            </section>
        </main>

        {/* 푸터 */}
        <footer className="footer">
            <p>PandaMarket - 2024</p>
            <div className="footer-links">
            <a href="/">Privacy Policy</a>
            <a href="/">FAQ</a>
            </div>
        </footer>
        </div>
    );
}

export default MarketPage;
