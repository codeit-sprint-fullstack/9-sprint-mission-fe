"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Heart, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"


async function getPosts({ orderBy = "recent", search = "" } = {}) {
  const params = new URLSearchParams()
  params.append("page", "1")
  params.append("limit", "5")
  params.append("sort", orderBy)
  if (search) params.append("search", search) 

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/articles?${params.toString()}`)
  if (!res.ok) throw new Error("게시글 불러오기 실패")
  return res.json()
}

export function PostList() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [orderBy, setOrderBy] = useState("recent")
  const [keyword, setKeyword] = useState("")
  const [searchInput, setSearchInput] = useState("")

  useEffect(() => {
    async function fetchPosts() {
      setLoading(true)
      try {
        const data = await getPosts({ orderBy, search: keyword })
        setPosts(data)
      } catch (error) {
        console.error("Failed to fetch posts:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchPosts()
  }, [orderBy, keyword])

  const handleSearch = (e) => {
    e.preventDefault()
    setKeyword(searchInput)
  }

  if (loading) {
    return <div className="py-12 text-center text-gray-400">불러오는 중...</div>
  }

  return (
    <div className="space-y-6">
      
      <div className="flex items-center justify-between gap-4">
        <form onSubmit={handleSearch} className="relative flex-1 bg-gray-100 rounded-lg">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="text"
            placeholder="검색할 상품을 입력해주세요"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="pl-10 bg-gray-100"
          />
        </form>

        <Select value={orderBy} onValueChange={(value) => setOrderBy(value)}>
          <SelectTrigger className="w-32">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="recent">최신순</SelectItem>
            <SelectItem value="like">좋아요순</SelectItem>
          </SelectContent>
        </Select>
      </div>


      {posts.length === 0 ? (
        <div className="py-12 text-center text-gray-400">게시글이 없습니다.</div>
      ) : (
        <div className="space-y-4">
          {posts.map((post) => (
            <Link key={post.id} href={`/board/${post.id}`} className="block">
              <div className="relative flex gap-4 rounded-lg border border-gray-300 p-4 transition-shadow hover:shadow-md bg-gray-50">
           
                <div className="flex flex-1 flex-col justify-between">
                  <h3 className="font-medium text-gray-900 line-clamp-2 mb-4">{post.title || "제목 없음"}</h3>
                  <div className="flex items-center justify-between text-sm text-gray-500 mt-3">
                    <div className="flex items-center gap-3">
                      <span>{post.author || "익명"}</span>
                      <span>{new Date(post.createdAt).toLocaleDateString("ko-KR")}</span>
                    </div>
                    <span className="flex items-center gap-1">
                      <Heart className="h-4 w-4" />
                      {post.likeCount > 999 ? "999+" : post.likeCount || 0}
                    </span>
                  </div>
                </div>

                <div className="absolute top-0 right-0 h-17 w-17 rounded-lg overflow-hidden bg-gray-200">
                  <Image
                    src={post.image || `/sample.jpg?height=80&width=80`}
                    alt={post.title || "게시글 이미지"}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
