import { useEffect, useState } from "react";
import { ProgressRoadMap } from "./ProgressRoadMap";
import { RoadMapRecommendation } from "./RoadMapRecommendation";


type Recommendation = {
    title: string;
    description: string;
    checked: boolean;
    tag: string;
}

interface props {
    dimension: string;
    description: string;
    recommendations: Recommendation[];
}

export const RoadMap = ()=>{
    const [roadMap, setRoadMap] = useState([] as props[   
    ]);
    const [progress, setprogress] = useState({ total: 0,completed:0
    });
    const [percentage, setPercentage] = useState("0%");
    let totalRecommendations: number = 0;
    
    useEffect(() => {
        
        setRoadMap([{
            dimension: "Tecnología",
            description: "Contar con herramientas tecnologícas que estén acorde al tipo de compañía y el tamaño de la misma, agilizan la adaptación de las mismas brindando agilidad a los negocios.",
            recommendations: [
                {
                    title: "Conseguir servidores estables",
                    description: "Se recomienda invertir en servidores con una alta fiabilidad y capacidad de escalamiento para adaptarse a las necesidades cambiantes del negocio.",
                    tag: "Servidores",
                    checked: false
                },
                {
                    title: "Actualizar software de gestión",
                    description: "Es crucial mantener actualizados los sistemas de gestión empresarial para mejorar la eficiencia operativa y protegerse contra vulnerabilidades de seguridad.",
                    tag: "Software",
                    checked: false
                }
            ]
        },
        {
            dimension: "Información",
            description: "El intercambio de información entre clientes y externos a la organización proporcionan un ecosistema para genera valor al negocio basados en una integración estrategia para los sistemas de inteligencia de Negocios.",
            recommendations: [
                {
                    title: "Definir objetivos claros",
                    description: "Establecer objetivos claros y medibles ayuda a alinear los esfuerzos de la empresa y a dirigir eficazmente sus recursos.",
                    tag: "Objetivos",
                    checked: false
                },
                {
                    title: "Analizar competencia",
                    description: "Realizar un análisis exhaustivo de la competencia permite identificar oportunidades y amenazas en el mercado, lo que facilita la toma de decisiones estratégicas.",
                    tag: "Análisis",
                    checked: false
                }
            ]
        },
        {
            dimension: "Procesos",
            description: "La interacción entre las diferentes áreas de la compañía debe estar soportada por los procesos estratégicos, claves y de apoyo. De igual forma se busca estandarización de actividades agiles para su implementación efectiva",
            recommendations: [
                {
                    title: "Automatizar tareas repetitivas",
                    description: "Identificar y automatizar las tareas rutinarias puede mejorar significativamente la eficiencia operativa de la empresa, reduciendo errores y liberando tiempo para actividades más estratégicas.",
                    tag: "Automatización",
                    checked: false
                },
                {
                    title: "Implementar un sistema de control de calidad",
                    description: "La implementación de un sistema de control de calidad permite asegurar que los productos o servicios cumplen con los estándares requeridos, mejorando la satisfacción del cliente y la reputación de la empresa.",
                    tag: "Calidad",
                    checked: false
                }
            ]
        },
        {
            dimension: "Personas",
            description: "El liderazgo e innovación para afrontar los retos de las organizaciones en múltiples negocios, contar con colaboradores en las compañías que cuenten con habilidades y en formación de herramientas digitales y operativas fomentan la productividad del negocio.",
            recommendations: [
                {
                    title: "Capacitar al personal",
                    description: "La capacitación continua del personal es esencial para mantenerlos actualizados en las últimas tendencias y tecnologías, mejorando su desempeño y su contribución al logro de los objetivos de la empresa.",
                    tag: "Capacitación",
                    checked: false
                },
                {
                    title: "Fomentar el trabajo en equipo",
                    description: "Promover un ambiente de trabajo colaborativo puede fortalecer la comunicación, la creatividad y la resolución de problemas, mejorando la productividad y el bienestar general de los empleados.",
                    tag: "Trabajo en equipo",
                    checked: false
                }
            ]
        }])
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
            roadMap.forEach((dimensionRecommendation) => {
                dimensionRecommendation.recommendations.forEach((recommendation) => {
                    totalRecommendations++;
                });
            });
            setprogress({
                total: totalRecommendations,
                completed: 0,
            });
    }, [roadMap, totalRecommendations]);

    useEffect(() => {
        setPercentage(`${(progress.completed / progress.total) * 100}%`)
    }, [progress]);

    useEffect(() => {
        if (percentage === "100%") {
            alert("¡Felicidades! Has completado todas las recomendaciones de la hoja de ruta");
        }
    }, [percentage]);

    
    const  handleCheck = (e:any) => {{
        if(e.target.checked){
            setprogress({
                ...progress,
                completed: progress.completed + 1,
            });
        }else{
            setprogress({
                ...progress,
                completed: progress.completed - 1,
            });
        }
    }}
    
    return (
        <div className="w-full flex flex-col items-start justify-center bg-light relative">
            {roadMap.length === 0 ? (
                <div className="w-full flex flex-col items-center justify-center bg-light h-screen">
                <h1 className="text-2xl font-semibold text-center mt-24 mb-8">
                    ¡Ups! Aún no tienes ninguna hoja de ruta disponible. Te invitamos a realizar tu primera evaluación.
                </h1>
                </div>            
            ) : (
                <div className="w-full h-full flex flex-row p-4">
                    <div className="h-fit w-full bg-white mr-2 border rounded-lg shadow-lg p-4">
                        <div className="flex flex-row justify-between items-center w-full">
                            <div className="flex flex-col justify-between items-baseline w-1/2">
                                <h1 className="text-4xl font-sans font-bold mb-1 mt-2">Hoja de ruta</h1>
                                <div className="flex w-full gap-2 justify-start items-center">
                                    <p className="text-lg">Tu progreso actual:</p>
                                    <ProgressRoadMap percentage={percentage} />
                                </div>
                            </div>
                            <div className="flex flex-row justify-between items-baseline">
                                <p className="text-lg font-sans font-light mb-4 mr-2">Inicio de la hoja de ruta:</p>
                                <p className="pr-4 pl-4 rounded text-white bg-slate-500 inline-block w-fit h-fit">8 de marzo del 2024</p>
                            </div>
                        </div>
                        <p className="mt-4">
                            La herramienta Hoja de Ruta es un recurso invaluable para las empresas que buscan evolucionar en su transformación digital. Ofreciendo recomendaciones detalladas y pasos específicos, esta herramienta guía a las empresas hacia el siguiente nivel de madurez en cada dimensión de su transformación digital.
                            <br /><br />
                            Adaptada al contexto empresarial colombiano, la Hoja de Ruta está diseñada para impulsar la competitividad y sostenibilidad de las Pymes en un mercado en constante digitalización. Proporciona un plan personalizado que considera las necesidades y desafíos únicos que enfrentan las empresas en Colombia, permitiendo así un crecimiento sólido y sostenible en el mundo digital.
                        </p>
                    </div>
                </div>
            )}
            {roadMap.map((dimensionRecommendation, index) => (
                <RoadMapRecommendation
                    key={index}
                    dimension={dimensionRecommendation.dimension}
                    description={dimensionRecommendation.description}
                    recommendations={dimensionRecommendation.recommendations}
                    handleCheck={handleCheck}
                />
            ))}
        </div>
    );    
}