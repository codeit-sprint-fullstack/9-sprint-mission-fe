import "./globals.css";
import localFont from "next/font/local";
import { Header } from "@/components/ui/Header/Header";
import { Footer } from "@/components/ui/Footer/Footer";

export const metadata = {
  title: "판다마켓",
  description: "중고거래는 판다마켓",
};

export const pretendard = localFont({
  src: "./font/PretendardVariable.woff2",
  variable: "--font-pretendard",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${pretendard.className} antialiased flex flex-col justify-center items-center min-h-screen`}
      >
        <Header />
        <main className="flex flex-1 justify-center w-full max-w-[1920px] mt-[4.4rem]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
