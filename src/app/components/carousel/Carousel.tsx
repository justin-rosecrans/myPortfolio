"use client";
import React, { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react'
import { Thumb } from './EmblaCarouselThumbsButton'
import Image from 'next/image';
import imageByIndex from './imageByIndex';
import captionsByIndex from './captionsByIndex';

type PropType = {
  slides: number[]
  options?: EmblaOptionsType
}

const carousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options)
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true
  })

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return
      emblaMainApi.scrollTo(index)
    },
    [emblaMainApi, emblaThumbsApi]
  )

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return
    setSelectedIndex(emblaMainApi.selectedScrollSnap())
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap())
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex])

  useEffect(() => {
    if (!emblaMainApi) return
    onSelect()
    emblaMainApi.on('select', onSelect)
    emblaMainApi.on('reInit', onSelect)
  }, [emblaMainApi, onSelect])

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
  )
}

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
