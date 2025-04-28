import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { footerDetails } from '@/data/footer';
import { siteDetails } from '@/data/siteDetails';
import { getPlatformIconByName } from '@/utils';

const Footer: React.FC = () => {
    return (
        <footer className="relative bg-footer borderTop text-primary pb-10 mt-10">
            <div className="w-full flex flex-row flex-wrap pt-5">
                <div className="w-1/3 p-4 md:w-1/3">
                    <Link href="/" className="relative block w-full h-full gap-2">
                        <Image src="/images/logo.png" alt={siteDetails.siteName} fill className="object-contain" />
                    </Link>
                </div>
                <div className="w-2/3 p-4 md:w-1/3">
                    <ul>
                        {footerDetails.quickLinks.map(link => (
                            <li key={link.text} className="mb-2">
                                <Link
                                    href={link.url}
                                    className="hover:text-foreground font-semibold text-xl md:text-3xl"
                                >
                                    {link.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="w-full p-4 text-center md:w-1/3">
                    <h4 className="text-2xl font-semibold mb-4 md:text-4xl">Contactanos</h4>

                    {footerDetails.telephone && (
                        <a
                            href={`tel:${footerDetails.telephone}`}
                            className="block text-xl font-bold hover:text-foreground md:text-3xl"
                        >
                            {footerDetails.telephone}
                        </a>
                    )}

                    {footerDetails.email && (
                        <a
                            href={`mailto:${footerDetails.email}`}
                            className="block text-foreground-accent hover:text-foreground"
                        >
                            Email: {footerDetails.email}
                        </a>
                    )}

                    {footerDetails.socials && (
                        <div className="w-full flex flex-col items-center gap-5 flex-wrap">
                            <ul>
                                {Object.keys(footerDetails.socials).map((platformName, index) => {
                                    if (platformName && footerDetails.socials[platformName]) {
                                        return (
                                            <li className="my-5 bock md:text-2xl" key={index}>
                                                <Link
                                                    href={footerDetails.socials[platformName]}
                                                    key={platformName}
                                                    aria-label={platformName}
                                                    className="flex flex-row"
                                                >
                                                    {getPlatformIconByName(platformName)}{' '}
                                                    <span className="mx-2">{platformName}</span>
                                                </Link>
                                            </li>
                                        );
                                    }
                                })}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
            <div className="w-full mt-8 text-center text-primary px-6 md:text-xl">
                <p>
                    Copyright &copy; {new Date().getFullYear()} {siteDetails.siteName}. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
