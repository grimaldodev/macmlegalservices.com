export interface iBenefit {
    title: string;
    description: string;
}

export interface iTrust {
    name: string;
    title: string;
    description: string;
    intro: string;
    slogan: string;
    benefits: iBenefit[];
}

export interface iTrustsData {
    es?: iTrust;
    en?: iTrust;
}

export const Trusts = {
    es: {
        name: 'trusts',
        title: 'Fideicomisos',
        description: 'Inversión Segura y Respaldo Legal',
        intro: `Nuestro servicio de fideicomisos está diseñado para proteger sus inversiones y garantizar la seguridad
                patrimonial en Puerto Vallarta. A través de estructuras personalizadas y asesoría legal experta,
                facilitamos la administración de bienes y la optimización fiscal, permitiéndole aprovechar oportunidades
                de inversión con la confianza de un equipo legal de primer nivel.`,
        slogan: 'Inversión Segura y Respaldo Legal',
        benefits: [
            {
                title: 'Protección Patrimonial',
                description: 'Aísle y resguarde sus activos frente a imprevistos y riesgos inherentes al mercado.',
            },
            {
                title: 'Optimización Fiscal',
                description: 'Diseñamos soluciones que maximizan la eficiencia impositiva y reducen cargas fiscales',
            },
            {
                title: 'Cumplimiento Normativo',
                description: 'Adaptamos cada fideicomiso a sus necesidades específicas y objetivos de inversión.',
            },
            {
                title: 'Estructuras a medida',
                description:
                    'Garantizamos el estricto apego a la legislación mexicana, brindándole seguridad jurídica total.',
            },
            {
                title: 'Atención personalizada',
                description:
                    'Con MACM LEGAL SERVICES, disfruta de un trato directo, respuestas oportunas y asesoría continua para cada etapa de su inversión',
            },
        ],
    },
};
