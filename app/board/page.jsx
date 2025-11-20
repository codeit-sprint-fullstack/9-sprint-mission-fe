"use client"

import { BoardHeader } from "@/components/board/board-header"
import { BoardFooter } from "@/components/board/board-footer"
import { BestPosts } from "@/components/board/best-posts"
import { PostList } from "@/components/board/post-list"
import Link from "next/link"

export default function BoardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <BoardHeader />
      <main className="container mx-auto flex-1 px-4 py-8">
        <section className="mb-12">
          <h2 className="mb-6 text-xl font-bold">베스트 게시글</h2>
          <BestPosts />
        </section>
        <section className="relative">

  <Link
    href="/board/write"
    className="absolute right-0 top-0 rounded-lg bg-blue-500 px-6 py-2 text-sm font-medium text-white hover:bg-blue-600"
  >
    글쓰기
  </Link>

 
  <h2 className="text-xl font-bold mb-6">게시글</h2>

  <PostList />
</section>
      </main>
      <BoardFooter />
    </div>
  )
}
