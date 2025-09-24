import React from "react";
import { FaSearch } from "react-icons/fa"; // 아이콘 추가 (react-icons 사용 시)
import "./SearchBar.css";

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="search-bar-wrapper">
      <FaSearch className="search-icon" />
      <input
        type="text"
        placeholder="검색할 상품을 입력해주세요"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;
