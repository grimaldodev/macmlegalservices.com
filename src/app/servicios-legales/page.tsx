'use client';
import SectionHero from '@/components/SectionHero';
import { Services as ServicesData } from '@/data/servicies';
import { useState } from 'react';

const Services: React.FC = () => {
    const servicesList = ServicesData.es;
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <>
            <SectionHero name="services" title="Servicios Legales" description="Inversión Segura y Respaldo Legal" />
            <div className="flex flex-col md:flex-row p-10">
                <h3 className="md:w-1/2 text-primary text-3xl md:text-5xl mb-5">
                    ¿Por qué hacerlo con MACM LEGAL SERVICES?
                </h3>
                <p className="md:w-1/2">
                    Nuestra amplia experiencia y enfoque en el cliente nos permiten ofrecer soluciones personalizadas,
                    combinando conocimientos técnicos con un trato cercano y directo. Esto garantiza que cada estructura
                    fiduciaria esté diseñada para maximizar su seguridad, eficiencia y rentabilidad.
                </p>
            </div>
            <div className="flex flex-col md:flex-row p-10">
                <h3 className="md:w-1/2 text-primary text-3xl md:text-5xl mb-5">¿Qué nos diferencia del mercado?</h3>
                <p className="md:w-1/2">
                    Nuestra propuesta se fundamenta en la experiencia comprobada, el trato directo y oportuno, y una
                    asesoría legal a medida. Con MACM LEGAL SERVICES, no solo obtiene un servicio de alta calidad, sino
                    un socio estratégico comprometido con el éxito de sus inversiones en Puerto Vallarta.
                </p>
            </div>
            <h3 className="w-full text-center text-4xl text-primary mb-10 md:p-10 md:text-7xl">Nuestros Servicios</h3>
            <div className="w-full flex flex-col md:grid md:grid-cols-3">
                {servicesList?.map((service, index) => (
                    <div className="px-10 pb-5" key={index}>
                        <button
                            className="text-2xl md:text-3xl text-primary mb-5 w-full text-left flex "
                            onClick={() => {
                                if (window.innerWidth < 768) {
                                    toggleAccordion(index);
                                }
                            }}
                        >
                            <span
                                className={`md:hidden text-2xl mr-2 transform transition-transform duration-300 ${
                                    openIndex === index ? 'rotate-45' : 'rotate-0'
                                }`}
                            >
                                +
                            </span>
                            {service.title}
                        </button>
                        <div
                            className={`text-2xl overflow-hidden transition-all duration-500 ease-in-out ${
                                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                            } md:max-h-full md:opacity-100`}
                        >
                            <div className="mt-2 text-xl">{service.description}</div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Services;
