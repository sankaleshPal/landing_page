"use client";
import React, { memo } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const items = ["Home","Whitepaper", "Contribute Now", "Sealed (Coming Soon)"];
const MemoNavbarItems = () => {
    const router = useRouter();
     
    const navigateTo = (item: string) => {
        if(item === 'Home'){
            router.push('/')
        }
        if (item === 'Whitepaper') {
            router.push('https://greatrwbs-organization.gitbook.io/grwb-whitepaper');
        }
        if(item === 'Contribute Now'){
            router.push('/grwb')
        }
    }

    const navList = {
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.2,
                staggerChildren: 0.07
            }
        },
        hidden: {
            opacity: 0,
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1
            }
        }
    };

    const navItem = {
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                y: { stiffness: 1000, velocity: -100 }
            }
        },
        hidden: {
            y: 50,
            opacity: 0,
            transition: {
                y: { stiffness: 1000, velocity: -100 }
            }
        }
    };

    return (
        <motion.div
            className="flex flex-col lg:flex-row lg:items-center justify-evenly lg:space-x-12 lg:mt-[2rem] lg:ml-[7rem] opacity-60"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={navList}
        >
            {items.map((item) => (
                <motion.div onClick={() => navigateTo(item)} className="text-white py-2 text-xl opacity-100 lg:!opacity-70 cursor-pointer" variants={navItem} key={item}>
                    <p>{item}</p>
                </motion.div>
            ))}
        </motion.div>
    );
};

const NavbarItems = memo(MemoNavbarItems);
export default NavbarItems;
