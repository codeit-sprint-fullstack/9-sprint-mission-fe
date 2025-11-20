"use client"

import { useState, useEffect } from "react"

export function PostForm({ mode = "create", postId }) {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [author, setAuthor] = useState("")

  const isFilled = title.trim() !== "" && content.trim() !== ""

  useEffect(() => {
    if (mode === "edit" && postId) {
      async function fetchPost() {
        try {
          const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/articles/${postId}`)
          if (!res.ok) throw new Error("게시글 불러오기 실패")
          const data = await res.json()
          setTitle(data.title)
          setContent(data.content)
          setAuthor(data.author)
        } catch (err) {
          console.error(err)
        }
      }
      fetchPost()
    }
  }, [mode, postId])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!isFilled) return

    const data = {
      title,
      content,
      author: author.trim() === "" ? "익명" : author,
    }

    try {
      let res
      if (mode === "edit" && postId) {
        res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/articles/${postId}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        })
      } else {
        data.likeCount = 0
        res = await fetch("${process.env.NEXT_PUBLIC_API_URL}/api/articles", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        })
      }

      if (!res.ok) throw new Error("게시글 처리 실패")

      alert(mode === "edit" ? "게시글이 수정되었습니다!" : "게시글이 등록되었습니다!")
      if (mode !== "edit") {
        setTitle("")
        setContent("")
        setAuthor("")
      }
    } catch (err) {
      console.error(err)
      alert("게시글 처리 중 오류가 발생했습니다.")
    }
  }

  return (
    <div className="flex justify-center w-full"> 
      <form
        onSubmit={handleSubmit}
        className="w-[1200px] flex flex-col gap-4"
      >
        <div className="flex items-center justify-between mb-6">
          <h2
            className="text-[20px] font-bold leading-8 text-[#1F2937]"
            style={{ fontFamily: "Pretendard" }}
          >
            {mode === "edit" ? "게시글 수정" : "게시글 쓰기"}
          </h2>

          <button
            type="submit"
            disabled={!isFilled}
            className={`px-4 py-2 rounded-lg text-[#F3F4F6] text-[16px] font-semibold leading-[26px] transition-colors ${
              isFilled ? "bg-blue-500" : "bg-gray-400"
            }`}
            style={{ fontFamily: "Pretendard" }}
          >
            {mode === "edit" ? "수정" : "등록"}
          </button>
        </div>

        <div>
          <label
            className="block mb-1 text-[#1F2937] text-[18px] font-bold leading-[26px]"
            style={{ fontFamily: "Pretendard" }}
          >
            *제목
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="제목을 입력해주세요"
            className="flex-1 w-[1200px] bg-gray-100 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label
            className="block mb-1 text-[#1F2937] text-[18px] font-bold leading-[26px]"
            style={{ fontFamily: "Pretendard" }}
          >
            *내용
          </label>
          <div className="flex w-[1200px] h-[282px] p-4 px-6 items-start gap-2.5 rounded-lg bg-gray-100">
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="내용을 입력해주세요"
              className="flex-1 h-full resize-none focus:outline-none"
            />
          </div>
        </div>
      </form>
    </div>
  )
}
