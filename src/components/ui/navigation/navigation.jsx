"use client"
import Image from "next/image"
import Link from 'next/link'
import PandaLogo from '@/assets/logo.svg'
import { usePathname } from "next/navigation"
import { cn } from '@/lib/cn';

const navLink = [
  { name: '자유게시판', href: '/articles' },
  { name: '중고마켓', href: '/products' }
]

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="w-full h-17.5 bg-white z-1">
      <div className="flex justify-between items-center h-full py-0 px-50 max-w-full my-0 mx-auto border-b border-solid border-gray-300 ">
        <div className="inline-flex items-center">
          <div>
            <Link className="inline-flex no-underline items-center ml-2 font-rokaf text-[1.6021rem] font-bold text-primary-100" href="/">
              <Image className="mr-1.5 w-10 h-10" width={40} height={40} src={PandaLogo} alt="panda-market" />
              판다마켓
            </Link>
          </div>
          <nav className="flex gap-3.75 pl-6">
            {navLink.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  'text-gray-600 font-pretendard text-lg font-bold leading-6.5 no-underline',
                  pathname.startsWith(link.href) && 'text-primary-100'
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
        <Link className="bg-primary-100 px-3 py-1.75 rounded-lg" href="/login">로그인</Link>
      </div >
    </nav >
  );
}