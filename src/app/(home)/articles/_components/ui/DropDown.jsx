"use client";
import clsx from "clsx";
import { useState } from "react";
import DropDownIcon from "@/assets/img/ic_arrow_down.svg";
import arrowDownIcon from "@/assets/img/ic_arrow_down.svg";
import Image from "next/image";

export default function DropDown() {
  const [isDropDownActive, setIsDropDownActive] = useState(false);

  const handleDropDownBtnClick = () => {
    setIsDropDownActive(!isDropDownActive);
  };

  const handleOrderDropDwonSelect = () => {
    setIsDropDownActive(false);
  };

  return (
    <div className="relative w-32 text-base font-normal leading-10.5 text-center text-(--secondary-800)">
      <button
        className="flex items-center justify-between w-full h-10.5 py-3 px-5 bg-white border border-(--secondary-200) rounded-xl"
        onClick={handleDropDownBtnClick}
      >
        <span>최신순</span>
        <picture>
          <source media="(max-width: 46.4rem)" srcSet={DropDownIcon} />
          <Image className="block w-6 h-6" src={arrowDownIcon} alt="정렬메뉴" />
        </picture>
      </button>

      <ul
        className={clsx(
          "absolute z-0 w-32 mt-2 bg-white border border-(--secondary-200) rounded-xl",
          isDropDownActive ? "block" : "hidden"
        )}
      >
        <li className="w-full h-10.5 border-b border-(--secondary-200) last:border-b-0">
          <button
            value="recent"
            onClick={handleOrderDropDwonSelect}
            className="w-full h-full bg-transparent border-none"
          >
            최신순
          </button>
        </li>
      </ul>
    </div>
  );
}
