import Header from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '4 fOOt',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="w-full bg-bodyColor font-bodyFont text-white px-4">
        <div className='max-w-screen-xl mx-auto'>
          <Header />
          
      
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}