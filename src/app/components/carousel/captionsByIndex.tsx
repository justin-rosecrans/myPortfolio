"use client"

export const captions: string[] = [
    'Education Centre Project - Carousel Hover State',
    'Account Centre language change with translations project',
    'Fanatics Vertical Carousel',
    'Nokia Global Marketing - Home Page for GM'
]

const captionsByIndex = (index: number): string => captions[index % captions.length]


export default captionsByIndex;
