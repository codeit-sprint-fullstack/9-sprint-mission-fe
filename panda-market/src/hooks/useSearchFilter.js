// src/hooks/useSearchFilter.js
import { useState } from "react";

// ✅ named export (중괄호로 불러오기)
export function useSearchFilter() {
  const [keyword, setKeyword] = useState("");
  const [sortBy, setSortBy] = useState("latest");

  return {
    keyword,
    setKeyword,
    sortBy,
    setSortBy,
  };
}
