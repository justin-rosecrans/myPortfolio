'use client';
import Image from "next/image";
import centreDetailsImg from '../../../public/carousel/Schwab/Education_Centre_Details.svg';
import centreDetailsImgHover from '../../../public/carousel/Schwab/Education_Centre_Hover.svg';
import centreImg from '../../../public/carousel/Schwab/Education_Centre.svg';
import globalTranslationsImg from '../../../public/carousel/Schwab/global_translations.svg';
import { Carousel } from 'flowbite-react';

export default function slideShowCarousel() {
  return (
    <Carousel slideInterval={5000} className="relative w-full h-96 z-0">
          <Image
            src={centreDetailsImg}
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 max-w-screen-md"
            alt="Picture of the author"
            width={500}
            height={500}
          />
          <Image
            src={centreDetailsImgHover}
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 max-w-screen-md"
            width={500}
            height={500}
            alt="..."
          />
          <Image
            src={centreDetailsImgHover}
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 max-w-screen-md"
            width={500}
            height={500}
            alt="..."
          />
          <Image
            src={centreDetailsImgHover}
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 max-w-screen-md"
            width={500}
            height={500}
            alt="..."
          />
          <Image
            src={centreDetailsImgHover}
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 max-w-screen-md"
            width={500}
            height={500}
            alt="..."
          />
    </Carousel>
  )
}


