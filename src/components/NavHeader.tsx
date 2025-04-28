import React from 'react';

import { menuItems } from '@/data/menuItems';
import Link from 'next/link';

const NavHeader: React.FC = () => {
    return (
        <section id="NavHeader" className="hidden md:block w-full text-right text-primary py-10">
            {menuItems.map((item, index) => (
                <Link href={item.url} className="text-2xl px-10" key={index}>
                    {item.text}
                </Link>
            ))}
        </section>
    );
};

export default NavHeader;
