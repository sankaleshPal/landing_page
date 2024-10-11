"use client";
import React, { memo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavbarItems from "./navbarItmes";
import Logo from "@/assets/grwbLogo.png"
import Image from "next/image";

const MemoNavbar = () => {
    const [isToggled, setToggle] = useState(false);

    const navContainer = {
        visible: {
            opacity: 1,
            transition: {
                duration: 0.3
            }
        },
        hidden: {
            opacity: 0,
            transition: {
                duration: 0.3
            }
        }
    };

    return (
        <header className="flex justify-between pt-4 lg:justify-start mx-6 relative lg:mx-[7rem]">
            <h1 className="absolute left-1/2 lg:left-12 lg:top-[3rem] transform -translate-x-1/2 -translate-y-1/4 top-4 text-white">
                
                <Image className="scale-50 lg:scale-100" src={Logo} alt="Logo" width={190} height={80} />
            </h1>
            <nav className="nav-items-desktop ml-[6rem]">
                <NavbarItems />
            </nav>
            <button
                className="absolute right-0 top-4 text-2xl text-white lg:hidden"
                onClick={() => setToggle(!isToggled)}
                aria-label="Toggle menu"
            >
                {isToggled ? "✕" : "☰"}
            </button>
            <AnimatePresence>
                {isToggled && (
                    <motion.nav
                        className="nav-items-mobile"
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={navContainer}
                    >
                        <NavbarItems />
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
};

const Navbar = memo(MemoNavbar);

export default Navbar;
