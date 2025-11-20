import { mockComments } from "@/lib/mock-data"

export async function GET(request, context) {
  try {
    const params = await context.params
    const postId = Number.parseInt(params.id)
    const comments = mockComments.filter((c) => c.postId === postId)
    return Response.json(comments)
  } catch (error) {
    console.error("Error fetching comments:", error)
    return Response.json({ error: "Failed to fetch comments" }, { status: 500 })
  }
}

export async function POST(request, context) {
  try {
    const params = await context.params
    const postId = Number.parseInt(params.id)
    const body = await request.json()

    const newComment = {
      id: Math.max(...mockComments.map((c) => c.id), 0) + 1,
      content: body.content,
      author: body.author || "익명의 사용자",
      postId,
      createdAt: new Date(),
    }

    mockComments.push(newComment)
    return Response.json(newComment, { status: 201 })
  } catch (error) {
    console.error("Error creating comment:", error)
    return Response.json({ error: "Failed to create comment" }, { status: 500 })
  }
}
