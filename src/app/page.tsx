import Image from 'next/image'
import Carousel from './components/carousel'
import './globals.css'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-24 px-16 blue-background">
      <Carousel />
    </main>
  )
}
