"use client";
import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import { Thumb } from "./EmblaCarouselThumbsButton";
import Image from "next/image";
import imageByIndex from "./imageByIndex";
import captionsByIndex from "./captionsByIndex";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const carousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();
    emblaMainApi.on("select", onSelect);
    emblaMainApi.on("reInit", onSelect);
  }, [emblaMainApi, onSelect]);

  const scrollPrev = useCallback(() => {
    if (emblaMainApi) emblaMainApi.scrollPrev();
  }, [emblaMainApi]);

  const scrollNext = useCallback(() => {
    if (emblaMainApi) emblaMainApi.scrollNext();
  }, [emblaMainApi]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaMainRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">
                <span>{index + 1}</span>
              </div>
              <figure className="relative w-full h-96 z-0 absolute bottom caption-container">
                <Image
                  className="embla__slide__img"
                  src={imageByIndex(index)}
                  alt="Your alt text"
                />
                <figcaption className="absolute bottom-0 left-0 w-full h-16 p-4 text-white bg-blue-800 bg-opacity-90">
                  <p className="font-bold text-center text-white pb-5">
                    {captionsByIndex(index)}
                  </p>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>
      
      <button
        className="embla__prev embla__button embla__button--prev"
        onClick={scrollPrev}
      >
        <svg
          className="embla__button__svg"
          viewBox="137.718 -1.001 366.563 644"
        >
          <path d="M428.36 12.5c16.67-16.67 43.76-16.67 60.42 0 16.67 16.67 16.67 43.76 0 60.42L241.7 320c148.25 148.24 230.61 230.6 247.08 247.08 16.67 16.66 16.67 43.75 0 60.42-16.67 16.66-43.76 16.67-60.42 0-27.72-27.71-249.45-249.37-277.16-277.08a42.308 42.308 0 0 1-12.48-30.34c0-11.1 4.1-22.05 12.48-30.42C206.63 234.23 400.64 40.21 428.36 12.5z" />
        </svg>
      </button>
      <button
        className="embla__next embla__button embla__button--next"
        onClick={scrollNext}
      >
        <svg className="embla__button__svg" viewBox="0 0 238.003 238.003">
          <path d="M181.776 107.719L78.705 4.648c-6.198-6.198-16.273-6.198-22.47 0s-6.198 16.273 0 22.47l91.883 91.883-91.883 91.883c-6.198 6.198-6.198 16.273 0 22.47s16.273 6.198 22.47 0l103.071-103.039a15.741 15.741 0 0 0 4.64-11.283c0-4.13-1.526-8.199-4.64-11.313z" />
        </svg>
      </button>

      <div className="embla-thumbs">
        <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
          <div className="embla-thumbs__container">
            {slides.map((index) => (
              <Thumb
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                index={index}
                imgSrc={imageByIndex(index)}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default carousel;

//     <Carousel
//       data-carousel="slide"
//       slide={false}
//       className="relative w-full w-56 sm:h-56 md:h-96 z-0 carousel"
//     >

// <figure className="relative w-full h-96 z-0 absolute bottom">
//         <Image
//           src="/carousel/Schwab/Education_Centre_Hover.svg"
//           className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 max-w-screen-md"
//           width={500}
//           height={500}
//           alt="..."
//         />
//         <figcaption className="absolute bottom-0 left-0 w-full h-24 p-4 text-white bg-black bg-opacity-50">
//           <p className="font-bold text-center text-blue-300 pb-5">
//             Proficient in JavaScript
//           </p>
//         </figcaption>
//         </figure>
//       <div>
//         <Image
//           src="/carousel/Schwab/global_translations.svg"
//           className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 max-w-screen-md"
//           width={500}
//           height={500}
//           alt="..."
//         />
//       </div>
//       <div>
//         <Image
//           src="/carousel/Schwab/Upload_Forms.svg"
//           className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 max-w-screen-md"
//           width={500}
//           height={500}
//           alt="..."
//         />
//       </div>
//       <div>
//         <Image
//           src="/carousel/fanatics/nfl-gender-vertical-slideshow.jpeg"
//           className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 max-w-screen-md"
//           width={500}
//           height={500}
//           alt="..."
//         />
//       </div>
//       <div>
//         <Image
//           src="/carousel/Nokia/gm/home.jpg"
//           className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 max-w-screen-md"
//           width={500}
//           height={500}
//           alt="..."
//         />
//       </div>
//     </Carousel>
