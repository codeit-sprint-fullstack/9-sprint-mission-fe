import BestPostsSection from "./_components/layout/BestPostsSection";
import MainPostsSection from "./_components/layout/MainPostsSection";

export default function Posts() {
  return (
    <div className="w-300 mt-6">
      <BestPostsSection />
      <MainPostsSection />
    </div>
  );
}
