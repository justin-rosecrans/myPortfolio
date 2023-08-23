import './globals.css'
import { Fragment } from 'react'
import Image from 'next/image'
import profilePicture from '../../public/profilePicture.jpg'


export default function Home() {
  return (
    <Fragment>
    <main className="flex flex-col items-center justify-between py-24 px-16 blue-background">
      <h1 className="text-4xl font-bold text-center text-blue-700 pb-5">
        Justin Rosecrans - Web Developer Portfolio
      </h1>

      <Image className="rounded-full" src={profilePicture} alt="Justin Rosecrans" width={200} height={200} />

      <h2 className="text-3xl font-bold text-center text-blue-500 pt-5 pb-5">
        Building the Web, One Pixel at a Time
      </h2>
      <h3 className="text-2xl font-bold text-center text-blue-300 pb-5">
        Proficient in Javascript
      </h3>
      <h4 className="text-1xl font-bold text-center text-blue-100 pb-5">
        With a touch of artistic flair
      </h4>
      
      <section className="text-1xl text-black-100 pt-5">
        <div>Webpage is created with Next.js, Tailwind.css, and Flowbite Components</div>
        <div>Background image is made created with AI using Open AI Midjourney Engine</div>
        <div>Some of the ideas of architecture came from using the AI of Chat GPT and GitHub Copilot</div>
      </section>
    </main>
    </Fragment>
  )
}
