import { Footer } from '@/components/layouts/Footer'
import { Navigation } from '@/components/ui/navigation'
import { articleMetadata } from '#/config/metadata'

export default function ArticleLayout({ children }) {
  return (
    <div className='flex flex-col justify-center'>
      <Navigation />
      {children}
      <Footer />
    </div>
  )
}

export const metadata = { ...articleMetadata }
