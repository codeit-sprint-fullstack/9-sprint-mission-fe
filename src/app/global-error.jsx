'use client'
/** @see https://nextjs.org/docs/pages/building-your-application/routing/custom-error */
// next.js내장 에러객체
import NextError from 'next/error'

export default function GlobalError() {
  // <sentry>

  return (
    <html lang='ko'>
      <body>
        {/* 
          app router 환경에서는,
          코드 안에서 실제 발생한 오류 코드(404, 500 등) 쉽게알 수 없게 되어 있다고 함
          원래 상태 에러관련 프롭을 받아야 하지만 
          임시로 0이라는 값을줘서 일반적인 오류가 발생했다는 메시지라도
          최종적으로 사용자에게 보여준다.
        */}
        <NextError statusCode={0} />
      </body>
    </html>
  )
}