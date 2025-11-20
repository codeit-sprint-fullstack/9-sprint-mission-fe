"use client"

import { useEffect, useState } from "react"
import { useRouter, useParams } from "next/navigation"
import Image from "next/image"
import { Heart, MoreVertical, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { BoardHeader } from "@/components/board/board-header"
import { BoardFooter } from "@/components/board/board-footer"
import { CommentSection } from "@/components/board/comment-section"

export default function ArticleDetailPage() {
  const router = useRouter()
  const params = useParams()
  const articleId = Number(params.id)

  const [article, setArticle] = useState(null)
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    async function fetchArticle() {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/articles/${articleId}`)
        if (!res.ok) throw new Error("게시글을 불러올 수 없습니다.")
        const data = await res.json()
        setArticle(data)
      } catch (error) {
        console.error("Error fetching article:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchArticle()
  }, [articleId])


  async function handleDelete() {
    if (!article || !confirm("게시글을 삭제하시겠습니까?")) return
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/articles/${articleId}`, { method: "DELETE" })
      router.push("/board")
    } catch (error) {
      console.error("Failed to delete article:", error)
    }
  }

  
  function handleEdit() {
    if (!article) return
    router.push(`/board/${article.id}/edit`)
  }


  if (loading) {
    return (
      <div className="flex min-h-screen flex-col">
        <BoardHeader />
        <main className="container mx-auto flex-1 px-4 py-8">
          <div className="mx-auto max-w-[1200px] space-y-6">
            <div className="h-8 w-full animate-pulse rounded bg-muted" />
            <div className="h-64 animate-pulse rounded bg-muted" />
            <div className="h-32 animate-pulse rounded bg-muted" />
          </div>
        </main>
        <BoardFooter />
      </div>
    )
  }


  if (!article) {
    return (
      <div className="flex min-h-screen flex-col">
        <BoardHeader />
        <main className="container mx-auto flex-1 px-4 py-8">
          <div className="py-12 text-center text-muted-foreground">게시글을 찾을 수 없습니다.</div>
        </main>
        <BoardFooter />
      </div>
    )
  }


  return (
    <div className="flex min-h-screen flex-col">
      <BoardHeader />
      <main className="container mx-auto flex-1 px-4 py-8">
        <div className="mx-auto max-w-[1200px] space-y-8">
          <article className="space-y-6">
            <div className="flex items-start justify-between">
  <h1
    className="text-[20px] font-bold leading-8 text-[#1F2937]"
    style={{ fontFamily: "Pretendard" }}
  >
    {article.title}
  </h1>

  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="ghost" size="icon">
        <MoreVertical className="h-5 w-5" />
      </Button>
    </DropdownMenuTrigger>

    <DropdownMenuContent
      align="end"
      className="flex w-[139px] flex-col items-center"
    >
      <DropdownMenuItem
        onClick={handleEdit}
        className="text-[#6B7280] text-[16px] font-normal leading-[26px]"
        style={{ fontFamily: "Pretendard", textAlign: "center" }}
      >
        수정하기
      </DropdownMenuItem>
      <DropdownMenuItem
        onClick={handleDelete}
        className="text-[#6B7280] text-[16px] font-normal leading-[26px]"
        style={{ fontFamily: "Pretendard", textAlign: "center" }}
      >
        삭제하기
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</div>


   <div className="flex items-center justify-start gap-4 border-b border-border pb-4">

  <div className="flex items-center gap-3">
    <Avatar className="h-10 w-10">
      <div className="flex h-full w-full items-center justify-center bg-muted">
        {article.author?.[0] || "?"}
      </div>
    </Avatar>
    <div className="flex items-center gap-2">
      <p
        className="text-[#4B5563] font-medium text-[14px] leading-6"
        style={{ fontFamily: "Pretendard" }}
      >
        {article.author || "익명"}
      </p>
      
      <p
        className="text-[#9CA3AF] font-normal text-[14px] leading-6"
        style={{ fontFamily: "Pretendard" }}
      >
        {new Date(article.createdAt).toLocaleDateString("ko-KR")}
      </p>
        <svg
        width="1"
        height="24"
        viewBox="0 0 1 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="0.5"
          y1="0"
          x2="0.5"
          y2="24"
          stroke="#E5E7EB"
          strokeWidth="1"
        />
      </svg>
    </div>
  </div>
   

  <div className="flex items-center gap-1 rounded-[35px] border border-[#E5E7EB] bg-white px-3 py-1">
    <Heart className="h-5 w-5 text-muted-foreground" />
    <span className="text-[#4B5563] text-[14px] font-medium leading-6">
      {article.likeCount ?? 0}
    </span>
  </div>
</div>

            {article.image && (
              <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-muted">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            <div className="prose prose-sm max-w-none">
              <p className="whitespace-pre-wrap">{article.content}</p>
            </div>
          </article>

          <div className="pt-8">
            <CommentSection postId={article.id} />
          </div>

          <div className="flex justify-center pt-8">
    <button
      onClick={() => router.push("/board")}
      className="flex items-center justify-center gap-2 w-60 h-12 rounded-[40px] bg-[#3692FF] px-16 py-3"
    >
      <span
        className="text-[#F3F4F6] text-[16px] font-semibold leading-[26px] text-center whitespace-nowrap"
        style={{ fontFamily: "Pretendard" }}
      >
        목록으로 돌아가기
      </span>
      <Image src="/ic_back.png" alt="Back" width={18} height={18} />
    </button>
          </div>
        </div>
      </main>
      <BoardFooter />
    </div>
  )
}
