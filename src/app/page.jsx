import PostBest from "@/Components/ui/PostBest";
import PostList from "@/Components/ui/PostList";

export default function Home() {
  return (
    <div>
      <section>
        <PostBest />
      </section>
      <section>
        <div className="flex justify-between">
          <h1>게시글</h1>
          <button>글쓰기</button>
        </div>
        <div className="flex justify-between items-center">
          <input className="border rounded-xl" type="text" />
          <button>최신순</button>
        </div>
        <PostList />
      </section>
    </div>
  );
}
