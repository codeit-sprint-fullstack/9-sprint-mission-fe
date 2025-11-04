"use client"
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import PandaLogo from '@/assets/logo.svg'
import { cn } from '@/libs/cn';
import { paths } from '#/config/paths'

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
          <div className='flex items-center gap-2'>
            <Link
              className="relative w-10 h-10"
              href={paths.home.getHref()}>
              <Image
                className="mr-1.5 object-fit"
                fill
                src={PandaLogo}
                alt="panda-market" />
            </Link>
            <p className='font-rokaf text-[1.6021rem] font-bold text-primary-100 text-nowrap'>판다마켓</p>
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
        <Link className="bg-primary-100 text-white px-3 py-1.75 rounded-lg" href="/login">로그인</Link>
      </div >
    </nav >
  );
}