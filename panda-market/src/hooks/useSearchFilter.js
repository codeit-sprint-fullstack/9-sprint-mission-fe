import { useState } from "react";

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
