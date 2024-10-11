import { memo } from "react"
import Image from "next/image";
import News from "@/assets/newsPaper.png"
import CoinGif from "@/assets/gif/coingif.gif"
import lines from "@/assets/lines.png"

const MemoMidsection = () => {
    return (
        <section className="relative ">
            <figure className="absolute hidden overflow-hidden md:block right-0 -bottom-[0]  z-10">
                <Image
                    src={lines}
                    alt="lines"
                    className="object-cover h-full w-full lg:object-fill mt-[5rem]"
                />
            </figure>
            <figure className="bg-red-500">
                <Image
                    src={News}
                    className="object-cover object-right-top h-[650px] md:h-auto md:object-contain -mt-[4.125rem]  filter contrast-125 max-h-auto mix-blend-multiply"
                    alt="news"

                />
                <section className="absolute top-6 z-40 text-white flex flex-col-reverse md:flex-row justify-between items-center pt-6 md:pt-0 w-[100dvw] md:pl-[10dvw] md:pr-[5dvw]">
                    <Image src={CoinGif} alt="CoinGif" className="flex-1 w-full md:max-w-[15rem] lg:max-w-[20rem] xl:max-w-[25rem] max-w-[25rem] 2xl:max-w-[35rem] rotate-horizontal" />
                    <section className="flex-1  text-center md:text-right mt-[1rem] mb-[2rem] md:mt-0 md:mb-0">
                        <h3 style={{
                            textShadow: '3px 3px 5px #000'
                        }} className="text-4xl md:text-[2rem] lg:text-[2.5rem] xl:text-[3rem] 2xl:text-[5.5rem] leading-9 md:leading-[3.25rem] 2xl:leading-[5rem] ">
                            GRWB Coin:
                            <br />
                            The Future of Politif
                        </h3>

                        <p style={{
                            textShadow: '3px 3px 5px #000'
                        }} className="text-sm opacity-70 md:text-base mt-2 lg:text-xl">
                            A meme able utility coin where fun and
                            <br />
                            function intertwine to make real change in politics
                        </p>
                    </section>
                </section>
            </figure>



        </section>
    )
}

const Midsection = memo(MemoMidsection)
export default Midsection