import { posts } from "@/data/posts";
import PostList from "@/features/postList/PostList";
import PostBestList from "@/features/postBest/PostBestList";

export default function Home() {
  const bests = posts
    .slice()
    .sort((a, b) => b.likes - a.likes)
    .slice(0, 3);
  return (
    <div>
      <section>
        <PostBestList posts={bests} />
      </section>
      <section>
        <PostList posts={posts} />
      </section>
    </div>
  );
}
