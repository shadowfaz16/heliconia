import Image from 'next/image'
import About from './_components/_home/about'
import Hero from './_components/_home/hero'
import Artists from './_components/_home/artists'
import Press from './_components/_home/press'
import Footer from './_components/footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 md:px-8 w-full">
      <Hero />
      <About />
      <Artists />
      <Press />
    </main>
  )
}
