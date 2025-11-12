"use client";

// import { posts } from "@/lib/data/posts";
import PostList from "@/components/ui/postList/PostList";
import PostBestList from "@/components/ui/postBest/PostBestList";
import { getArticles } from "@/lib/services/articles";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push("/articles");
  }, [router]);
  return <div>게시글 목록으로 이동 중...</div>;
}
