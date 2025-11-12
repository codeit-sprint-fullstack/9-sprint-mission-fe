

export default async function ArticleDetailPage({ params }) {
  const { slug } = await params;
  console.log(slug)
  return (
    <main className="flex flex-1 flex-col min-h-screen w-full max-w-7xl my-8 mx-auto p-6">
      {slug} this..
    </main >
  );
}