import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import TopBar from "./components/TopBar";
import RegistrationPage from "./components/RegistrationPage";
import ProductDetailPage from "./components/ProductDetailPage";
import Home from "./components/Home";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("recent");

  const handleRegisterClick = () => {
    console.log("상품 등록 클릭됨!!");
  };

  return (
    <Router>
      <div className="app">
        <NavBar />
        <main>
          <Routes>
            {/* 랜딩 페이지 */}
            <Route
              path="/"
              element={
                <>
                  <Home />
                </>
              }
            />
            {/* 중고마켓 페이지 */}
            <Route
              path="/items"
              element={
                <>
                  <TopBar
                    searchValue={search}
                    onSearchChange={setSearch}
                    sortValue={sort}
                    onSortChange={setSort}
                  />
                  <ProductList search={search} sort={sort} />
                </>
              }
            />

            {/* 상품 등록 페이지 */}
            <Route path="/registration" element={<RegistrationPage />} />
            {/* 상품 상세 페이지 */}
            <Route path="/product/:id" element={<ProductDetailPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
