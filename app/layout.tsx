import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './_components/header'
import Footer from './_components/footer'
import localFont from 'next/font/local'

const NeueHaasGroteskDisplay = localFont({
  src: [
    {
      path: './styles/fonts/NeueHaasDisplayRoman.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './styles/fonts/NeueHaasDisplayLight.ttf',
      weight: '300',
      style: 'normal',
    },
  ],
  variable: '--font-neue', // Add this line
})

// const AtlasTypewriter = localFont({
//   src: [
//     {
//       path: '../styles/fonts/AtlasTypewriterRegular.otf',
//       weight: '400',
//       style: 'normal',
//     },
//     {
//       path: '../styles/fonts/AtlasTypewriterLight.otf',
//       weight: '300',
//       style: 'normal',
//     },
//     {
//       path: '../styles/fonts/AtlasTypewriterThin.otf',
//       weight: '100',
//       style: 'normal',
//     },
//     {
//       path: '../styles/fonts/AtlasTypewriterBold.otf',
//       weight: '700',
//       style: 'normal',
//     },
//   ],
//   variable: '--font-typewriter', // Add this line
// })



const inter = Inter({ subsets: ['latin'] })

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
      <body className={`${NeueHaasGroteskDisplay.variable} bg-[#E6E3D6]`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
