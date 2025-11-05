"use client";
import React, { useState } from "react";
import PostListHeader from "./PostListHeader";
import PostSearchBar from "./PostSearchBar";
import PostCard from "./PostCard";

export default function PostList({ posts = [] }) {
  const [query, setQuery] = useState("");

  const filtered =
    query.trim() === ""
      ? posts
      : posts.filter((p) =>
          ((p.title || "") + " " + (p.author || ""))
            .toLowerCase()
            .includes(query.trim().toLowerCase())
        );

  return (
    <div className="flex flex-col gap-6">
      <PostListHeader />
      <div className="flex flex-col gap-6">
        <PostSearchBar value={query} onChange={setQuery} />

        {filtered.length === 0 ? (
          <div className="text-gray-500">검색 결과가 없습니다!</div>
        ) : (
          filtered.map((p) => <PostCard key={p.id} post={p} />)
        )}
      </div>
    </div>
  );
}
