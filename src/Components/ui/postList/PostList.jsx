"use client";
import React, { useState } from "react";
import PostListHeader from "./PostListHeader";
import PostSearchBar from "./PostSearchBar";
import PostCard from "./PostCard";

export default function PostList({ posts = [] }) {
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState("latest");

  //검색기능
  const filtered =
    query.trim() === ""
      ? posts
      : posts.filter((p) =>
          ((p.title || "") + " " + (p.author || ""))
            .toLowerCase()
            .includes(query.trim().toLowerCase())
        );

  //정렬기능
  function sortComparator(a, b, sortBy) {
    if (sortBy === "latest") {
      return new Date(b.date) - new Date(a.date);
    }
    if (sortBy === "likes") {
      const toNum = (s) =>
        parseInt(String(s || "0").replace(/,/g, ""), 10 || 0);
      return toNum(b.likes) - toNum(a.likes);
    }
    return 0;
  }

  const results = [...filtered].sort((a, b) => sortComparator(a, b, sortBy));

  return (
    <div className="flex flex-col gap-6">
      <PostListHeader />
      <div className="flex flex-col gap-6">
        <PostSearchBar
          value={query}
          onChange={setQuery}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />

        {results.length === 0 ? (
          <div className="text-gray-500">검색 결과가 없습니다!</div>
        ) : (
          results.map((p) => <PostCard key={p.id} post={p} />)
        )}
      </div>
    </div>
  );
}
