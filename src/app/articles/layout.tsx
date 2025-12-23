import { type PropsWithChildren } from 'react'

import { Footer } from '@/components/layouts/Footer'
import { Navigation } from '@/components/ui/navigation'
import { articleMetadata } from '#/config/metadata'

// PropsWithChildren, React.ReactNode 등 다양한 방법존재 
export default function ArticleLayout(props: LayoutProps<'/articles'>) {
  return (
    <div className='flex flex-col justify-center mx-auto'>
      <Navigation />
      {props.children}
      <Footer />
    </div>
  )
}

export const metadata = { ...articleMetadata }
