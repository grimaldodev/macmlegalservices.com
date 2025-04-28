'use client';

import { menuItems } from '@/data/menuItems';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';

const MobileMenu: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(prev => !prev);
    const closeMenu = () => setIsOpen(false);

    return (
        <div className="md:hidden absolute">
            {/* Botón de menú */}
            <button
                onClick={toggleMenu}
                className="p-2 text-primary focus:outline-none z-50 relative"
                aria-label="Toggle menu"
            >
                {isOpen ? <X size={24} className="text-primary" /> : <Menu size={24} className="text-primary" />}
            </button>

            {/* Solo se monta si el menú está abierto */}
            {isOpen && (
                <div className="absolute top-0 left-0 w-screen bg-black z-40 p-6">
                    <ul className="flex flex-col items-center gap-6">
                        {menuItems.map((item, index) => (
                            <li key={index}>
                                <Link
                                    href={item.url}
                                    onClick={closeMenu}
                                    className="text-2xl px-10 text-primary text-center"
                                >
                                    {item.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default MobileMenu;
