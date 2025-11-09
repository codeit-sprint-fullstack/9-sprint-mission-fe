import React from "react";
import PostBest from "./PostBest";

export default function PostBestList({ posts = [] }) {
  return (
    <div>
      <h1 className="text-[20px] text-gray-900 font-bold">베스트 게시글!!</h1>
      <div className="grid grid-cols-3 gap-6">
        {posts.map((p) => {
          return <PostBest key={p.id} post={p} />;
        })}
      </div>
    </div>
  );
}
