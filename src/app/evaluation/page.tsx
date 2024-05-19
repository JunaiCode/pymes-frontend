'use client';

import Questionary from "@/components/company/Questionary";
import PageTemplate from "@/components/ui/PageTemplate";
import { useState } from "react";

const Page = () => {
    const [started, setStarted] = useState(false);
    return (
        <PageTemplate>
            {!started ? (
                <div className="flex flex-col justify-center items-center h-screen w-full bg-light">
                    <p className="text-2xl font-semibold text-center mt-24 mb-8">¡Estás a un paso de mejorar tu madurez digital! Descubre oportunidades de crecimiento y optimiza tu estrategia. ¿Qué esperas?</p>
                    <button 
                        className="bg-primary text-white px-6 py-3 rounded-lg shadow-lg hover:bg-primary-dark transition duration-300" 
                        onClick={() => {
                            setStarted(true);
                        }}
                    >
                        Comenzar evaluación
                    </button>
                </div>
            ) : (
                <Questionary questions={[
                    {
                        title: "¿Desde qué nivel de la jerarquía de la organización se aboga por el marketing basado en datos?",
                        options: [
                            { title: "Los cargos sénior defienden su uso hasta cierto punto.", checked: false },
                            { title: "Los cargos medios, como los directores locales, defienden su uso.", checked: false },
                            { title: "Los altos cargos, como el vicepresidente, defienden su uso.", checked: false },
                            { title: "Algunos cargos senior como el CMO, CTO o COO, defienden su uso.", checked: false }
                        ],
                        answered: false
                    },
                    {
                        title: "¿Qué tan importante es la inversión en tecnología para la empresa?",
                        options: [
                            { title: "No es importante.", checked: false },
                            { title: "Es importante.", checked: false },
                            { title: "Es muy importante.", checked: false },
                            { title: "Es crucial.", checked: false }
                        ],
                        answered: false
                    },
                    {
                        title: "¿Qué tan importante es la inversión en talento humano para la empresa?",
                        options: [
                            { title: "No es importante.", checked: false },
                            { title: "Es importante.", checked: false },
                            { title: "Es muy importante.", checkeded: false },
                            { title: "Es crucial.", checkeded: false }
                        ],
                        answered: false
                    }
                ]} />
            )}
        </PageTemplate>
    );    
};

export default Page;