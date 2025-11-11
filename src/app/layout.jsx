import "./globals.css";
import localFont from "next/font/local";

export const metadata = {
  title: "판다마켓",
  description: "중고거래는 판다마켓",
};

export const pretendard = localFont({
  src: "./font/PretendardVariable.woff2",
  variable: "--font-pretendard",
});

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${pretendard.className} antialiased flex flex-col justify-center items-center min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
