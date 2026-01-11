import { ArticleRegistration } from './_components/registration-form';

// export default async function ArticleUpdatePage({ params }: { params: Promise<{ id: string }> }) {
export default async function ArticleUpdatePage(
  props: PageProps<'/articles/[id]/update'>,
) {
  return (
    <div className="flex min-h-screen flex-1 flex-col items-center justify-center">
      <ArticleRegistration params={props.params} />
    </div>
  );
}
