import { NextResponse } from "next/server"

const comments = {
  1: [
    {
      id: 1,
      postId: 1,
      author: "백두산판다",
      content: "혹시 서울거주이신 어떻게 되실까요?",
      createdAt: "2024-01-02T00:00:00Z",
    },
    {
      id: 2,
      postId: 1,
      author: "백두산판다",
      content: "혹시 서울거주이신 어떻게 되실까요?",
      createdAt: "2024-01-02T00:00:00Z",
    },
    {
      id: 3,
      postId: 1,
      author: "백두산판다",
      content: "혹시 서울거주이신 어떻게 되실까요?",
      createdAt: "2024-01-02T00:00:00Z",
    },
  ],
}

export async function PATCH(request, context) {
  const params = await context.params
  const postId = Number(params.id)
  const commentId = Number(params.commentId)
  const body = await request.json()
  const { content } = body

  if (!comments[postId]) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 })
  }

  const commentIndex = comments[postId].findIndex(c => c.id === commentId)
  if (commentIndex === -1) {
    return NextResponse.json({ error: "Comment not found" }, { status: 404 })
  }

  if (content) comments[postId][commentIndex].content = content
  return NextResponse.json(comments[postId][commentIndex])
}

export async function DELETE(request, context) {
  const params = await context.params
  const postId = Number(params.id)
  const commentId = Number(params.commentId)

  if (!comments[postId]) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 })
  }

  const commentIndex = comments[postId].findIndex(c => c.id === commentId)
  if (commentIndex === -1) {
    return NextResponse.json({ error: "Comment not found" }, { status: 404 })
  }

  comments[postId].splice(commentIndex, 1)
  return NextResponse.json({ success: true })
}
