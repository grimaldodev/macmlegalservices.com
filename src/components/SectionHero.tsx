import Image from 'next/image';
import Link from 'next/link';
import NavHeader from './NavHeader';

export interface iSectionHero {
    name: string;
    title: string;
    description?: string;
}

const SectionHero: React.FC<iSectionHero> = ({ name, title, description }: iSectionHero) => {
    return (
        <div className={`relative w-full ${name}-hero borderBottom`}>
            <div className="header w-full top-0 flex flex-row">
                <div className="relative flex-none w-[150px] h-[150px] mt-10 ml-5 aspect[1/1]">
                    <Link href={'/'}>
                        <Image src="/images/logo.png" alt="MACM Legal Services" fill className="object-contain" />
                    </Link>
                </div>
                <div className="flex-1">
                    <NavHeader />
                </div>
            </div>
            <div className="p-10">
                <h1 className="text-primary text-4xl md:text-7xl">{title}</h1>
                <p className="text-primary text-xl italic md:text-4xl">{description}</p>
            </div>
        </div>
    );
};

export default SectionHero;
