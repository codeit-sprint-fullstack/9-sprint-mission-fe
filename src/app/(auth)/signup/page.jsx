import Link from "next/link"

import { SocialLogin } from "@/components/layouts/Auth/social-login"

import SignUpForm from "./_components/signup-form"

export default function SignUpPage() {
  return (
    <main>
      <SignUpForm />

      <SocialLogin />

      <p className="signup-para">이미 회원이신가요?<Link className='signup-para-a' to="/login">로그인</Link></p>
    </main>
  )
}
