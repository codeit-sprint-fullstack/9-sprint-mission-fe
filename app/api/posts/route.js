import { mockPosts } from "@/lib/mock-data"

export async function GET(request) {
  try {
    const searchParams = request.nextUrl.searchParams
    const orderBy = searchParams.get("orderBy") || "recent"
    const keyword = searchParams.get("keyword") || ""
    const limit = Number.parseInt(searchParams.get("limit")) || 100

    let filteredPosts = [...mockPosts]

    if (keyword) {
      filteredPosts = filteredPosts.filter((post) => post.title.toLowerCase().includes(keyword.toLowerCase()))
    }

    if (orderBy === "like") {
      filteredPosts.sort((a, b) => b.likeCount - a.likeCount)
    } else {
      filteredPosts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    }

    return Response.json(filteredPosts.slice(0, limit))
  } catch (error) {
    console.error("Error fetching posts:", error)
    return Response.json({ error: "Failed to fetch posts" }, { status: 500 })
  }
}

export async function POST(request) {
  try {
    const body = await request.json()

    const newPost = {
      id: Math.max(...mockPosts.map((p) => p.id), 0) + 1,
      title: body.title,
      content: body.content,
      author: body.author || "익명의 사용자",
      image: body.image || null,
      likeCount: 0,
      createdAt: new Date(),
    }

    mockPosts.push(newPost)
    return Response.json(newPost, { status: 201 })
  } catch (error) {
    console.error("Error creating post:", error)
    return Response.json({ error: "Failed to create post" }, { status: 500 })
  }
}
