import React from 'react'
import footerlogo from '../assets/static/footerlogo.png'
import footerflower from '../assets/static/footerflower.svg'
import flowervector from '../assets/static/flowervector.svg'
import hoja from '../assets/static/hoja.png'
import Image from 'next/image'

const Footer = () => {
    return (
        <div id="contact" className='bg-[#FFA400] text-[#03110B] min-h-[35vh] md:h-[60vh] flex flex-col items-center w-full md:flex-row md:pl-8 pt-16 md:pt-0 overflow-hidden gap-8 md:gap-0'>
            <div className='flex flex-col md:w-1/3'>
                <Image src={footerlogo} width={300} height={300} alt='logo' className='' />
                <div className='mt-8 flex flex-col font-tobias font-light'>
                    <a className='underline text-xl font-light' href="mailto:elsa@heliconiaprojects.com" target='_blank'>
                        elsa@heliconiaprojects.com
                    </a>
                    <a className='underline text-xl font-light' href="mailto:nicole@heliconiaprojects.com" target='_blank'>
                        nicole@heliconiaprojects.com
                    </a>
                </div>
                <a className='mt-8 text-lg font-neue' href="https://www.instagram.com/heliconiaprojects/" target='_blank'>
                    INSTAGRAM
                </a>
            </div>
            <div className='md:w-2/3 flex justify-end w-full overflow-hidden'>
                <Image src={flowervector} width={1000} height={1000} alt='logo' className='w-72 md:w-[90%]' />
            </div>
        </div>
    )
}

export default Footer