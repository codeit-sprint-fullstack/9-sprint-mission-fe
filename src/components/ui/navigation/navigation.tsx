'use client';
import type { Route } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import PandaLogo from '@/assets/logo.svg';
import { cn } from '@/libs/cn';
import { useAuth } from '@/providers/auth-provider';
import { paths } from '#/config/paths';

import { Avatar } from '../avatar/avatar';

interface navLinkItems {
  name: string;
  href: Route;
}

const navLink: navLinkItems[] = [
  { name: '자유게시판', href: paths.app.articles.getHref() },
  { name: '중고마켓', href: paths.app.items.getHref() },
];

export function Navigation() {
  const { user } = useAuth();
  const pathname = usePathname();

  return (
    <nav className="container mx-auto h-17.5 w-full max-w-600">
      <div className="mx-auto my-0 flex h-full items-center justify-between gap-0 border-b border-solid border-gray-300 py-0 xl:gap-3">
        <div className="inline-flex items-center px-4 md:px-6 xl:px-50">
          <div className="ml-6 flex items-center gap-2 md:ml-0">
            <Link className="relative h-10 w-10" href={paths.home.getHref()}>
              <Image
                className="object-fit mr-1.5"
                fill
                src={PandaLogo}
                alt="panda-market"
                unoptimized
                priority
              />
            </Link>
            <p className="font-rokaf text-primary-100 text-[1.2626rem] font-bold text-nowrap md:text-[1.6021rem]">
              판다마켓
            </p>
          </div>
          <nav className="flex gap-2 pl-2 md:gap-3.75 md:pl-6">
            {navLink.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  'font-pretendard text-lg leading-6.5 font-bold text-nowrap text-gray-600 no-underline',
                  pathname.startsWith(link.href) && 'text-primary-100',
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
        {user ? (
          <div className="flex items-center gap-1.5 px-4 md:px-6 xl:px-50">
            <Avatar
              size="medium"
              src={user.image}
              alt={`${user.nickname}}유저 이미지`}
            />
            <p className="text-lg text-gray-600">{user.nickname}</p>
          </div>
        ) : (
          <Link
            className="bg-primary-100 mr-4 rounded-lg px-3 py-1.75 text-nowrap text-white md:mr-0"
            href="/login"
          >
            로그인
          </Link>
        )}
      </div>
    </nav>
  );
}
