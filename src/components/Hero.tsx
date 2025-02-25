import React from 'react';

import { heroDetails } from '@/data/hero';

const Hero: React.FC = () => {
    return (
        <section id="hero" className="relative flex items-center justify-center pb-0 pt-32 md:pt-40 px-5 h-screen">
            <div className="absolute left-0 right-0 bottom-0 backdrop-blur-[2px] h-40 bg-gradient-to-b from-transparent via-[rgba(233,238,255,0.5)] to-[rgba(202,208,230,0.5)]"></div>

            <div className="text-center">
                <h1 className="text-4xl md:text-6xl md:leading-tight font-bold text-foreground max-w-lg md:max-w-2xl mx-auto">
                    {heroDetails.heading}
                </h1>
                <p className="mt-4 text-foreground max-w-lg mx-auto">{heroDetails.subheading}</p>
            </div>
        </section>
    );
};

export default Hero;
