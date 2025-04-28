import { IMenuItem, ISocials } from '@/types';

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email?: string;
    telephone: string;
    socials: ISocials;
} = {
    subheading: 'Empowering businesses with cutting-edge financial technology solutions.',
    quickLinks: [
        {
            text: 'Fideicomisos',
            url: 'fideicomisos',
        },
        {
            text: 'Servicios Legales',
            url: 'servicios-legales',
        },
        {
            text: 'Asesoría Empresarial',
            url: 'asesoria-empresarial',
        },
        {
            text: 'Contacto',
            url: '#footer',
        },
    ],
    telephone: '+52 322 240 9635',
    socials: {
        facebook: 'https://www.facebook.com/profile.php?id=61573573651730',
        instagram: 'https://www.instagram.com/macmlegalservices',
        tiktok: 'https://www.tiktok.com/@macmlegalservices?_t=ZM-8uH2td1UHiQ&_r=1',
        // github: 'https://github.com',
        // x: 'https://twitter.com/x',
        //twitter: 'https://twitter.com/Twitter',
        // youtube: 'https://youtube.com',
        //linkedin: 'https://www.linkedin.com',
        // threads: 'https://www.threads.net',
    },
};
