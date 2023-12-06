import Image from 'next/image'
import React from 'react'
import ritmoSocial from '../../assets/press/ritmo-social.png'
import voguePoland from '../../assets/press/vogue-poland.png'

const Press = () => {
    return (
        <div id="press" className='my-24 w-full'>
            <div className='flex items-center justify-between w-full border-b border-[#D9D9D9] pb-4 mb-8'>
                <h3 className='uppercase'>
                    Press
                </h3>
            </div>
            <div className='flex flex-col md:flex-row justify-between w-full gap-8'>
                <div className='flex flex-col md:flex-row gap-4 md:gap-6 w-full md:w-1/2'>
                    {/* random image */}
                    <Image src={ritmoSocial} width={200} height={300} alt='logo' className=' rounded-md w-72 h-72' />
                    <h5 className='uppercase'>
                        Ritmo Social:<br />
                        Nicole Bainov de Varela y Elsa Maldonado Buitron
                    </h5>
                </div>
                <div className='flex flex-col md:flex-row gap-4 md:gap-6 w-full md:w-1/2'>
                    {/* random image */}
                    <Image src={voguePoland} width={200} height={300} alt='logo' className=' rounded-md w-72 h-72' />
                    <h5 className='uppercase'>
                        Vogue Poland:<br /> OPTYMISTKI
                    </h5>
                </div>
            </div>
        </div>
    )
}

export default Press