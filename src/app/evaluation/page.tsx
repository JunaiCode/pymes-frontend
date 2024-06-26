'use client';

import Questionary from "@/components/company/Questionary";
import PageTemplate from "@/components/ui/PageTemplate";
import { useEffect, useState } from "react"; 
const Page = () => {
    const [started, setStarted] = useState(false);
    const [buttonText, setButtonText] = useState("Empezar evaluación");
    const [evaluationExist, setEvaluationExist] = useState(null);
    const [user, setUser] = useState(null);
    const [companyId, setCompanyId] = useState("");
    const baseUrl = "http://18.218.220.138:8081";
    useEffect(() => {
        if(typeof window !== 'undefined'){;
        const user = localStorage.getItem("user");
        if(user){
          setUser(JSON.parse(user));
          setCompanyId(JSON.parse(user).id);
        }
    }
      }, []);

    useEffect(() => {
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