import Image from 'next/image'
import React from 'react'
import ritmoSocial from '../../assets/press/ritmo-social.png'
import voguePoland from '../../assets/press/vogue-poland.png'
import Link from 'next/link'

const Press = () => {
    return (
        <div id="press" className='my-24 w-full'>
            <div className='flex items-center justify-between w-full border-b border-[#3C5A50] pb-2 mb-8'>
                <h3 className='uppercase font-neue text-xl'>
                    Press
                </h3>
            </div>
            <div className='flex flex-col md:flex-row justify-between w-full gap-8 text-center md:text-left'>
                <Link target='_blank' href='https://ritmosocial.com/nicole-y-elsa-promoviendo-las-artes/' className='flex flex-col md:flex-row gap-4 md:gap-6 w-full md:w-1/2 items-center justify-center md:items-start'>
                    <Image src={ritmoSocial} width={200} height={300} alt='logo' className='rounded-md w-72 h-72 hover:cursor-pointer' />
                    <h5 className='uppercase font-tobias font-light text-xl text-[#03110B]'>
                        Ritmo Social:<br />
                        Nicole Bainov de Varela y Elsa Maldonado Buitron
                    </h5>
                </Link>
                <Link target='_blank' href='https://nftstorage.link/ipfs/bafybeiaqpyvsx4ukctmx5hr2bnzn7g3nr5u62yyd5xu7qrfcl2edfwlkoa' className='flex flex-col md:flex-row gap-4 md:gap-6 w-full md:w-1/2 items-center justify-center md:items-start'>
                    <Image src={voguePoland} width={200} height={300} alt='logo' className='rounded-md w-72 h-72 hover:cursor-pointer' />
                    <h5 className='uppercase font-tobias font-light text-xl text-[#03110B]'>
                        Vogue Poland:<br /> OPTYMISTKI
                    </h5>
                </Link>
            </div>
        </div>
    )
}

export default Press