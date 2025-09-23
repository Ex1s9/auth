import '@/styles/globals.scss'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Auth System',
  description: 'Simple authentication system',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}