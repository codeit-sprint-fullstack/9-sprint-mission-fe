'use client';
import Image from 'next/image';
import { useState } from 'react';

import DropdownArrow from '@/assets/icons/ic_dropdown_arrow.svg'
import { cn } from '@/libs/cn';

export function Dropdown({ onChange, page }) {
  const [showPanel, setShowPanel] = useState(false);
  const [filterTitle, setFilterTitle] = useState('최신순');

  const handleOnClick = () => {
    setShowPanel(!showPanel);
  };

  const handleOnChange = (value) => {
    onChange?.(value);
    if (value === 'recent') setFilterTitle('최신순');
    else if (value === 'favorite') setFilterTitle('좋아요순');
    setShowPanel(false);
    page(1);
  };

  return (
    <div className="relative">
      <button
        className={cn(
          'flex cursor-pointer items-center justify-center gap-6 rounded-xl border border-solid border-gray-200 bg-white px-3 py-3 text-nowrap',
          showPanel && 'bg-gray-200 transition-colors duration-500 ease-in',
        )}
        onClick={handleOnClick}
      >
        {filterTitle}
        <Image
          src={DropdownArrow}
          alt="dropdown-arrow"
          width={24} height={24}
        />
      </button>

      {showPanel && (
        <ul className="absolute z-2 mt-2 shrink-0 rounded-xl border border-solid border-gray-200 bg-white">
          <li className="font-pretendard cursor-point mt-0.5 flex h-10.5 w-31.25 shrink-0 items-center justify-center text-gray-800 text-lg leading-6.5">
            <button
              className="border-0 bg-white"
              onClick={() => handleOnChange('recent')}
            >
              최신순
            </button>
          </li>
          <hr className="border border-solid border-gray-200" />
          <li className="font-pretendard flex h-10.5 w-31.25 shrink-0 cursor-pointer items-center justify-center text-lg leading-6.5 text-gray-800">
            <button
              className="border-0 bg-white"
              onClick={() => handleOnChange('favorite')}
            >
              좋아요순
            </button>
          </li>
        </ul>
      )}
    </div>
  );
}
