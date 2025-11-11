import Link from "next/link"

import { AuthTitle } from "@/components/layouts/Auth/auth-title"
import { SocialLogin } from "@/components/layouts/Auth/social-login"
import { paths } from "#/config/paths"

import SignUpForm from "./_components/signup-form"

export default function SignUpPage() {
  return (
    <main className="container mx-auto max-w-160 min-h-screen">
      <AuthTitle />

      <SignUpForm />

      <SocialLogin />

      <div className="flex justify-center items-center gap-1 mb-52.25">
        <p className="flex font-pretendard text-sm/normal font-medium gap-4 mt-6 text-gray-800">
          이미 회원이신가요?
        </p>
        <Link className='flex font-pretendard text-sm/normal font-medium gap-4 mt-6 text-primary-100' href={paths.auth.login.getHref()}>
          로그인
        </Link>
      </div>
    </main>
  )
}
