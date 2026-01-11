import { cva, type VariantProps } from "class-variance-authority";
import { type ButtonHTMLAttributes, forwardRef } from "react";

import { cn } from "@/libs/cn";

const buttonVariants = cva(
  "flex text-white justify-center items-center gap-2.5 border-0 rounded-lg",
  {
    variants: {
      intent: {
        active: "bg-primary-100 hover:bg-primary-200 active:bg-primary-300",
        // 에러상태일때 처리할 버튼 스타일 
        ghost: "bg-gray-50 text-error-red border border-error-red hover:bg-gray-200",
        danger: "bg-error-red hover:bg-red-600 active:bg-red-700 text-white"
      },
      size: {
        default: "h-10.5 py-3 px-5.75",
        small: "h-8 px-3 text-sm",
        large: "h-12 px-6 text-lg",
      },
      isDisabled: {
        true: "bg-gray-400 hover:bg-gray-500"
      },
    },
    defaultVariants: {
      intent: "active",
      size: "default"
    },
  }
);

/** VariantProps: cva에서 정의한 intent, size 등의 타입을 자동으로 가져옵니다.*/
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> { }

/** 첫 번째는 ref의 타입, 두 번째는 props의 타입*/
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      intent,
      size,
      disabled,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(
          buttonVariants({
            intent,
            size,
            isDisabled: !!disabled, //boolean 으로 타입 강제
            className
          })
        )}
        {...props}
      />
    )
  }
);

Button.displayName = 'Button';
export { Button, buttonVariants }