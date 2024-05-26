'use client';

import Questionary from "@/components/company/Questionary";
import PageTemplate from "@/components/ui/PageTemplate";
import { useEffect, useState } from "react";

 const companyId = "72c963d0-15d2-40a7-95c0-5afa77c3e774";
 const baseUrl = "http://localhost:8080";

const Page = () => {
    const [started, setStarted] = useState(false);
    const [buttonText, setButtonText] = useState("Empezar evaluación");
    const [evaluationExist, setEvaluationExist] = useState(null);
    useEffect(() => {
        fetch(`${baseUrl}/evaluation/company/${companyId}/results`, {
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
            }
        }).catch((error) => {
            console.error('La evaluacion no existe:', error);
        });
    }, []);
    
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