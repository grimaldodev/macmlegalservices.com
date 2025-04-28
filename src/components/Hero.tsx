import React from 'react';

import { heroDetails } from '@/data/hero';
import Image from 'next/image';

const Hero: React.FC = () => {
    return (
        <section id="hero" className="px-4 flex gap-4 w-full h-[50vh] borderBottom goldGradient relative md:h-[75vh]">
            <div className="absolute top-0 left-0 w-full h-full pl-7 z-10 flex justify-center flex-col md:relative md:w-1/2 md:flex md:items-center md:justify-center md:flex-col">
                <div className="relative w-[200px] h-[200px] aspect[1/1] md:w-[50%] md:h-[50%]">
                    <Image src="/images/logo.png" alt={heroDetails.heading} fill className="object-contain" />
                </div>
                <p className="w-3/4 mt-4 text-3xl text-primary md:text-5xl md:text-center">
                    Confianza y Seguridad <br />
                    Legal en México para
                    <br />
                    Extranjeros
                </p>
            </div>
            <div className="absolute top-0 right-0 w-full h-full z-0 md:relative md:w-1/2 md:h-full md:flex md:items-center md:justify-center">
                <div className="absolute bottom-0 right-0 w-2/3 h-full md:relative md:bottom-auto md:right-auto md:w-full  md:flex md:items-center md:justify-center">
                     
                    <Image
                        src="/images/scale.png"
                        alt={heroDetails.heading}
                        fill
                        className="object-cover object-left md:object-contain md:w-auto md:h-full"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
