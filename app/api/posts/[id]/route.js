import { mockPosts, mockComments } from "@/lib/mock-data"
import { NextResponse } from "next/server"


export async function GET(request, context) {
  const params = await context.params
  const postId = Number(params.id)
  const post = mockPosts.find(p => p.id === postId)
  if (!post) return NextResponse.json({ error: "Post not found" }, { status: 404 })

  const comments = mockComments.filter(c => c.postId === postId)
  return NextResponse.json({ ...post, comments })
}

export async function PATCH(request, context) {
  const params = await context.params
  const postId = Number(params.id)
  const body = await request.json()

  const index = mockPosts.findIndex(p => p.id === postId)
  if (index === -1) return NextResponse.json({ error: "Post not found" }, { status: 404 })

  mockPosts[index] = {
    ...mockPosts[index],
    title: body.title || mockPosts[index].title,
    content: body.content || mockPosts[index].content,
    image: body.image ?? mockPosts[index].image,
  }

  return NextResponse.json(mockPosts[index])
}

export async function DELETE(request, context) {
  const params = await context.params
  const postId = Number(params.id)
  const index = mockPosts.findIndex(p => p.id === postId)
  if (index === -1) return NextResponse.json({ error: "Post not found" }, { status: 404 })

  mockPosts.splice(index, 1)
  return NextResponse.json({ success: true }) 
}
