import { cva } from "class-variance-authority";
import { forwardRef } from "react";

import { cn } from "@/lib/cn";

const buttonVariants = cva(
  "flex text-white justify-center items-center gap-2.5 border-0 rounded-lg",
  {
    variants: {
      intent: {
        active: "bg-primary-100",
        disabled: "bg-gray-400"
      },
      size: {
        default: "h-10.5 py-3 px-5.74",
        small: "h-8 px-3 text-sm",
        large: "h-12 px-6 text-lg",
      },
      defaultVariants: {
        intent: "active",
        size: "default"
      },
    }
  }
);

const Button = forwardRef(
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
    // 받은 disabled prop에 따라 CVA의 intent여부를 결정
    const resolvedIntent = disabled ? 'disabled' : intent;

    return (
      <button
        className={cn(
          buttonVariants({ intent: resolvedIntent, size, className })
        )}
        disabled={disabled}
        ref={ref}
        {...props}
      />
    )
  }
);

Button.displayName = 'Button';
export { Button, buttonVariants }