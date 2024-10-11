"use client";
import Image from 'next/image'
import { memo } from 'react';
import GRWBLOGO from '@/assets/svg/GRWB_Logo_Title.svg'
import Link from 'next/link';

const MemoNavbar = () => {

    return (
        <header className="bg-[#14093E] md:h-[5.5rem] flex items-center w-full relative">
            <picture className='md:ml-6 md:h-full scale-50 md:scale-100 md:flex md:items-center'>
                <Image src={GRWBLOGO} alt="logo" />
            </picture>
            <button
                type='button'
                className="on_active_bounce ml-auto text-white"
            >
                <Link href="https://greatrwbs-organization.gitbook.io/grwb-whitepaper" target='_blank'>
                    <h1 className="py-2 px-4 lg:text-2xl">White paper</h1>
                </Link>
            </button>
        </header>
    )
}

const Navbar = memo(MemoNavbar)
export default Navbar