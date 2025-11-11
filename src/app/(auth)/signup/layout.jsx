import { loginMetadata } from '#/config/metadata'

export default function RootLayout({ children }) {
  return (
    <>
      {children}
    </>
  )
}

export const metadata = { ...loginMetadata }
