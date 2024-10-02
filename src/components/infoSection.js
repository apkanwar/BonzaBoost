import { CheckCircleIcon } from '@heroicons/react/24/outline';
import { SvgIcon } from '@mui/material';
import Image from 'next/image';
import React, { useRef } from 'react';
import WipeButton from './wipeButton';
import { useIsVisible } from '@/lib/useIsVisible';

const InfoSection = ({ id, info, imgSrc, infoSide }) => {
    const ref = useRef();
    const isVisible = useIsVisible(ref);

    return (
        <div ref={ref} id={id} className={`${isVisible ? "opacity-100" : "opacity-0"} transition-opacity ease-in duration-1000 flex flex-col gap-8 max-w-7xl mx-auto items-center md:items-start py-12 pt-24 xl:py-24 xl:pt-32 ${infoSide === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
            {/* Text Section */}
            <div className="flex flex-col gap-36 w-full md:w-3/5 px-6 m-auto">
                {info.map((content, index) => (
                    <div key={index} className='flex flex-col gap-8'>
                        <h2 className={`${content.hSize} font-bold text-white font-headings mb-4 text-center md:text-start`}>{content.title}</h2>
                        <h2 className="text-xl text-gray-300 font-main mb-4">{content.subtitle}</h2>

                        {content.listItems && (
                            <ul className="space-y-4 text-start">
                                {content.listItems.map((item, indexL) => (
                                    <li key={indexL} className="flex px-4 gap-4 items-center">
                                        <SvgIcon className="bg-white rounded-full">
                                            <CheckCircleIcon />
                                        </SvgIcon>
                                        <span className="text-white font-main text-lg">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        )}

                        {content.buttons && (
                            <div className='flex flex-col lg:flex-row gap-8 items-center md:items-start'>
                                <WipeButton text="Join Our Discord" color="nitroPink" link="https://www.discord.gg/Bonza" />
                                <WipeButton text="Learn More" color="transparent" link="#about" />
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Image Section */}
            <div className="w-full md:w-2/5 px-6">
                <div className='flex flex-col gap-8'>
                    {imgSrc.map((image, index) => (
                        <Image key={index} width={300} height={0} src={image} priority={true} alt={"Info Image"} className="shadow-lg mx-auto" />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default InfoSection;
