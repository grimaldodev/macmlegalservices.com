import { FiBriefcase, FiDollarSign, FiPieChart } from 'react-icons/fi';

import { IBenefit } from '@/types';

export const benefits: IBenefit[] = [
    {
        title: '¿Por qué hacerlo con MACM LEGAL SERVICES?',
        description:
            'Nuestra amplia experiencia y enfoque en el cliente nos permiten ofrecer soluciones personalizadas, combinando conocimientos técnicos con un trato cercano y directo. Esto garantiza que cada estructura fiduciaria esté diseñada para maximizar su seguridad, eficiencia y rentabilidad.',
        bullets: [],
        imageSrc: '/images/index/why.png',
    },
    {
        title: '¿Por qué un fideicomiso?',
        description: `Un fideicomiso le permite gestionar y proteger su patrimonio de manera eficiente, ofreciendo una herramienta flexible y segura para diversificar y optimizar sus inversiones, especialmente en un mercado tan prometedor como el de Puerto Vallarta.

Imrnversión Segura y Respaldo Legal

Nuestros fideicomisos están diseñados para ofrecerle protección y optimización fiscal, asegurando la seguridad de su patrimonio. Permiten una gestión eficiente de bienes, protección frente a riesgos legales y la planificación patrimonial. Con la asesoría legal de expertos, garantizamos una solución legal sólida y adaptada a sus necesidades. Vea a continuación algunos de los beneficios:`,
        bullets: [
            {
                title: 'Micro-Investing',
                description: 'Begin with as little as $1 and watch your money grow.',
                icon: <FiDollarSign size={26} />,
            },
            {
                title: 'Expert Portfolios',
                description: 'Choose from investment strategies tailored to your risk tolerance.',
                icon: <FiBriefcase size={26} />,
            },
            {
                title: 'Real-Time Performance',
                description: 'Track your investments with easy-to-understand metrics and visuals.',
                icon: <FiPieChart size={26} />,
            },
        ],
        imageSrc: '/images/index/trust.png',
    },
];
