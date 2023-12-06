import type { Metadata } from 'next'
import './globals.css'
import Navbar from './_components/header'
import Footer from './_components/footer'
import localFont from 'next/font/local'

const NeueHaasGroteskDisplay = localFont({
  src: [
    {
      path: './styles/fonts/NHaasGroteskDSProRg.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './styles/fonts/NHaasGroteskDSProLt.otf',
      weight: '300',
      style: 'normal',
    },
  ],
  variable: '--font-neue', // Add this line
})

const Tobias = localFont({
  src: [
    {
      path: './styles/fonts/Tobias-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './styles/fonts/Tobias-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './styles/fonts/Tobias-Thin.ttf',
      weight: '100',
      style: 'normal',
    },
  ],
  variable: '--font-tobias', // Add this line
})

export const metadata: Metadata = {
  title: 'Heliconia',
  description: 'Heliconia is art.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${NeueHaasGroteskDisplay.variable} ${Tobias.variable} bg-[#E6E3D6]`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
