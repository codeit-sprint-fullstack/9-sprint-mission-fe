"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Heart } from "lucide-react"

export function BestPosts() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/articles?page=1&limit=5`)
        if (!res.ok) throw new Error("데이터 불러오기 실패")

        const data = await res.json()
        const topPosts = [...data]
          .sort((a, b) => (b.likeCount || 0) - (a.likeCount || 0))
          .slice(0, 3)

        setPosts(topPosts)
      } catch (err) {
        console.error("❌ 게시글 불러오기 오류:", err)
      }
    }

    fetchPosts()
  }, [])

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {posts.map((post) => (
        <Link key={post.id} href={`/board/${post.id}`}>
          <Card className="relative p-4 pt-10 hover:shadow-md transition-shadow bg-gray-50">
        
            <div className="absolute left-10 top-0">
              <span
                className="flex items-center gap-1 px-3 py-1 text-xs font-medium text-white"
                style={{
                  borderRadius: "0 0 16px 16px",
                  background: "var(--brand-blue, #3692FF)",
                }}
              >
                🏆 Best
              </span>
            </div>

            <div className="flex flex-col justify-between h-full">
           
              <div className="flex items-center justify-between">
                <h3 className="line-clamp-2 text-sm font-medium text-gray-900 pr-3">
                  {post.title || "제목 없음"}
                </h3>
                <div className="relative w-16 h-16 rounded-md overflow-hidden">
                  <Image
                    src={post.image || `/sample.jpg?height=80&width=80`}
                    alt={post.title || "상품 이미지"}
                    fill
                    className="object-cover"
                    style={{ objectPosition: "center top" }}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between mt-3">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>{post.author || "익명"}</span>
                  <span className="flex items-center gap-1">
                    <Heart className="h-3 w-3" />
                    {post.likeCount > 999 ? "999+" : post.likeCount || 0}
                  </span>
                </div>
                <span className="text-xs text-muted-foreground">
                  {new Date(post.createdAt).toLocaleDateString("ko-KR")}
                </span>
              </div>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  )
}
