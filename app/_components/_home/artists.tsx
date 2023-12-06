import React from 'react'

const Artist = ({ name }: { name: string }) => {
    return (
        <>
            <div className='group w-full min-h-96 h-[60dvh] hover:bg-gray-500 p-16 flex items-center justify-center transition-all duration-300 rounded-md hover:cursor-pointer'>
                <h4 className='group-hover:text-white transition-all delay-75 duration-500 text-center text-[4em] uppercase font-neue leading-tight'>{name}</h4>
            </div>

        </>
    )
}

const Artists = () => {
    return (
        <>
            <div id="artists" className='flex items-center justify-between w-full border-b border-[#D9D9D9] pb-4 overflow-x-scroll hide-scrollbar'>
                <h3 className='uppercase'>
                    Artists
                </h3>
                {/* right and left arrows */}
                <div className='flex'>
                    <div className='flex'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black hover:text-gray-500 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="{2}" d="M15 19l-7-7 7-7" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black hover:text-gray-500 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="{2}" d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className='flex flex-col md:flex-row items-center gap-8 w-full mt-8 overflow-x-scroll hide-scrollbar'>
                {/* i need 3 boxes with huge text in the center, each one should open a modal */}
                <Artist name='fernando varela' />
                <Artist name='fernando varela' />
                <Artist name='fernando varela' />
                <Artist name='fernando varela' />
            </div>
        </>
    )
}

export default Artists