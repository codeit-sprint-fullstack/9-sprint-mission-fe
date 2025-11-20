import Link from "next/link"
import Image from "next/image"

export function BoardHeader() {
  return (
    <header className="border-b border-gray-300 bg-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          
          <div className="flex items-center gap-8">
            <Link href="/board" className="flex items-center gap-2">
        
              <div className="h-10 w-10 relative">
                <Image
                  src="/logo.svg"
                  alt="판다마켓 로고"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>

              <span
                style={{
                  color: "var(--brand-blue, #3692FF)",
                  fontFamily: '"ROKAF Sans"',
                  fontSize: "25.633px",
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: "normal",
                }}
              >
                판다마켓
              </span>
            </Link>

            <nav className="flex gap-6">
              <Link
                href="/board"
                className="text-[#3692FF] text-center font-bold text-lg"
                style={{ fontFamily: "Pretendard", fontStyle: "normal", lineHeight: "normal" }}
              >
                자유게시판
              </Link>
              <Link
                href="/board/best"
                className="text-[#4B5563] text-center font-bold text-lg"
                style={{ fontFamily: "Pretendard", fontStyle: "normal", lineHeight: "normal" }}
              >
                중고마켓
              </Link>
            </nav>
          </div>

         
          <Link
            href="/login"
            className="rounded-lg bg-blue-500 px-6 py-2 text-sm font-medium text-white hover:bg-blue-600"
          >
            로그인
          </Link>
        </div>
      </div>
    </header>
  )
}
