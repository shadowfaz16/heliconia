'use client'
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion';

interface ArtistType {
    name: string;
    image: string;
    bgColor: string;
    bgImage: string;
    column1Text: string;
    column2Text: string;
}

const Modal = ({ show, onClose, artist }: { show: boolean, artist?: ArtistType, onClose: () => void }) => {

    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };


        document.addEventListener('keydown', handleEsc);

        return () => {
            document.removeEventListener('keydown', handleEsc);
        };
    }, [onClose]);

    const formatTextWithLineBreak = (text: string) => {
        return text.split('\n').map((line, index) => (
            <React.Fragment key={index}>
                <p className='leading-5'>
                    {line}
                </p>
            </React.Fragment>
        ));
    };

    const formatTextWithLineBreaks = (text: string) => {
        return text.split('\n').map((line, index) => (
            <React.Fragment key={index}>
                {line}
                <br />
                <br />
            </React.Fragment>
        ));
    };


    if (!show || !artist) {
        return null;
    }

    const onBackgroundClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.currentTarget === event.target) {
            onClose();
        }
    };


    return (

        <AnimatePresence mode='wait'>
            {
                show && artist && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={onBackgroundClick}
                        tabIndex={-1}
                        className='fixed inset-0 bg-black bg-opacity-50 flex justify-center z-50'>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2, delay: 0.2 }}
                            style={{ backgroundColor: artist.bgColor }}
                            className={`w-[85vw] h-[87vh] overflow-y-scroll p-6 md:px-6 md:pt-16 md:pb-12 rounded z-50 mt-10`}>
                            <span className='mb-2 text-2xl font-light font-tobias text-[#E6E3D6]'>ARTIST</span>
                            <h2 className='text-3xl mb-2 font-neue text-[#E6E3D6] font-light uppercase'>{artist.name}</h2>
                            <img width={1000} height={1000} src={artist.image} alt={artist.name} className='w-full' />
                            <div className='flex flex-col md:flex-row w-full mt-4 md:mt-12 text-[#E6E3D6] gap-8'>
                                <div className='md:w-1/3'>
                                    <hr className='my-2 w-full' />
                                    <text className='font-tobias font-thin text-[#E6E3D6] uppercase'>Work Details</text>
                                    <p className='font-neue font-light pt-2 text-sm md:text-base'>{formatTextWithLineBreak(artist.column1Text)}</p>
                                </div>
                                <div className='md:w-2/3 text-sm md:text-base'>
                                    {formatTextWithLineBreaks(artist.column2Text)}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )
            }
        </AnimatePresence>

    );
};

const Artist = ({ artist, onClick }: { artist: ArtistType, onClick: () => void }) => {
    const [hover, setHover] = useState(false);

    return (
        <div onClick={onClick}
            className={`group min-h-96 h-60 w md:w-[30em] md:h-[60dvh] p-8 flex items-center justify-center transition-all duration-300 rounded-md hover:cursor-pointer ${hover ? 'hovered' : ''}`}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <div className="bg-image rounded-lg" style={{ backgroundImage: `url(${artist.bgImage})` }}></div>
            <h4 className='text-center text-3xl md:text-[5em] uppercase leading-tight font-tobias font-light group-hover:text-[#E6E3D6] transition-all delay-75 duration-500 z-10'>
                {artist.name}
            </h4>
        </div>
    )
};


