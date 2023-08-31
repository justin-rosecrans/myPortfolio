"use client"
import image1 from '../../../../public/carousel/Schwab/Education_Centre_Hover.svg'
import image2 from '../../../../public/carousel/Schwab/global_translations.svg'
import image3 from '../../../../public/carousel/fanatics/nfl-gender-vertical-slideshow.jpeg'
import image4 from '../../../../public/carousel/Nokia/gm/home.jpg'

export const images: string[] = [image1, image2, image3, image4]

const imageByIndex = (index: number): string => images[index % images.length]

export default imageByIndex
