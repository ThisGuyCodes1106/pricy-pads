import './globals.css'
import type { Metadata } from 'next'
import { Footer, Navbar } from '@/components'


export const metadata: Metadata = {
  title: 'Pricy Pads',
  description: 'Where property dreams and wallet nightmares unite!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='ralative'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
