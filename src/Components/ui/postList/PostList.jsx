import PostListHeader from "./PostListHeader";
import PostSearchBar from "./PostSearchBar";
import PostCard from "./PostCard";

export default function PostList({ posts }) {
  return (
    <div className="flex flex-col gap-6">
      <PostListHeader />
      <div className="flex flex-col gap-6">
        <PostSearchBar />
        {posts.map((p) => {
          return <PostCard key={p.id} post={p} />;
        })}
      </div>
    </div>
  );
}
