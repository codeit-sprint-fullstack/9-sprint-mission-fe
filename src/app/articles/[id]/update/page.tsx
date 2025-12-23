
import { ArticleRegistration } from "./_components/registration-form"

export default async function ArticleUpdatePage({ params }: { params: Promise<{ id: string }> }) {
  return (
    <div className="flex flex-1 flex-col min-h-screen items-center justify-center">
      <ArticleRegistration params={params} />
    </div>
  )
}