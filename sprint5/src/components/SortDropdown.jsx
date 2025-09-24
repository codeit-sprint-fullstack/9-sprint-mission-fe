import React from "react";

const SortDropdown = ({ value, onChange }) => {
  return (
    <select
      className="sort-dropdown"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="recent">최신순</option>
      <option value="like">좋아요순</option>
    </select>
  );
};

export default SortDropdown;
