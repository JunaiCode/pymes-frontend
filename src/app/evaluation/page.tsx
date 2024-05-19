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
                <Questionary/>
            )}
        </PageTemplate>
    );    
};

export default Page;