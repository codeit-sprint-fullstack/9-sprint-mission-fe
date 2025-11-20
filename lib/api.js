const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000"


export async function getPosts(params = {}) {
  const searchParams = new URLSearchParams()
  if (params.orderBy) searchParams.append("orderBy", params.orderBy)
  if (params.keyword) searchParams.append("keyword", params.keyword)
  if (params.limit) searchParams.append("limit", params.limit.toString())

  const response = await fetch(`${API_BASE_URL}/api/articles?${searchParams}`)
  if (!response.ok) throw new Error("Failed to fetch posts")
  return response.json()
}


export async function getPost(id) {
  const response = await fetch(`${API_BASE_URL}/api/articles/${id}`)
  if (!response.ok) {
    if (response.status === 404) return null
    throw new Error("Failed to fetch post")
  }
  return response.json()
}

export async function createPost(data) {
  const response = await fetch(`${API_BASE_URL}/api/articles`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
  if (!response.ok) throw new Error("Failed to create post")
  return response.json()
}

export async function updatePost(id, data) {
  const response = await fetch(`${API_BASE_URL}/api/articles/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
  if (!response.ok) throw new Error("Failed to update post")
  return response.json()
}


export async function deletePost(id) {
  const response = await fetch(`${API_BASE_URL}/api/articles/${id}`, {
    method: "DELETE",
  })
  if (!response.ok) throw new Error("Failed to delete post")
}

export async function createComment(articleId, content) {
  const response = await fetch(`${API_BASE_URL}/api/articles/${articleId}/comments`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content }),
  })
  if (!response.ok) throw new Error("Failed to create comment")
  return response.json()
}

export async function getComments(articleId) {
  const response = await fetch(`${API_BASE_URL}/api/articles/${articleId}/comments`)
  if (!response.ok) return []
  return response.json()
}


export async function deleteComment(articleId, commentId) {
  const response = await fetch(`${API_BASE_URL}/api/articles/${articleId}/comments/${commentId}`, {
    method: "DELETE",
  })
  if (!response.ok) throw new Error("Failed to delete comment")
  return response.json()
}


export async function updateComment(articleId, commentId, content) {
  const response = await fetch(`${API_BASE_URL}/api/articles/${articleId}/comments/${commentId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content }),
  })
  if (!response.ok) throw new Error("Failed to update comment")
  return response.json()
}
