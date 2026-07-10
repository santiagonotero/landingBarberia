import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import ScrollObserver from '@/components/ScrollObserver'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Estudio Jurídico Duarte',
  description: 'Derecho laboral, penal, civil y comercial',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="scroll-smooth">
      {/* <body className={`${inter.className} relative w-full`}> */}
      <body className='w-full'>
        <Navbar />
        <ScrollObserver />
        {children}
      </body>
    </html>
  )
}