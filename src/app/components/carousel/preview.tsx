import Image from 'next/image'
import React from 'react'
import Carousel from '../carousal'
import Carousal from "@/assets/carousalImage.png"
import Carousel1 from "@/assets/carousel1.png";
import Carousel2 from "@/assets/carousel2.png";
import Carousel3 from "@/assets/carousel3.png";

const slides = [
    Carousel1,
    Carousel2,
    Carousel3,
];

const Preview = () => {
    return (
        <section className="relative pb-[4rem] md:pb-0 2xl:pb-0">
            <header className="absolute w-full transform left-1/2 top-[4rem] md:top-[7rem] -translate-x-1/2 -translate-y-1/2">
                <center style={{
                    textShadow: '3px 3px 5px #000'
                }} className="text-3xl md:text-[3rem] text-white ">
                    Our Core Features
                </center>
                <center style={{
                    textShadow: '3px 3px 5px #000'
                }} className="text-base md:text-[1.25rem] md:mt-4 opacity-80 text-white ">
                    Unlock the Power of Polling and Rewards
                </center>
            </header>
            <section
                style={{
                    background: 'linear-gradient(0deg, #111161 100%, #2929DA 120.25%)',
                    zIndex: 50,
                }}
                className="relative z-20 mix-blend-overlay h-[28rem] w-[100dvw] md:h-[40rem] lg:h-[45rem] xl:h-[45rem] 2xl:h-[48rem] max-h-auto lg:object-fill"
            >
                <Image
                    src={Carousal}
                    alt="Carousal"
                    className="object-cover h-[32rem] w-[100dvw] md:h-[40rem] lg:h-[45rem] xl:h-[45rem] 2xl:h-[53rem] max-h-auto lg:object-cover"

                />
            </section>
            <div
                className="absolute -bottom-[2rem] md:bottom-[3rem] lg:bottom-[5rem] w-full overflow-auto mx-auto z-50 rounded-2xl cursor-grab active:cursor-grabbing"
            >
                <Carousel slides={slides} />
            </div>
        </section>
    )
}

export default Preview