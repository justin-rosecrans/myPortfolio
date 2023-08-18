import './globals.css'
import { Fragment } from 'react'


export default function Home() {
  return (
    <Fragment>
    <main className="flex flex-col items-center justify-between py-24 px-16 blue-background">
      <h1 className="text-4xl font-bold text-center text-blue-700 pb-5">
        Justin Rosecrans - Web Developer Portfolio
      </h1>
      <h2 className="text-3xl font-bold text-center text-blue-500 pt-5 pb-5">
        Proficient in Javascript
      </h2>
      <h3 className="text-2xl font-bold text-center text-blue-300 pb-5">
        With a passion for problem solving
      </h3>
      <h4 className="text-1xl font-bold text-center text-blue-100 pb-5">
        And an artistic flair
      </h4>
    </main>
    </Fragment>
  )
}