const Artists = () => {
    const [selectedArtist, setSelectedArtist] = useState<ArtistType | undefined>();


    const artists: ArtistType[] = [
        {
            name: 'Fernando Varela', image: "https://nftstorage.link/ipfs/bafkreicni5nwbauqtz6enh3dmov6e4cktd6geg6kch5r2ir4b4btgt574m", bgImage: "https://nftstorage.link/ipfs/bafkreida2rkzcx7okbwcoi56fiqrve64aj7lkfvrxlgwbijvoquzqwq2z4", bgColor: '#063827', column1Text: 'Fernando Varela, From the series “Form and Void” \n 2019 \n Stainless steel with blue electrostatic pigment\n 12 x 27 x 27 in.', column2Text: `Born in 1951 in Montevideo, Uruguay, Fernando Varela has been living and working in Santo Domingo, Dominican Republic since 1975. Varela is a versatile artist, passionate about philosophy and music - themes equally present in his practice. The Uruguayan artist's inspiration with the work of the spiritual master Bô Yin Ra (Joseph Anton Scheneiderfranken (1876-1943)) represents a significant part of his aesthetic orientation in his oeuvre - through the conformation of a personal and vital artistic language. Transcendence is another theme omnipresent in Varela's work; the representation of a relentless search for the 'perfect' composition, one that breaks the mold of time and place - partly inspired by some of the great names of expressionism like Rotkho, Pollock and de Kooning. \n Varela's work effortlessly creates a horizon that involves human, spirituality and aesthetic elements and their possibility of confluence. Through a demanding aesthetic process involving color theory and forms, Varela achieves a masterful and balanced oeuvre inspired by the sublime. \n Recent exhibitions include: 'Mundos: Los Transitos de Fernando Varela', Centro Leon, Santiago, Dominican Republic, 2022; 'P4LABRA NUM3RO CO10R', Lucy Garcia Gallery, Santo Domingo, Dominican Republic, 2022. His works have been exhibited in countries such as the United States, Germany, Denmark, Belgium, Spain, France, Greece, Canada, Mexico, and the Dominican Republic. Varela's work is also included in numerous institutions, such as the National Museum of Visual Arts in Montevideo, Uruguay; the Museum of Contemporary Art of Guayaquil, Ecuador; the Museum of Modern Art of Guatemala; Metropolitan Museum of Quito, Ecuador; and Museum of Contemporary Art of Puerto Rico.`
        },
        {
            name: 'Brittany Fanning', image: "https://nftstorage.link/ipfs/bafybeiftp7ykxaeh7d24caoh3fm2jhaymwudcu3gvvxvaazgm736mddeya", bgImage: "https://nftstorage.link/ipfs/bafybeielewed2nxtrkep7wjca7edvbt72ajglbapymfqqqe52p4edf3fc4", bgColor: '#6D0B33', column1Text: 'Brittany Fanning, Wild Daydream \n 2023 \n Acrylic on canvas \n 48 x 72 in.', column2Text: `Brittany Fannings(b.1991) artistic journey is deeply intertwined with the formative experiences of her upbringing in the Southeastern United States. Growing up amidst the constant presence of natural disasters and local wildlife, from alligators to hurricanes and forest fires, she internalized these elements, which continue to exert a profound influence on her creative expression to this very day. \n Having completed her university education in Georgia, Fanning embarked on a transformative chapter in her life, relocating to Korea.Over the span of seven years, she embraced the opportunity to immerse herself in the country's vibrant culture, traversing its diverse landscapes and urban enclaves. During her time in Seoul, she found inspiration in the essence of neighborhoods like Itaewon and Gyeongnidan, harnessing the dynamism of these locales to breathe life into her vibrant paintings of urban landscapes, garnering well-deserved recognition for her artistry. \n Currently based in Los Angeles, Fanning finds herself profoundly captivated by the ecological richness of Southern California.She delves into the local flora and fauna, meticulously photographing region- specific elements, ranging from the charm of aging art deco architecture to the allure of backyard swimming pools and tennis courts.These visual snapshots often form the bedrock of her compositions, which often portray relaxed human figures engaged in gatherings around lavishly adorned tables, while intriguingly juxtaposed with the subtle presence of predators or imminent natural calamities.In this captivating fusion, Fanning's art encapsulates the interplay between humanity's inherent connection with the environment and the lurking forces of uncertainty. \n Recent exhibitions include: “Getting Away With Murder,” The Lodge, Los Angeles(2023), City Escape, Monti8, Rome(2023), Only Until This Cigarette is Ended, Pictorum Gallery, London(2023).Dallas Art Fair, OTI(2023), Galleries Art Fair, Galerie BHAK, Seoul, (2023), “LA Woman,” Penske Projects + Phillips, LA(2023), “Excuse The Interruption,” OTI, LA(2023), “sexy Xmas VI”, The Lodge, LA(2022), “Highlight”, Cohle Gallery, Paris(2022), “Opening”, Graphite on Pink, Seoul(2021), “Spring in Bloom”, Seoul Auction, Seoul(2020)`
        },
        {
            name: 'Olamide Ogunade', image: "https://nftstorage.link/ipfs/bafybeidkbkae4oavetuzr7qve5xg2kurphwebj3cmj3euuzqp4kloy6wxa", bgImage: "https://nftstorage.link/ipfs/bafybeigt2tie5ey46l6e35vvkuj4mrodhwv64uqssyjgnzqd53ssq4zrbu", bgColor: '#A480EF', column1Text: 'Olamide Ogunade, Gentle Lady \n 2021 \n Charcoal and acrylic on canvas \n 36 x 36 in.', column2Text: 'Olamide Ogunade, a Nigerian artist (B.1996) currently based in Lagos, has nurtured a deep-seated passion for art since his childhood. His artistic journey has evolved over the years, shaped by dedicated training, extensive research, and continuous practice. Ogunades creative endeavors are influenced by his personal encounters and the broader experiences of the African society to which he belongs.\n Ogunade Olisco employs charcoal in a striking juxtaposition with a vibrant color palette, infusing an animated luminosity into the portrayal of the human form.Throughout his work, there is a constant and delicate handling of his subjects, endowing them with a graceful elegance that evokes strong emotions.By blending bold colors and distinctive prints, Nigerian artist Olamide Ogunade Olisco articulates a distinct West African identity on the canvas.Through his art, he initiates discussions on individualism, beauty, and race, inviting viewers to engage with these compelling topics.\n Ogunade studied Fine Art at Yaba College of Technology in Lagos, Nigeria.Recent exhibitions include Only Until This Cigarette is Ended, Pictorum Gallery, London(2023), Temporary Generation, Suburbia Contemporary, Barcelona(2022); Voices for Love, PRIOR Art Space, Barcelona(2022); 40 under 40, WHATIFTHEWORLD, Cape Town(2021); Polychromatic, Daniel Raphael, London(2021); Frieze London, The Breeder, London(2021); Stop, listen!, CFHILL Gallery, Sweden(2021); Afrika First, Valerius Gallery, Luxembourg(2018).Ogunade Oliscos work is in private collections in Burkina Faso, Austria, USA, Germany, France and Sweden.'
        },
    ]

    const openModal = (artist: ArtistType) => {
        setSelectedArtist(artist);
    };

    const closeModal = () => {
        setSelectedArtist(undefined);
    };


    // Ref to the container, explicitly typed as HTMLDivElement
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    // Function to scroll left
    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    // Function to scroll right
    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    return (
        <>
            <div id="artists" className='flex items-center justify-between w-full border-b border-[#3C5A50] pb-2 overflow-x-scroll hide-scrollbar'>
                <h3 className='uppercase font-neue text-xl'>
                    Artists
                </h3>
                {/* right and left arrows */}
                <div className='flex'>
                    <div className='flex'>
                        <svg onClick={scrollLeft} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black hover:text-gray-500 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="{2}" d="M15 19l-7-7 7-7" />
                        </svg>
                        <svg onClick={scrollRight} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black hover:text-gray-500 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="{2}" d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>
            </div>
            <div ref={scrollContainerRef} className='flex items-center gap-4 md:gap-8 w-full mt-8 overflow-x-scroll hide-scrollbar'>
                {artists.map(artist => (
                    <Artist key={artist.name} artist={artist} onClick={() => openModal(artist)} />
                ))}
            </div>
            <Modal show={selectedArtist !== null} onClose={closeModal} artist={selectedArtist} />

        </>
    )
}

export default Artists