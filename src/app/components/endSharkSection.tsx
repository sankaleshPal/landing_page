
import Image from "next/image"
import { memo } from "react"

import FirstImage from "@/assets/bottomEndSection/first.png"
import SecondImage from "@/assets/bottomEndSection/sec.png"
import ThirdImage from "@/assets/bottomEndSection/third.png"

const mapArr = [
    {
        Title: "Take a bite",
        Image: FirstImage,
        subHeading: "Join us in telegram & jump in."
    },
    {
        Title: "sink your teeth in",
        Image: SecondImage,
        subHeading: "Complete daily Shark Bites (tasks) and boost your score."
    },
    {
        Title: "BITE BIG, WIN BIGGER",
        Image: ThirdImage,
        subHeading: "Refer friends, top the leader board, and claim $500!"
    }
]

const MemoEndSharkSection = () => {
    return (
        <section className="relative pt-0 2xl:pt-[5rem]">
            <figure className="">
                <section className="bg-black">
                    <Image
                        src={`https://assets.hipalz.com/SHARK%20bg%20(1).gif`}
                        alt="EndShark"
                        width={1920}
                        unoptimized={true}
                        height={1080}
                        className="object-cover h-[60rem] w-[100dvw] opacity-50 md:h-[60rem] lg:h-[30rem] xl:h-[38rem] 2xl:h-[60rem] max-h-auto lg:object-fill "
                    />
                </section>

                <section className="absolute inset-x-6 inset-y-[10%]  md:gap-0 top-0 flex flex-col lg:flex-row justify-between items-center z-40">
                    <h3

                        className="text-2xl w-[80%] pt-6 lg:w-[50%] xl:w-[35%] 2xl:w-[35%]  md:text-[2.5rem] lg:text-[2.5rem] xl:text-[3rem] 2xl:text-[5.5rem] leading-9 md:leading-[3.25rem] 2xl:leading-[5rem] text-white text-center  px-4"
                    >
                        GRWB: Grow Your Bucks – Win $500!
                    </h3>
                    <section
                        className="flex justify-end flex-col lg:flex-row items-center mt-12 md:mt-0 lg:mt-0 space-y-12 md:space-y-12 lg:space-y-0  lg:scale-100"
                    >
                        {
                            mapArr.map((item, index) => (
                                <section
                                    key={index}
                                    className="flex flex-col items-center text-white w-full lg:w-[50%] xl:w-[30%] 2xl:w-[35%] md:px-4"
                                >
                                    <Image
                                        src={item.Image}
                                        alt="FirstImage"
                                        width={116}
                                        height={116}
                                        className="mb-2"
                                    />
                                    <h4 className="text-lg md:text-2xl lg:text-base xl:text-xl 2xl:text-2xl font-semibold mt-4 uppercase">
                                        {item.Title}
                                    </h4>
                                    <p className="text-base md:text-xl mx-9 lg:mx-0 lg:text-sm xl:text-lg 2xl:text-xl text-center opacity-80 mt-2">
                                        {item.subHeading}
                                    </p>
                                </section>
                            ))
                        }
                    </section>
                </section>
            </figure>


        </section>
    )
}

const EndSharkSection = memo(MemoEndSharkSection)
export default EndSharkSection