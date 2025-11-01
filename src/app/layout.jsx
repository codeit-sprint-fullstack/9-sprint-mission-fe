/* + #은 jsconfig설정에 의해 최상위 루트를 가리키게된다. */
import { rootMetadata } from '#/config/root-metadata'
import { Footer } from '@/components/layouts/Footer'
import Pretendard from 'next/font/local'
import './globals.css'

const pretendard = Pretendard({
  src: '../assets/PretendardVariable.woff2',
  display: 'swap',
  weight: '100 900',
  variable: '--font-pretendard',
})

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={`${pretendard.variable} antialiased`}>
        {children}
        <Footer />
      </body>
    </html>
  )
}

export const metadata = { ...rootMetadata }
