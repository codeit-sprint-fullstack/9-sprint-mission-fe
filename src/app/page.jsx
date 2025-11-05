import { posts } from "@/data/posts";
import PostList from "@/components/ui/postList/PostList";
import PostBestList from "@/components/ui/postBest/PostBestList";
import ClientRedirectPush from "./posts/page";

export default function Home() {
  const bests = posts
    .slice()
    .sort((a, b) => b.likes - a.likes)
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
