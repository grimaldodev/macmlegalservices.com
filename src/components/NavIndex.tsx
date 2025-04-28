import React from 'react';

import { menuItems } from '@/data/menuItems';
import Link from 'next/link';

const NavIndex: React.FC = () => {
    return (
        <section id="NavIndex" className="hidden md:block text-center text-primary py-10">
            {menuItems.map((item, index) => (
                <Link href={item.url} className="text-4xl px-10" key={index}>
                    {item.text}
                </Link>
            ))}
        </section>
    );
};

export default NavIndex;
