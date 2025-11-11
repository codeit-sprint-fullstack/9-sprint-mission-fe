"use client";
import clsx from "clsx";
import Image from "next/image";
import viewToggleOff from "@/assets/img/btn_visibility_off.png";
import viewToggleOn from "@/assets/img/btn_visibility_on.png";
import { useState } from "react";

export default function InputSection({
  valueType,
  valueName = valueType,
  labelTitle,
  err,
  placeholder,
  register,
  validation,
}) {
  const [viewToggle, setViewToggle] = useState(false);
  const handleViewToggle = (event) => {
    event.preventDefault();
    setViewToggle(!viewToggle);
  };

  return (
    <div className="w-full mb-6">
      <label
        htmlFor={valueName}
        className="block w-full text-(--secondary-800) text-lg font-bold leading-relaxed mb-4"
      >
        {labelTitle}
      </label>
      <div
        className={clsx(
          "flex grow justify-between items-center w-full h-14 px-6 py-4 rounded-xl bg-(--secondary-100) focus-within:border focus-within:border-(--primary-100)",
          { "border border-(--err-red)": err }
        )}
      >
        <input
          {...register(valueName, validation)}
          type={
            valueType === "password"
              ? viewToggle
                ? "text"
                : "password"
              : valueType
          }
          id={valueName}
          className="input-children"
          placeholder={placeholder}
        />
        {valueType === "password" && (
          <button
            className="w-6 h-6 p-0 m-0 border-0 bg-transparent"
            onClick={handleViewToggle}
          >
            <Image
              src={viewToggle ? viewToggleOn : viewToggleOff}
              alt={`비밀번호 표시 토글, ${
                viewToggle ? "보임상태" : "숨김상태"
              }`}
              className="h-full"
            />
          </button>
        )}
      </div>
      {err && (
        <p className="mt-2 mb-0 ml-4 text-(--err-red) text-[0.97rem] font-semibold">
          {err.message}
        </p>
      )}
    </div>
  );
}
