'use client'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import logo from '../../public/logo.svg'
import { AnimatePresence, motion } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'; // Import React Icons for the menu and close icons

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsMenuOpen(false);
                setIsMobile(false);
            } else {
                setIsMobile(true);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            const offsetTop = section.getBoundingClientRect().top + window.scrollY - 100;
            window.scrollTo({ top: offsetTop, behavior: 'smooth' });

        }
    }

    const menuVariants = {
        open: { opacity: 1, y: 0 },
        closed: { opacity: 0, y: '-120%' },
    };


    return (
        <>
            <div className='sticky top-0 flex items-center justify-between w-full p-4 md:px-8  z-40 bg-[#E6E3D6]'>
                <div className='hidden md:flex'>
                    <ul className='flex space-x-8 text-[#03110B]'>
                        <li className='hover:cursor-pointer font-neue hover:underline hover:underline-offset-8' onClick={() => scrollToSection('about')}>About</li>
                        <li className='hover:cursor-pointer font-neue hover:underline hover:underline-offset-8' onClick={() => scrollToSection('artists')}>Artists</li>
                    </ul>
                </div>

                {/* Logo */}
                <Image src={logo} width={220} height={220} alt='logo' className='w-36 md:w-52 hover:cursor-pointer' onClick={() => scrollToSection('hero')} />

                <div className='hidden md:flex'>
                    <ul className='flex space-x-8 text-[#03110B]'>
                        <li className='hover:cursor-pointer font-neue hover:underline hover:underline-offset-8' onClick={() => scrollToSection('press')}>Press</li>
                        <li className='hover:cursor-pointer font-neue hover:underline hover:underline-offset-8' onClick={() => scrollToSection('contact')}>Contact</li>
                    </ul>
                </div>

                {/* Hamburger Menu Icon (Mobile) */}
                <div className='md:hidden cursor-pointer z-50' onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <FiX size={30} /> : <FiMenu size={25} />}
                </div>

                {/* Mobile Menu */}
                <motion.div
                    animate={isMenuOpen ? 'open' : 'closed'}
                    variants={menuVariants}
                    transition={{ duration: 0.3 }}
                    className='absolute top-12 right-0 p-4 w-full shadow-lg md:hidden bg-[#E6E3D6]'
                >
                    <ul className='flex flex-col space-y-8'>
                        <li className='hover:cursor-pointer ' onClick={() => scrollToSection('about')}>About</li>
                        <li className='hover:cursor-pointer' onClick={() => scrollToSection('artists')}>Artists</li>
                        <li className='hover:cursor-pointer' onClick={() => scrollToSection('press')}>Press</li>
                        <li className='hover:cursor-pointer' onClick={() => scrollToSection('contact')}>Contact</li>
                    </ul>
                </motion.div>
            </div>
        </>

    )
}

export default Navbar