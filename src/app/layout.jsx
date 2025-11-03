import { Geist, Geist_Mono } from "next/font/google";
import "@/app/styles/globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "판다 마켓",
  description: "미션8",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex flex-col min-h-screen`}
      >
        <Header />
        <main className="flex-1  mx-20 my-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
