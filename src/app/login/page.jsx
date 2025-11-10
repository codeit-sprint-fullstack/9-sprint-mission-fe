import Image from 'next/image';
import Link from 'next/link';

import { paths } from '#/config/paths';

import { LoginForm } from './_components/login-form';

export default function LoginPage() {
  return (
    <main>
      <LoginForm />

      <div className="flex font-pretendard text-base/relaxed font-medium w-160 py-4 px-6 m-0 justify-between items-center bg-#E6F2FF gap-4.5">
        <p>간편 로그인하기</p>
        <div className="relative flex gap-4">
          <Link href="https://www.google.com">
            <Image
              src="/images/sns/auth_ic_google.png"
              alt='google'
              fill
            />
          </Link>
          <Link href="https://www.kakaocorp.com/page/">
            <Image
              src="/images/sns/auth_ic_kakao.png"
              alt='kakao'
              fill
            />
          </Link>
        </div>
      </div>

      <div className='flex justify-center items-center gap-1'>
        <p className="flex font-pretendard text-sm/normal font-medium gap-4 mt-6">
          판다마켓이 처음이신가요?
        </p>
        <Link className="flex font-pretendard text-sm/normal font-medium gap-4  mt-6 text-primary-100" href={paths.auth.signup.getHref()}>
          회원가입
        </Link>
      </div>

    </main>
  );
}