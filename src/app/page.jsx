// import { posts } from "@/lib/data/posts";
import PostList from "@/components/ui/postList/PostList";
import PostBestList from "@/components/ui/postBest/PostBestList";
import ClientRedirectPush from "./articles/page";
import { getArticles } from "@/lib/services/articles";

export default async function Home() {
  const posts = await getArticles();

  const bests = posts
    .slice()
    .sort(
      (a, b) =>
        (Number(b.likes.toString().replace(",", "")) || 0) -
        (Number(a.likes.toString().replace(",", "")) || 0)
    )
    .slice(0, 3);

  return (
    <main>
      <section>
        <PostBestList posts={bests} />
      </section>
      <section>
        <PostList posts={posts} />
      </section>
    </main>
  );
}
