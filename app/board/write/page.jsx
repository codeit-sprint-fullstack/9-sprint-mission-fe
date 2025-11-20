"use client"

import { BoardHeader } from "@/components/board/board-header"
import { BoardFooter } from "@/components/board/board-footer"
import { PostForm } from "@/components/board/post-form"

export default function WritePostPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <BoardHeader />
      <main className="container mx-auto flex-1 px-4 py-8">
        <div className="mx-auto max-w-3xl">
          <PostForm mode="create" />
        </div>
      </main>
      <BoardFooter />
    </div>
  )
}
