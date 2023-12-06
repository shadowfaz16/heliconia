'use client'
import React from 'react'
import aboutus from "../../assets/static/aboutus.png"
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion';

const About = () => {

    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0.1, 0.25], [0, 1]);
    const scale = useTransform(scrollYProgress, [0.1, 0.3], [0.8, 1]);


    return (
        <motion.div style={{ opacity, scale }} id="about" className='bg-[#063827] text-[#E6E3D6] rounded-md flex flex-col-reverse md:flex-row items-center min-h-[80dvh] overflow-hidden my-24 md:h-[80dvh]'>
            <div className='p-6 space-y-4 md:w-3/5 md:space-y-8 md:p-16'>
                <h3 className='uppercase text-3xl font-tobias font-light'>
                    About us
                </h3>
                <div className='font-neue space-y-8'>
                    <p>
                        A patron of the arts and art collector, Venezuelan-born <span className='underline'>Elsa Maldonado</span> hails from a long line of established collectors and art philanthropists in her family. Elsa has always had a sensibility when it comes to contemporary art. Her collection focuses on primarily installations with a geometric aspect. Themes common in her collection are color theory, societal critique, and spirituality. After recently moving to the Dominican Republic, Elsa and Nicole saw an opportunity to create a commercial curatorial endeavour bridging the gap between other markets such as the United States, Europe, Africa, and Latin America.
                    </p>
                    <p>
                        Born in Venezuela and of Bulgarian descent, <span className='underline'>Nicole Bainov</span> is an art professional with nearly 10 years of experience. After completing her Master’s degree in Art at Sotheby’s, she worked in various art institutions and blue-chip contemporary galleries in London. Nicole began growing her collection in her early twenties, with a focus on young women artists—motifs such as self exploration and identity are seen throughout her collection. Aside from building her own collection, Nicole is also a curator, alongside her partner Elsa, seeking to support and expand the Latin American art industry both locally and internationally.

                    </p>
                </div>
            </div>
            <div className='md:w-2/5 flex justify-center'>
                <Image src={aboutus} width={350} height={350} alt='logo' className='' />
            </div>

        </motion.div>
    )
}

export default About