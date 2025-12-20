import { cva, type VariantProps } from "class-variance-authority"
import Image, { type StaticImageData } from "next/image"
import { type HTMLAttributes } from "react"

import DefaultAvatar from "@/assets/ic_default_avatar.svg"
import { cn } from "@/libs/cn"

/** 공용 컴포넌트는 HTML요소의 속성을 확장하는것을 권장 (재사용성 이 중요하기에)*/
const avatarVariants = cva(
  "relative bg-gray-300 rounded-full shrink-0 overflow-hidden",
  {
    variants: {
      size: {
        small: "w-8 h-8",
        medium: "w-10 h-10",
        large: "w-16 h-16",
        xl: "w-24 h-24"
      },
    },
    defaultVariants: {
      size: "medium"
    },
  }
);

/**
 *  avatar는 보통 div에 연결됨
 *  경로는 문자열이거나 import된 이미지 객체 일수도 있음 
 */
interface AvatarProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof avatarVariants> {
  src?: string | StaticImageData | null;
  alt?: string;
}

export function Avatar({ className = "", size = "medium", src, alt = 'author-avatar', ...props }: AvatarProps) {
  const mergedClass = cn(
    avatarVariants({ size }),
    className
  );

  return (
    <div className={mergedClass} {...props}>
      <Image
        src={src || DefaultAvatar}
        alt={alt || "author-avatar"}
        className="absolute object-cover"
        fill
      />
    </div>
  )

}