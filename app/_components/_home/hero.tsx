'use client'
import React, { useRef } from 'react';
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
import logos from "../../assets/static/logos.svg"


const Hero = () => {


    // const handleSwiperClick = (swiper: { slideNext: () => void; }) => {
    //     swiper.slideNext();
    // };

    return (
        <div className="w-full py-2">
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                spaceBetween={30}
                slidesPerView={1}
                // navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000 }}
                loop={true}
                effect="fade"
                className="h-[85dvh] w-full rounded-md"
            // onClick={({ swiper }) => handleSwiperClick(swiper)}

            >
                <SwiperSlide className="relative flex flex-col justify-end items-center bg-cover bg-center bg-red-400">

                    <Image src={hero1} width={2000} height={1180} alt='logo' className='w-full absolute h-full' />
                    <div className='absolute bottom-12 left-0 w-full h-full flex flex-col justify-end items-center text-[#E6E3D6] space-y-4 px-6 md:px-0'>
                        <Image src={logos} width={200} height={200} alt='logo' className='' />
                        <div className='max-w-4xl mx-auto text-center'>
                            <p className='md:text-2xl font-neue font-light uppercase'>
                                In the realm of Greek mythology, evoking art and beauty, the plant ‘Heliconia’ was named after the illustrious Mount Helicon, the home of Apollo and the Muses.
                            </p>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center bg-cover bg-center bg-blue-400">

                    <Image src={hero2} width={2000} height={1180} alt='logo' className='w-full absolute h-full' />
                    <div className='absolute bottom-12 left-0 w-full h-full flex flex-col justify-end items-center text-[#E6E3D6] space-y-4 px-6 md:px-0'>
                        <Image src={logos} width={200} height={200} alt='logo' className='' />
                        <div className='max-w-4xl mx-auto text-center'>
                            <p className='md:text-2xl font-neue font-light uppercase'>
                                Heliconia seeks to break the mold of the traditional contemporary ‘art gallery’. Heliconia is an art world oasis — bridging the gap between the Caribbean and the rest of the world.
                            </p>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center bg-cover bg-center bg-green-400">

                    <Image src={hero3} width={2000} height={1180} alt='logo' className='w-full absolute h-full' />
                    <div className='absolute bottom-12 left-0 w-full h-full flex flex-col justify-end items-center text-[#E6E3D6] space-y-4 px-6 md:px-0'>
                        <Image src={logos} width={200} height={200} alt='logo' className='' />
                        <div className='max-w-4xl mx-auto text-center'>
                            <p className='md:text-2xl font-neue font-light uppercase'>
                                Featuring exhibitions, presentations, as well as discussions and symposiums, Heliconia will serve as an ecosystem connecting artists, collectors, and art professionals alike.
                            </p>
                        </div>
                    </div>

                </SwiperSlide>
            </Swiper>
        </div >
    )
}

export default Hero;
