import './globals.css'
import { Fragment } from 'react'
import Image from 'next/image'
import profilePicture from '../../public/profilePicture.jpg'


export default function Home() {
  return (
    <Fragment>
    <main className="flex flex-col items-center justify-between py-5 px-16 blue-background">
      <h1 className="text-4xl font-bold text-center text-blue-700 pb-5">
        Justin Rosecrans - Senior Front-End Developer
      </h1>

      <Image className="rounded-full" src={profilePicture} alt="Justin Rosecrans" width={200} height={200} />

      <h2 className="text-3xl font-bold text-center text-blue-500 pt-5 pb-5">
        Developing the Web, One Pixel at a Time
      </h2>
      <h3 className="text-2xl font-bold text-center text-blue-300 pb-5">
        Proficient in JavaScript
      </h3>
      
      <section className="text-1xl text-black-100 text-center">
        <p>Webpage is created with: React, TypeScript, JavaScript, <br /> Next.js, Tailwind.css, Flowbite Components</p>
      </section>
    </main>
    </Fragment>
  )
}
