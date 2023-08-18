"use client" 
import "../flowbite.css";
// import { useEffect } from 'react'
import Image from "next/image";
import centreDetailsImg from '../../../public/carousel/Schwab/Education_Centre_Details.svg';

export default function Carousel() {

  // useEffect(() => {
  //   const images = [
  //     '/carousel/Schwab/Education_Centre_Details.svg',
  //     '/carousel/Schwab/Education_Centre_Hover.svg', 
  //     '/carousel/Schwab/Education_Centre.svg',
  //     '/carousel/Schwab/global_translations.svg',
  //     '/carousel/Schwab/Education_Centre_Details.svg'
  //   ]

  //   images.forEach(image => {
  //     const img = new Image()
  //     img.src = image
  //   })

  // }, [])

  return (
    <div
      id="default-carousel"
      className="relative w-full z-0"
      data-carousel="static"
    >
      {/* <!-- Carousel wrapper --> */}
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {/* <!-- Item 1 --> */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <figure className="relative h-full">
          <Image
            src={centreDetailsImg}
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 max-w-screen-md"
            alt="Picture of the author"
            width={500}
            height={500}
          />
            <figcaption className="absolute bottom-0 left-0 z-20 flex items-center justify-center w-full h-16 px-4 text-sm font-medium text-center text-white bg-black/50">
            <span className="inline-block px-2 py-1 text-white bg-black/50 rounded">
                1
            </span>
            <span className="ml-2">Project One Image</span>
            </figcaption>
            </figure>
        </div>
        {/* <!-- Item 2 --> */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <figure className="relative h-full">
          <img
            src="/carousel/Schwab/Education_Centre_Hover.svg"
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 max-w-screen-md"
            alt="..."
          />
                      <figcaption className="absolute bottom-0 left-0 z-20 flex items-center justify-center w-full h-16 px-4 text-sm font-medium text-center text-white bg-black/50">
            <span className="inline-block px-2 py-1 text-white bg-black/50 rounded">
                2
            </span>
            <span className="ml-2">Project Two Image</span>
            </figcaption>
            </figure>
        </div>
        {/* <!-- Item 3 --> */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <figure className="relative h-full">
          <img
            src="/carousel/Schwab/Education_Centre.svg"
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 max-w-screen-md"
            alt="..."
          />
                      <figcaption className="absolute bottom-0 left-0 z-20 flex items-center justify-center w-full h-16 px-4 text-sm font-medium text-center text-white bg-black/50">
            <span className="inline-block px-2 py-1 text-white bg-black/50 rounded">
                3
            </span>
            <span className="ml-2">Project Three Image</span>
            </figcaption>
            </figure>
        </div>
        {/* <!-- Item 4 --> */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <figure className="relative h-full">
          <img
            src="/carousel/Schwab/global_translations.svg"
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 max-w-screen-md"
            alt="..."
          />
                      <figcaption className="absolute bottom-0 left-0 z-20 flex items-center justify-center w-full h-16 px-4 text-sm font-medium text-center text-white bg-black/50">
            <span className="inline-block px-2 py-1 text-white bg-black/50 rounded">
                4
            </span>
            <span className="ml-2">Project Four Image</span>
            </figcaption>
            </figure>
        </div>
        {/* <!-- Item 5 --> */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <figure className="relative h-full">
          <img
            src="/carousel/Schwab/Education_Centre_Details.svg"
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 max-w-screen-md"
            alt="..."
          />
            <figcaption className="absolute bottom-0 left-0 z-20 flex items-center justify-center w-full h-16 px-4 text-sm font-medium text-center text-white bg-black/50">
            <span className="inline-block px-2 py-1 text-white bg-black/50 rounded">
                5
            </span>
            <span className="ml-2">Project Five Image</span>
            </figcaption>
            </figure>
        </div>
      </div>
      {/* <!-- Slider indicators --> */}
      <div className="absolute z-30 flex space-x-3 -translate-x-1/2 left-1/2">
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="true"
          aria-label="Slide 1"
          data-carousel-slide-to="0"
        ></button>
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 2"
          data-carousel-slide-to="1"
        ></button>
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 3"
          data-carousel-slide-to="2"
        ></button>
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 4"
          data-carousel-slide-to="3"
        ></button>
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 5"
          data-carousel-slide-to="4"
        ></button>
      </div>
      {/* <!-- Slider controls --> */}
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full text-white bg-black/50 dark:bg-gray-800/30 group-hover:bg-black/30 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full text-white bg-black/50 dark:bg-gray-800/30 group-hover:bg-black/30 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
}
