import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/libs/cn';

const spinnerVariants = cva('animate-spin', {
  variants: {
    size: {
      sm: 'h-4 w-4',
      md: 'h-8 w-8',
      lg: 'h-16 w-16',
      xl: 'h-24 w-24',
      loading: 'h-60 w-60'
    },
    variant: {
      light: 'text-white',
      primary: 'text-slate-600',
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'primary'
  },
})

interface SpinnerProps extends VariantProps<typeof spinnerVariants> {
  className?: string;
}
export const Spinner = ({
  size,
  variant,
  className,
}: SpinnerProps) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={cn(spinnerVariants({ size, variant }), className)}

      >
        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
      </svg>
      {/* 
          sr-only 는 화면에는 보이지 않지만, (접근성 개선)
          스크린 리더를 사용하는 사용자에게는 읽힐 수 있도록 함
      */}
      <span className='sr-only'>로딩 중..</span>
    </>
  )
}