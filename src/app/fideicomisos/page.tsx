import SectionHero from '@/components/SectionHero';
import { Trusts } from '@/components/trusts';

const Fideicomisos: React.FC = () => {
    return (
        <div className="mb-10">
            <SectionHero name={Trusts.es.name} title={Trusts.es.title} description={Trusts.es.description} />
            <div className="w-full text-xl text-gray-400 md:text-center md:text-4xl p-10 mb-5">{Trusts.es.intro}</div>
            <div className="w-full">
                <h2 className="mb-5 text-center text-5xl text-primary md:text-7xl">Beneficios</h2>
                {Trusts.es.benefits.map((benefit, index) => (
                    <div className="w-full flex flex-col p-6 pt-0 md:flex-row md:w-[70%] md:mx-auto" key={index}>
                        <div className="w-full text-primary text-2xl md:w-1/2 md:text-3xl">{benefit.title}</div>
                        <div className="w-full text-lg md:w-1/2 md:text-xl">{benefit.description}</div>
                    </div>
                ))}
            </div>
            <div className="w-full italic text-center text-primary text-3xl my-7 md:text-5xl md:my-10">
                Inversión Segura y Respaldo Legal
            </div>
            <h4 className="w-full text-primary text-2xl px-10 py-5 md:text-4xl md:w-[80%] md:mx-auto">
                ¿Por qué un fideicomiso?
            </h4>
            <div className="w-full flex flex-col md:flex-row md:w-[80%] md:mx-auto text-xl">
                <div className="w-full md:w-1/2 px-5">
                    <p>
                        Un fideicomiso le permite gestionar y proteger su patrimonio de manera eficiente, ofreciendo una
                        herramienta flexible y segura para diversificar y optimizar sus inversiones, especialmente en un
                        mercado tan prometedor como el de Puerto Vallarta.
                    </p>
                    <p className="pt-5">
                        Nuestros fideicomisos están diseñados para ofrecerle protección y optimización fiscal,
                        asegurando la seguridad de su patrimonio. Permiten una gestión eficiente de bienes, protección
                        frente a riesgos legales y la planificación patrimonial. Con la asesoría legal de expertos,
                        garantizamos una solución legal sólida y adaptada a sus necesidades.{' '}
                    </p>
                </div>
                <div className="w-full md:w-1/2 px-5">
                    <p className="mb-5">Vea a continuación algunos de los beneficios:</p>
                    <ul className="list-disc mx-5">
                        <li>Protección de su inversión ante posibles disputas legales.</li>
                        <li>Optimización y planificación fiscal a largo plazo.</li>
                        <li>Seguridad jurídica garantizada con un equipo especializado.</li>
                        <li>Soluciones personalizadas adaptadas a su situación patrimonial.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Fideicomisos;
