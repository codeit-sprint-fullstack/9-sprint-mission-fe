
import { ArticleRegistration } from "./_components/registration-form"

// export default async function ArticleUpdatePage({ params }: { params: Promise<{ id: string }> }) {
export const ArticleUpdatePage = async (props: PageProps<'/articles/[id]/update'>) => {
  return (
    <div className="flex flex-1 flex-col min-h-screen items-center justify-center">
      <ArticleRegistration params={props.params} />
    </div>
  )
}