"use client";
import Image from "next/image";
import { Carousel } from "flowbite-react";
import '../../../app/globals.css';

export default function slideShowCarousel() {
  return (
    <Carousel
      data-carousel="slide"
      slide={false}
      className="relative w-full h-96 z-0 carousel"
    >
      {/* <div>
        <Image
          src="/carousel/Schwab/Education_Centre.svg"
          className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 max-w-screen-md"
          alt="Picture of the author"
          width={500}
          height={500}
        />
        <div className="w-full bg-gradient-to-t from-black">
          <div className="w-full h-24 bg-gradient-to-t from-black opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-full h-24 flex items-center justify-center text-white">
            <div className="text-center">
              <h3 className="text-2xl font-bold">Project One</h3>
              <p className="text-sm">2023</p>
            </div>
          </div>
        </div>
      </div> */}
      <div>
        <Image
          src="/carousel/Schwab/Education_Centre_Hover.svg"
          className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 max-w-screen-md"
          width={500}
          height={500}
          alt="..."
        />
        {/* <div className="w-full bg-gradient-to-t from-black">
          <div className="w-full h-24 bg-gradient-to-t from-black opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-full h-24 flex items-center justify-center text-white">
            <div className="text-center">
              <h3 className="text-2xl font-bold">Project One</h3>
              <p className="text-sm">2023</p>
            </div>
          </div>
        </div> */}
      </div>
      <div>
        <Image
          src="/carousel/Schwab/global_translations.svg"
          className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 max-w-screen-md"
          width={500}
          height={500}
          alt="..."
        />
        {/* <div className="w-full bg-gradient-to-t from-black">
          <div className="w-full h-24 bg-gradient-to-t from-black opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-full h-24 flex items-center justify-center text-white">
            <div className="text-center">
              <h3 className="text-2xl font-bold">Project Two</h3>
              <p className="text-sm">2023</p>
            </div>
          </div>
        </div> */}
      </div>
      <div>
        <Image
          src="/carousel/Schwab/Upload_Forms.svg"
          className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 max-w-screen-md"
          width={500}
          height={500}
          alt="..."
        />
        {/* <div className="w-full bg-gradient-to-t from-black">
          <div className="w-full h-24 bg-gradient-to-t from-black opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-full h-24 flex items-center justify-center text-white">
            <div className="text-center">
              <h3 className="text-2xl font-bold">Project Four</h3>
              <p className="text-sm">2023</p>
            </div>
          </div>
        </div> */}
      </div>
      <div>
        <Image
          src="/carousel/fanatics/nfl-gender-vertical-slideshow.jpeg"
          className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 max-w-screen-md"
          width={500}
          height={500}
          alt="..."
        />
        {/* <div className="w-full bg-gradient-to-t from-black">
          <div className="w-full h-24 bg-gradient-to-t from-black opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-full h-24 flex items-center justify-center text-white">
            <div className="text-center">
              <h3 className="text-2xl font-bold">Project Five</h3>
              <p className="text-sm">2023</p>
            </div>
          </div>
        </div> */}
      </div>
      <div>
        <Image
          src="/carousel/Nokia/gm/home.jpg"
          className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 max-w-screen-md"
          width={500}
          height={500}
          alt="..."
        />
        {/* <div className="w-full bg-gradient-to-t from-black">
          <div className="w-full h-24 bg-gradient-to-t from-black opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-full h-24 flex items-center justify-center text-white">
            <div className="text-center">
              <h3 className="text-2xl font-bold">Project Five</h3>
              <p className="text-sm">2023</p>
            </div>
          </div>
        </div> */}
      </div>
    </Carousel>
  );
}
