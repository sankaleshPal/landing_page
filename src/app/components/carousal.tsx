"use client";
import React, { useState } from 'react'
import Image,{StaticImageData} from 'next/image'

const Carousel = ({ slides }:{slides:StaticImageData[]}) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        )
    }

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        )
    }

    return (
        <>
            <article className='block lg:hidden'>
                <div className="relative flex justify-center items-center">
                    <button
                        className="absolute left-4 md:left-[20%] z-10 text-white"
                        onClick={prevSlide}
                    >
                        &#8249;
                    </button>
                    <div
                        className="flex overflow-hidden transition-all duration-300"
                        style={{ width: '100%' }}
                    >
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                className={`flex-shrink-0 transition-transform duration-300 ${index === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                                    }`}
                                style={{
                                    minWidth: '100%',
                                    transform: `translateX(-${currentIndex * 100}%)`,
                                }}
                            >
                                <Image
                                    src={slide}
                                    alt={`Slide ${index + 1}`}
                                    className="object-cover mx-auto rounded-xl scale-75"
                                    width={260}
                                    height={400}
                                    sizes="(max-width: 640px) 140px, (min-width: 768px) 297px"
                                />
                            </div>
                        ))}
                    </div>
                    <button
                        className="absolute right-4 md:right-[20%] z-10 text-white"
                        onClick={nextSlide}
                    >
                        &#8250;
                    </button>
                </div>
            </article>
            <article className='hidden lg:block'>
                <div className="relative w-full flex flex-nowrap hide-scrollbar items-center justify-center overflow-auto gap-8 pl-6">
                    {slides.map((slide, index) => (
                        <figure
                            key={index}
                            className='w-[297px] h-auto flex-shrink-0 '
                        >
                            <Image
                                src={slide}
                                alt={`Slide ${index + 1}`}
                                className="object-cover mx-auto rounded-xl"
                                width={260}
                                height={400}
                                sizes="(max-width: 640px) 260px, (min-width: 768px) 297px"
                            />
                        </figure>
                    ))}
                </div>
            </article>
        </>
    )
}

export default Carousel
