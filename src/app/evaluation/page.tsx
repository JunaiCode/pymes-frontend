'use client';

import Questionary from "@/components/company/Questionary";
import PageTemplate from "@/components/ui/PageTemplate";
import { useEffect, useState } from "react";
import { getCompanyInfo } from '@/services/companyService';
import { CompanyInfo } from '../../../utils/types';

const companyId = "5891e02d-6865-471b-ad0f-8d66e788288d";

const Page = () => {
    const [started, setStarted] = useState(false);
    const [buttonText, setButtonText] = useState("Empezar evaluación");
    const [evaluationExist, setEvaluationExist] = useState<CompanyInfo | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getCompanyInfo(companyId);
                if (data != null && data.currentEvaluation.length > 0) {
                    setButtonText("Continuar evaluación");
                    setEvaluationExist(data);
                } else {
                    console.log("La evaluación no existe.");
                }
            } catch (error) {
                console.error('La evaluación no existe:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <PageTemplate>
            {!started ? (
                <div className="flex flex-col justify-center items-center h-screen w-full bg-light">
                    <p className="text-2xl font-semibold text-center mt-24 mb-8">
                        ¡Estás a un paso de mejorar tu madurez digital! Descubre oportunidades de crecimiento y optimiza tu estrategia. ¿Qué esperas?
                    </p>
                    <button 
                        className="bg-primary text-white px-6 py-3 rounded-lg shadow-lg hover:bg-primary-dark transition duration-300" 
                        onClick={() => {
                            setStarted(true);
                        }}
                    >
                        {buttonText}
                    </button>
                </div>
            ) : (
                <Questionary evaluationExist={evaluationExist}/>
            )}
        </PageTemplate>
    );    
};

export default Page;
