"use client"
import Image from 'next/image'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import type { ChangeEvent } from 'react'

import SearchIcon from '@/assets/icons/ic_searchs.svg'
import { useDebouncedCallback } from '@/hooks/useDebouncedCallback'

interface SearchProps {
  placeholder?: string
}

export function Search({ placeholder }: SearchProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (term) {
      params.set('keyword', term);
    } else {
      params.delete('keyword');
    }
    // 검색 시 페이지 초기화
    params.set("page", "1");

    replace(`${pathname}?${params.toString()}`);
  }, 300)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleSearch(e.target.value);
  }

  return (
    <div className="flex w-full items-center relative">
      <label
        className='absolute block ml-3 z-1 text-gray-400'
        htmlFor="search">
        <Image
          src={SearchIcon}
          alt="검색 아이콘"
          unoptimized
        />
      </label>
      <input
        className='py-2.25 pr-5 pb-2.25 pl-10 w-full bg-gray-100 text-gray-500 font-pretendard leading-6.5 text-lg rounded-xl border-none focus:text-gray-950'
        id='search'
        placeholder={placeholder}
        onChange={handleChange}
        defaultValue={searchParams.get('keyword')?.toString()}
      />
    </div>
  )
}
