'use client';

import Questionary from "@/components/company/Questionary";
import PageTemplate from "@/components/ui/PageTemplate";
import { useEffect, useState } from "react";
import { getCompanyInfo } from '@/services/companyService';
import { CompanyInfo } from '../../../utils/types';

<<<<<<< HEAD
const companyId = "5891e02d-6865-471b-ad0f-8d66e788288d";
=======
 const string = localStorage.getItem("user");
 const user = string ? JSON.parse(string) : null;
 const companyId = user ? user.id : null;
 const baseUrl = "http://localhost:8080";
>>>>>>> a7a44b8a51bfddc24e922bde8500f3abed274a09

const Page = () => {
    const [started, setStarted] = useState(false);
    const [buttonText, setButtonText] = useState("Empezar evaluación");
    const [evaluationExist, setEvaluationExist] = useState<CompanyInfo | null>(null);

    useEffect(() => {
<<<<<<< HEAD
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
=======
        fetch(`${baseUrl}/company/${companyId}/results`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        }).then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("No se encontró la evaluación");
            }
        }).then((data) => {
            if (data != null && data.status !== 'NOT_FOUND') {
                setButtonText("Continuar evaluación");
                setEvaluationExist(data);
            } else {
                console.log("La evaluación no existe.");
>>>>>>> a7a44b8a51bfddc24e922bde8500f3abed274a09
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
