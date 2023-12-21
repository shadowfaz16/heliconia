'use client'
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide, SwiperRef, SwiperProps } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/effect-fade";
import hero1 from "../../assets/bg/hero1.png"
import hero2 from "../../assets/bg/hero2.png"
import hero3 from "../../assets/bg/hero3.png"
import Image from 'next/image';
import heliconia from "../../assets/static/heliconia.svg"
import vectorlogo from "../../assets/static/vectorlogo.svg"
import { motion, useScroll, useTransform } from 'framer-motion';


const Hero = () => {
    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [-0.1, 0.03], [2.3, 1]);
    const yPos = useTransform(scrollYProgress, [0, 0.03], ['0vh', '10dvh']); // Adjust these values as needed
    const zIndex = useTransform(scrollYProgress, [0, 1.7], [40, 10]); // Adjust zIndex based on scroll
    const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]); // Opacity to fade out the text

    const h1scale = useTransform(scrollYProgress, [0, 0.03], [1, 0.15]); // Scale for the 'Heliconia' text
    const h1yPos = useTransform(scrollYProgress, [0, 0.03], ['0vh', '-19vh']); // Vertical position

    const h1opacity = useTransform(scrollYProgress, [0, 0.03], [1, 0]); // Opacity to fade out the text

    const textopacity = useTransform(scrollYProgress, [0, .03], [1, 0]); // Opacity to fade out the text

    const textColor = useTransform(scrollYProgress, [0, 0.02], ['#E6E3D6', '#000000']);


    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const updateHasScrolled = (value: number) => {
            if (value > 0.03 && !hasScrolled) { // Adjust this threshold as needed
                setHasScrolled(true);
            }
        };

        const unsubscribe = scrollYProgress.on('change', updateHasScrolled);

        return () => unsubscribe();
    }, [hasScrolled, scrollYProgress]);



    return (
        <>
            <motion.div
                style={{ y: h1yPos }}
                className="font-tobias font-light text-4xl z-50 absolute top-64 w-full justify-between px-8 hidden md:flex"
            >
                <motion.ul
                    style={{ color: textColor, opacity: textopacity }}
                    className='flex text-base font-neue space-x-8'>
                    <li>About</li>
                    <li>Artists</li>
                </motion.ul>
                <motion.ul
                    style={{ color: textColor, opacity: textopacity }}
                    className='flex text-base font-neue space-x-8'>
                    <li>Press</li>
                    <li>Contact</li>
                </motion.ul>
            </motion.div>
            <motion.div id='hero' style={{ scale, zIndex, y: yPos, color: textColor }} className="w-full mb-20 ">
                <motion.h1
                    style={{ scale: h1scale, y: h1yPos, opacity: h1opacity }}
                    className="font-tobias font-light uppercase text-center text-4xl absolute w-full flex justify-center top-24 md:text-[14dvw] z-50"
                >
                    Heliconia
                </motion.h1>


                <Swiper
                    modules={[Navigation, Pagination, Autoplay, EffectFade]}
                    spaceBetween={30}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000 }}
                    loop={true}
                    effect="fade"
                    className="h-[80dvh] w-full rounded-md"
                >
                    <SwiperSlide className="relative flex flex-col justify-end items-center bg-cover bg-center bg-red-400">

                        <Image src={hero1} layout="fill" objectFit="cover" objectPosition="center" alt='logo' className='w-full absolute h-full' />
                        <div className='absolute bottom-12 left-0 w-full h-full flex flex-col justify-end items-center text-[#E6E3D6] space-y-2 px-6 md:px-0'>
                            <Image src={vectorlogo} width={60} height={60} alt='logo' className='' />
                            <Image src={heliconia} width={220} height={60} alt='logo' className='' />
                            <div className='max-w-4xl mx-auto text-center'>
                                <p className='md:text-2xl font-neue font-light uppercase'>
                                    In the realm of Greek mythology, evoking art and beauty, the plant ‘Heliconia’ was named after the illustrious Mount Helicon, the home of Apollo and the Muses.
                                </p>
                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide className="flex justify-center items-center bg-cover bg-center bg-blue-400">

                        <Image src={hero2} layout="fill" objectFit="cover" objectPosition="center" alt='logo' className='w-full absolute h-full' />
                        <div className='absolute bottom-12 left-0 w-full h-full flex flex-col justify-end items-center text-[#E6E3D6] space-y-2 px-6 md:px-0'>
                            <Image src={vectorlogo} width={60} height={60} alt='logo' className='' />
                            <Image src={heliconia} width={220} height={60} alt='logo' className='' />
                            <div className='max-w-4xl mx-auto text-center'>
                                <p className='md:text-2xl font-neue font-light uppercase'>
                                    Heliconia seeks to break the mold of the traditional contemporary ‘art gallery’. Heliconia is an art world oasis — bridging the gap between the Caribbean and the rest of the world.
                                </p>
                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide className="flex justify-center items-center bg-cover bg-center bg-green-400">

                        <Image src={hero3} layout="fill" objectFit="cover" objectPosition="center" alt='logo' className='w-full absolute h-full' />
                        <div className='absolute bottom-12 left-0 w-full h-full flex flex-col justify-end items-center text-[#E6E3D6] space-y-2 px-6 md:px-0'>
                            <Image src={vectorlogo} width={60} height={60} alt='logo' className='' />
                            <Image src={heliconia} width={220} height={60} alt='logo' className='' />
                            <div className='max-w-4xl mx-auto text-center'>
                                <p className='md:text-2xl font-neue font-light uppercase'>
                                    Featuring exhibitions, presentations, as well as discussions and symposiums, Heliconia will serve as an ecosystem connecting artists, collectors, and art professionals alike.
                                </p>
                            </div>
                        </div>

                    </SwiperSlide>
                </Swiper>
            </motion.div >
        </>
    )
}

export default Hero;
