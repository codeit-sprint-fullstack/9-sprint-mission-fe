import React from "react";
import SearchBar from "./SearchBar";
import SortDropdown from "./SortDropdown";
import "./TopBar.css";

const TopBar = ({ searchValue, onSearchChange, sortValue, onSortChange, onRegisterClick }) => {
  return (
    <div className="top-bar-container">
      <div className="top-bar-title">판매 중인 상품</div>
      <div className="top-bar-actions">
        <SearchBar value={searchValue} onChange={onSearchChange} />
        <button className="register-button" onClick={onRegisterClick}>
          상품 등록하기
        </button>
        <SortDropdown value={sortValue} onChange={onSortChange} />
      </div>
    </div>
  );
};

export default TopBar;
