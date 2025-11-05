import "./globals.css";
import Header from "./Header"; 
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "판다마켓",
  description: "중고 거래 플랫폼",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className="min-h-screen flex flex-col">
        <Header /> 
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="bg-[#111827] text-gray-300 py-10 mt-16">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 text-sm">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p>© Panda Market · 2024</p>
              <div className="flex justify-center md:justify-start gap-4 mt-2">
                <Link href="#" className="hover:text-white">
                  Privacy Policy
                </Link>
                <Link href="#" className="hover:text-white">
                  FAQ
                </Link>
              </div>
            </div>

            <div className="flex gap-4">
              <Image src="/ic_facebook.png" alt="facebook" width={20} height={20} />
              <Image src="/ic_instagram.png" alt="instagram" width={20} height={20} />
              <Image src="/ic_youtube.png" alt="youtube" width={20} height={20} />
              <Image src="/ic_twitter.png" alt="twitter" width={20} height={20} />
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
