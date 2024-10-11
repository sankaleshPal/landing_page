import { memo } from 'react'
import Image from 'next/image'
import lines from "@/assets/lines.png"

const MemoHero = () => {
    return (
        <section
            style={{
                boxShadow: "inset 0 0 100px #ffffff30",
            }} className="w-[98%] flex flex-col md:flex-row gap-4  justify-between relative z-0 md:w-[90%] pb-4 lg:w-[95%] border border-[#ffffff50] rounded-3xl mx-auto mb-[3rem] mt-4 lg:mt-[5rem]">

            <figure className="absolute hidden md:block bottom-0">
                <Image
                    src={lines}
                    alt="lines"
                    className="object-cover h-[28rem] w-[100dvw] lg:h-auto lg:object-fill"
                />
            </figure>
            <section className="text-center md:text-left mt-[4rem] flex-1 xl:p-12">
                <h1 className="text-white text-[2.25rem] lg:text-[3rem] font-medium leading-4 md:ml-6 xl:text-[4rem] xl:leading-6 pb-2">
                    Your Voice
                </h1>
                <h3 className="text-white text-[2.25rem] font-extralight lg:text-[3rem] md:ml-6 xl:pt-3">
                    Shapes the Future
                </h3>
                <p className="text-white leading-4 text-sm opacity-80 md:text-base lg:text-lg mx-6 mt-2 xl:pt-6">
                    Dive into GRWB’s world of blockchain-powered polling
                    where you earn as you influence change.
                </p>
                <article className="border border-[#ffffff50] rounded-2xl bg-[#ffffff15] mt-6 mx-4 hidden lg:flex justify-between backdrop-blur-sm items-center p-4 max-w-[32rem] xl:mt-[4rem] 2xl:mt-[4rem]">
                    <section className="text-white">
                        <h5 className="font-semibold text-lg">
                            Fuel the Future of Political Engagement
                        </h5>
                        <h6 className="text-base">
                            Join our crowd-funding and drive real change
                        </h6>
                    </section>
                    <button className="bg-[#D8031C] text-[#fff] font-semibold text-sm py-2 px-4 rounded-lg w-[8rem]">
                        Get Started
                    </button>
                </article>
                <button className="bg-[#D8031C] text-[#fff] font-semibold text-sm py-2 px-4 rounded-lg w-[86%] mx-6 mt-12 lg:hidden">
                    Get Started
                </button>
            </section>
            <figure className="flex-1 relative">
                <Image
                    src={`https://assets.hipalz.com/Herogif-1.gif`}
                    width={1920}
                    height={1080}
                    unoptimized={true}
                    alt="Gif"
                    className="object-contain rounded-t-full md:rounded-full mt-8 mr-0 h-auto w-full lg:h-auto lg:object-fill md:-mt-[1rem] lg:-mt-[5rem] md:-mr-[2rem] md:ml-6 2xl:ml-10"
                />
            </figure>
        </section>
    )
}

const Hero = memo(MemoHero)
export default Hero