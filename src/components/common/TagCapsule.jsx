import iconClose from "@/assets/img/ic_close.svg";
import Image from "next/image";

export function TagCapsule({ tagValue = "", btnActive, onDeleteTag }) {
  console.log(tagValue);
  const handleDeletButton = (event) => {
    event.preventDefault();
    onDeleteTag(tagValue);
  };

  return (
    <p className="w-max flex items-center py-1.5 pr-3 pl-4 rounded-[1.625rem] bg-(--secondary-100) text-(--secondary-800) text-base font-normal leading-6">
      #{tagValue}
      {btnActive && (
        <button
          className="ml-2 w-5.5 h-6 p-0 border-none bg-transparent"
          onClick={handleDeletButton}
        >
          <Image src={iconClose} alt="닫기 버튼" />
        </button>
      )}
    </p>
  );
}
