'use client';
import React, { memo } from "react";
import herobg from "@/assets/img/herosectionbg.jpg";
import Image from "next/image";
import coinzbox from "@/assets/img/coinBox.png";
import { FaEnvelope, FaFacebook, FaLinkedin } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { BsTelegram } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import Link from 'next/link'
import { useRouter } from "next/navigation";

const MemoFooter = () => {

    const router = useRouter();
    const redirectToPrivacyPolicy = () =>{
        router.push('/privacy')
    }   

    return (
        <>
            <main className='h-full px-12 py-4 relative' style={{
                backgroundImage: `url(${herobg?.src})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}>
                <section className='lg:flex lg:justify-around lg:items-center'>
                    <section>
                        <Image src={coinzbox} height={600} width={600} alt="coinzbox" className='lg:-ml-24' />
                    </section>
                    <section className='text-white lg:justify-self-end text-center lg:text-end space-y-4'>
                        <article className='space-y-4 flex flex-col justify-center'>
                            <h1 className='2xl:text-5xl text-base'>Have a query?</h1>
                            <p className='2xl:text-2xl text-base'>Shoot up your question below</p>
                            <Link href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=stanton@greatrwb.com" target="_blank">
                                <button type="button" className='bg-[#372BE3] px-6 py-2 lg:float-right rounded-full flex items-center justify-center'>
                                    <span className='text-2xl mr-4'>
                                        <FaEnvelope />
                                    </span>stanton@greatrwb.com
                                </button>
                            </Link>
                        </article>
                        <br/>
                        <article className='-mt-10 flex items-center lg:gap-10 gap-4 justify-center lg:justify-end'>
                            <Link href="https://www.facebook.com/greatrwb" target="_blank" className="on_active_bounce">
                                <FaFacebook className='scale-150 lg:h-8 lg:w-8'/>
                            </Link>
                            <Link href="https://www.instagram.com/greatrwb/" target="_blank" className="on_active_bounce">
                                <IoLogoInstagram className='scale-150 lg:h-8 lg:w-8 bg-white rounded-full' color='black'/>
                            </Link>
                            <Link href="https://t.me/greatrwbsol" target="_blank" className="on_active_bounce">
                                <BsTelegram className='scale-150 lg:h-8 lg:w-8'/>
                            </Link>
                            <Link href="https://www.linkedin.com/company/greatrwb/" target="_blank" className="on_active_bounce">
                                <FaLinkedin className='scale-150 lg:h-8 lg:w-8 rounded-full' color='black' fill='white'/>
                            </Link>
                            <Link href="https://x.com/Greatrwb" target="_blank" className="on_active_bounce">
                                <FaXTwitter className='scale-150 lg:h-8 lg:w-8 rounded-full' />
                            </Link>
                        </article>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                    </section>
                </section>
                <center  onClick={redirectToPrivacyPolicy} onClick={redirectToPrivacyPolicy} className='text-xs absolute transform -translate-x-1/2 translate-y-1/2 left-1/2 bottom-10 text-white'>
                    <button type="button">© 2024 GreatRWB. All rights reserved. Privacy Policy</button>
                </center>
            </main>
        </>
    )
}

const Footer = memo(MemoFooter);
export default Footer;
