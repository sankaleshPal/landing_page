"use client";
import Image from 'next/image'
import Trump from "@/assets/newsPaper.png"
import Case from "@/assets/bottomEndSection/case.png"
import { memo } from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTelegramPlane, FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6';

const MemoEmailSection = () => {
    return (
        <section className="relative z-0 mx-2 md:mx-12 rounded-2xl 2xl:-mt-[10rem] bg-red-500 overflow-hidden lg:mt-0">
            <Image
                src={Trump}
                alt="Trump"
                width={1920}
                height={1080}
                className="object-cover md:object-left-top object-center h-[50rem] rounded-2xl w-full md:h-[22.5rem] lg:h-[30rem] xl:h-[30rem] 2xl:h-[30rem] filter contrast-125 max-h-auto mix-blend-multiply"
            />

            <section className="absolute inset-0 flex flex-col md:flex-row md:justify-between justify-evenly items-center 2xl:mr-[2rem] ">
                <figure className=' h-30rem'>
                    <Image width={480} height={480} src={Case} alt="case" className="lg:flex-2" />
                </figure>
                <article
                    style={{
                        textShadow: '3px 3px 5px #000',
                    }}
                    className="text-white text-2xl 2xl:text-[3.52rem] w-full px-6 2xl:leading-[4rem] text-center md:text-right italic pb-[5rem] lg:flex-1"
                >
                    <header>
                        Join the fellow Shivers and
                    </header>
                    <p>
                        Make Waves!
                    </p>
                    <input
                        type="email"
                        className="w-full bg-white text-black text-base rounded-full px-6 py-3 2xl:py-4 max-w-[30rem] mt-4"
                        placeholder="Your Email "
                    />
                    <br />
                    <button className="px-4 py-2 md:py-3 bg-[#01016F] text-xl w-full md:w-[8rem] rounded-full mt-4">
                        Join
                    </button>
                </article>
            </section>

            <div className="absolute bottom-[3.5rem] md:bottom-8 transform left-1/2 -translate-x-1/2 -translate-y-1/2  md:left-auto md:-right-[1rem] flex space-x-4 text-white">
                <a href="https://www.facebook.com/greatrwb/" target="_blank" rel="noopener noreferrer">
                    <FaFacebookF className="w-6 h-6 hover:text-gray-300" />
                </a>
                <a href="https://x.com/Greatrwb" target="_blank" rel="noopener noreferrer">
                    <FaXTwitter className="w-6 h-6 hover:text-gray-300" />
                </a>
                <a href="https://www.instagram.com/greatrwb/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="w-6 h-6 hover:text-gray-300" />
                </a>

                <a href="https://www.youtube.com/@greatrwb" target="_blank" rel="noopener noreferrer">
                    <FaYoutube className="w-6 h-6 hover:text-gray-300" />
                </a>

                <a href="https://t.me/greatrwbshivers/1" target="_blank" rel="noopener noreferrer">
                    <FaTelegramPlane className="w-6 h-6 hover:text-gray-300" />
                </a>
            </div>

            <center className="transform text-xs md:text-base left-1/2 absolute w-full bottom-4 md:bottom-0 text-white -translate-x-1/2 -translate-y-1/2">
                © 2024 GreatRWB. All rights reserved. Privacy Policy
            </center>
        </section>
    )
}

const EmailSection = memo(MemoEmailSection)
export default EmailSection
