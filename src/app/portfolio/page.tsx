import Carousel from "../components/carousel/Carousel";
import { EmblaOptionsType } from 'embla-carousel-react'
import "../globals.css"

export default function PortfolioPage() {

const OPTIONS: EmblaOptionsType = {}
const SLIDE_COUNT = 10
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

  return (
    <section className="flex flex-col items-center justify-between blue-background py-24">
      <h1 className="text-4xl font-bold text-center text-blue-700">
         Portfolio
      </h1>
      <Carousel slides={SLIDES} options={OPTIONS} />
      <div className="pt-24 px-16 w-screen">
        {/* <Accordion /> */}
      </div>
    </section>
  );
}
