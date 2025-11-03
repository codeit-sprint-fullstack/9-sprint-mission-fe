import "./globals.css";
import localFont from "next/font/local";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";

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
      <body className={`${pretendard.className} antialiased`}>
        <Header />
        <main className="flex w-full mt-[4.4rem]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
