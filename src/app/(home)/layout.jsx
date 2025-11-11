import { Header } from "@/components/ui/Header/Header";
import { Footer } from "@/components/ui/Footer/Footer";

export default async function HomeLayout({ children }) {
  console.log();
  return (
    <>
      <Header />
      <main className="flex flex-1 justify-center w-full max-w-[1920px] mt-[4.4rem]">
        {children}
      </main>
      <Footer />
    </>
  );
}
