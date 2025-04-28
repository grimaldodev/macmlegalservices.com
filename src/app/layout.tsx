import type { Metadata } from 'next';

import { siteDetails } from '@/data/siteDetails';

import Footer from '@/components/Footer';
import MobileMenu from '@/components/MobileMenu';
import './globals.css';

export const metadata: Metadata = {
    title: siteDetails.metadata.title,
    description: siteDetails.metadata.description,
    openGraph: {
        title: siteDetails.metadata.title,
        description: siteDetails.metadata.description,
        url: siteDetails.siteUrl,
        type: 'website',
        images: [
            {
                url: '/images/og-image.jpg',
                width: 1200,
                height: 675,
                alt: siteDetails.siteName,
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: siteDetails.metadata.title,
        description: siteDetails.metadata.description,
        images: ['/images/twitter-image.jpg'],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`antialiased`}>
                <div className="w-screen md:w-[90vw] md:mx-auto">
                    <MobileMenu />
                    <main>{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
