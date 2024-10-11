import Image from "next/image"
import { memo } from "react"

const MemoMidSharkSection = () => {
    return (
        <section className="relative">
            <figure className="mix-blend-screen">
                <Image
                    src={`https://assets.hipalz.com/midShark-1.gif`}
                    width={1920}
                    height={1080}
                    unoptimized={true}
                    alt="MidShark"
                    className="object-cover h-[28rem] w-[100dvw]  md:h-[22.5rem] lg:h-[30rem] xl:h-[38rem] 2xl:h-[53rem] max-h-auto lg:object-fill filter contrast-125 brightness-130"
                />
            </figure>
        </section>
    )
}

const MidSharkSection = memo(MemoMidSharkSection)
export default MidSharkSection