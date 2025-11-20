import { BoardHeader } from "@/components/board/board-header"
import { BoardFooter } from "@/components/board/board-footer"
import { PostForm } from "@/components/board/post-form"

export default async function EditPostPage({ params }) {
  const resolvedParams = await params 

  return (
    <div className="flex min-h-screen flex-col">
      <BoardHeader />
      <main className="container mx-auto flex-1 px-4 pt-8">
          <PostForm mode="edit" postId={Number(resolvedParams.id)} />
      </main>
      <BoardFooter />
    </div>
  )
}
