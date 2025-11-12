/* + #은 jsconfig설정에 의해 최상위 루트를 가리키게된다. */
import '../globals.css'

import { Footer } from '@/components/layouts/Footer'
import { Navigation } from '@/components/ui/navigation'
import { rootMetadata } from '#/config/metadata'

export default function ArticleLayout({ children }) {
  return (
    <div className='flex flex-col justify-center'>
      <Navigation />
      {children}
      <Footer />
    </div>
  )
}

export const metadata = { ...rootMetadata }
