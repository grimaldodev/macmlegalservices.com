'use client';
import Image from 'next/image';

import { IBenefit } from '@/types';

interface Props {
    benefit: IBenefit;
    imageAtRight?: boolean;
}

export const childVariants = {
    offscreen: {
        opacity: 0,
        x: -50,
    },
    onscreen: {
        opacity: 1,
        x: 0,
        transition: {
            type: 'spring',
            bounce: 0.2,
            duration: 1,
        },
    },
};

const BenefitSection: React.FC<Props> = ({ benefit }: Props) => {
    const { title, description, imageSrc } = benefit;

    return (
        <div className="relative w-full p-4">
            <div className="w-full mt-5 mb-3 relative after:content-[''] after:absolute after:w-1/3 after:h-[4px] after:bg-primary after:mt-2 md:absolute md:w-1/2 md:right-0 md:top-10">
                <h3 className="text-primary text-4xl md:text-5xl">{title}</h3>
            </div>
            <div className="relative w-full aspect-[4/3] md:w-1/2 md:justify-center">
                <Image src={imageSrc} alt="title" fill className="object-cover shadow-lg" quality={100} />
            </div>
            <div className="w-full md:absolute md:w-1/2 md:h-auto md:top-[35%] md:right-0">
                <p className="mt-1.5 mx-auto lg:ml-0 leading-normal text-white md:text-2xl">{description}</p>
            </div>
        </div>
    );
};

export default BenefitSection;
