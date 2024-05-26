import { useEffect, useState } from "react";
import { ProgressRoadMap } from "./ProgressRoadMap";
import { RoadMapRecommendation } from "./RoadMapRecommendation";

type Step = {
    id: string;
    description: string;
    checked: boolean;
};

type Recommendation = {
    id: string;
    title: string;
    description: string;
    checked: boolean;
    tag: string;
    steps: Step[];
};

interface Props {
    dimension: string;
    description: string;
    recommendations: Recommendation[];
}
const companyId = "5891e02d-6865-471b-ad0f-8d66e788288d";
const baseUrl = "http://localhost:8080";
export const RoadMap = () => {
    const [roadMap, setRoadMap] = useState([] as Props[]);
    const [progress, setProgress] = useState({ total: 0, completed: 0 });
    const [percentage, setPercentage] = useState("0%");

    useEffect(() => {
        const fetchRoadMap = async () => {
            try {
                console.log(companyId);
                const response = await fetch(`${baseUrl}/actionPlan/getActualActionPlan/${companyId}`);
                const data = await response.json();
                console.log("Roadmap data:", data);
            } catch (error) {
                console.error("Error fetching roadmap data:", error);
            }
        };
        fetchRoadMap();
        setRoadMap([
            {
                dimension: "Tecnología",
                description: "Contar con herramientas tecnologícas que estén acorde al tipo de compañía y el tamaño de la misma, agilizan la adaptación de las mismas brindando agilidad a los negocios.",
                recommendations: [
                    {
                        id: "1",
                        title: "Conseguir servidores estables",
                        description: "Se recomienda invertir en servidores con una alta fiabilidad y capacidad de escalamiento para adaptarse a las necesidades cambiantes del negocio.",
                        tag: "Servidores",
                        checked: false,
                        steps: [
                            {
                                id: "1",
                                description: "Definir los temas y objetivos de la capacitación.",
                                checked: false
                            },
                            {
                                id: "2",
                                description: "Seleccionar el método de capacitación más adecuado.",
                                checked: false
                            },
                            {
                                id: "3",
                                description: "Evaluar el impacto de la capacitación en el desempeño de los empleados.",
                                checked: false
                            }
                        ]
                    },
                    {
                        id: "2",
                        title: "Actualizar software de gestión",
                        description: "Es crucial mantener actualizados los sistemas de gestión empresarial para mejorar la eficiencia operativa y protegerse contra vulnerabilidades de seguridad.",
                        tag: "Software",
                        checked: false,
                        steps: [
                            {
                                id: "1",
                                description: "Definir los temas y objetivos de la capacitación.",
                                checked: false
                            },
                            {
                                id: "2",
                                description: "Seleccionar el método de capacitación más adecuado.",
                                checked: false
                            },
                            {
                                id: "3",
                                description: "Evaluar el impacto de la capacitación en el desempeño de los empleados.",
                                checked: false
                            }
                        ]
                    }
                ]
            },
            {
                dimension: "Información",
                description: "El intercambio de información entre clientes y externos a la organización proporcionan un ecosistema para genera valor al negocio basados en una integración estrategia para los sistemas de inteligencia de Negocios.",
                recommendations: [
                    {
                        id: "3",
                        title: "Definir objetivos claros",
                        description: "Establecer objetivos claros y medibles ayuda a alinear los esfuerzos de la empresa y a dirigir eficazmente sus recursos.",
                        tag: "Objetivos",
                        checked: false,
                        steps: [
                            {
                                id: "1",
                                description: "Definir los temas y objetivos de la capacitación.",
                                checked: false
                            },
                            {
                                id: "2",
                                description: "Seleccionar el método de capacitación más adecuado.",
                                checked: false
                            },
                            {
                                id: "3",
                                description: "Evaluar el impacto de la capacitación en el desempeño de los empleados.",
                                checked: false
                            }
                        ]
                    },
                    {
                        id: "4",
                        title: "Analizar competencia",
                        description: "Realizar un análisis exhaustivo de la competencia permite identificar oportunidades y amenazas en el mercado, lo que facilita la toma de decisiones estratégicas.",
                        tag: "Análisis",
                        checked: false,
                        steps: [
                            {
                                id: "1",
                                description: "Definir los temas y objetivos de la capacitación.",
                                checked: false
                            },
                            {
                                id: "2",
                                description: "Seleccionar el método de capacitación más adecuado.",
                                checked: false
                            },
                            {
                                id: "3",
                                description: "Evaluar el impacto de la capacitación en el desempeño de los empleados.",
                                checked: false
                            }
                        ]
                    }
                ]
            },
            {
                dimension: "Procesos",
                description: "La interacción entre las diferentes áreas de la compañía debe estar soportada por los procesos estratégicos, claves y de apoyo. De igual forma se busca estandarización de actividades agiles para su implementación efectiva",
                recommendations: [
                    {
                        id: "5",
                        title: "Automatizar tareas repetitivas",
                        description: "Identificar y automatizar las tareas rutinarias puede mejorar significativamente la eficiencia operativa de la empresa, reduciendo errores y liberando tiempo para actividades más estratégicas.",
                        tag: "Automatización",
                        checked: false,
                        steps: [
                            {
                                id: "1",
                                description: "Definir los temas y objetivos de la capacitación.",
                                checked: false
                            },
                            {
                                id: "2",
                                description: "Seleccionar el método de capacitación más adecuado.",
                                checked: false
                            },
                            {
                                id: "3",
                                description: "Evaluar el impacto de la capacitación en el desempeño de los empleados.",
                                checked: false
                            }
                        ]
                    },
                    {
                        id: "6",
                        title: "Implementar un sistema de control de calidad",
                        description: "La implementación de un sistema de control de calidad permite asegurar que los productos o servicios cumplen con los estándares requeridos, mejorando la satisfacción del cliente y la reputación de la empresa.",
                        tag: "Calidad",
                        checked: false,
                        steps: [
                            {
                                id: "1",
                                description: "Definir los temas y objetivos de la capacitación.",
                                checked: false
                            },
                            {
                                id: "2",
                                description: "Seleccionar el método de capacitación más adecuado.",
                                checked: false
                            },
                            {
                                id: "3",
                                description: "Evaluar el impacto de la capacitación en el desempeño de los empleados.",
                                checked: false
                            }
                        ]
                    }
                ]
            },
            {
                dimension: "Personas",
                description: "El liderazgo e innovación para afrontar los retos de las organizaciones en múltiples negocios, contar con colaboradores en las compañías que cuenten con habilidades y en formación de herramientas digitales y operativas fomentan la productividad del negocio.",
                recommendations: [
                    {
                        id: "7",
                        title: "Capacitar al personal",
                        description: "La capacitación continua del personal es esencial para mantenerlos actualizados en las últimas tendencias y tecnologías, mejorando su desempeño y su contribución al logro de los objetivos de la empresa.",
                        tag: "Capacitación",
                        checked: false,
                        steps: [
                            {
                                id: "1",
                                description: "Definir los temas y objetivos de la capacitación.",
                                checked: false
                            },
                            {
                                id: "2",
                                description: "Seleccionar el método de capacitación más adecuado.",
                                checked: false
                            },
                            {
                                id: "3",
                                description: "Evaluar el impacto de la capacitación en el desempeño de los empleados.",
                                checked: false
                            }
                        ]
                    },
                    {
                        id: "8",
                        title: "Fomentar el trabajo en equipo",
                        description: "Promover un ambiente de trabajo colaborativo puede fortalecer la comunicación, la creatividad y la resolución de problemas, mejorando la productividad y el bienestar general de los empleados.",
                        tag: "Trabajo en equipo",
                        checked: false,
                        steps: [
                            {
                                id: "1",
                                description: "Definir los temas y objetivos de la capacitación.",
                                checked: false
                            },
                            {
                                id: "2",
                                description: "Seleccionar el método de capacitación más adecuado.",
                                checked: false
                            },
                            {
                                id: "3",
                                description: "Evaluar el impacto de la capacitación en el desempeño de los empleados.",
                                checked: false
                            }
                        ]
                    }
                ]
            }
        ]);
    }, []);

    useEffect(() => {
        if (roadMap.length === 0) return;

        setProgress({
            total: roadMap.reduce((acc, dimensionRecommendation) => acc + dimensionRecommendation.recommendations.length, 0),
            completed: roadMap.reduce((acc, dimensionRecommendation) => acc + dimensionRecommendation.recommendations.filter(recommendation => recommendation.checked).length, 0)
        });
    }, [roadMap]);

    useEffect(() => {
        setPercentage(`${(progress.completed / progress.total) * 100}%`);
    }, [progress]);

    useEffect(() => {
        if (percentage === "100%") {
            alert("¡Felicidades! Has completado todas las recomendaciones de la hoja de ruta");
        }
    }, [percentage]);

    const handleCheck = (e: any) => {
        const [recommendationId, stepId] = e.target.id.split("-");

        setRoadMap(prevRoadMap => 
            prevRoadMap.map(dimensionRecommendation => ({
                ...dimensionRecommendation,
                recommendations: dimensionRecommendation.recommendations.map(recommendation => {
                    if (recommendation.id === recommendationId) {
                        const updatedSteps = recommendation.steps.map(step => {
                            if (step.id === stepId) {
                                return {
                                    ...step,
                                    checked: e.target.checked
                                };
                            }
                            return step;
                        });
                        const allStepsCompleted = updatedSteps.every(step => step.checked);

                        return {
                            ...recommendation,
                            steps: updatedSteps,
                            checked: allStepsCompleted
                        };
                    }
                    return recommendation;
                })
            }))
        );
    };

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
                    <div className="h-fit w-full bg-white mr-2 border rounded-lg shadow-lg">
                        <div className="flex justify-end items-center pl-4">
                            <p className="text-5xl font-sans font-bold mb-2 mt-2 w-1/2">Mi Hoja de Ruta</p>
                            <ProgressRoadMap percentage={percentage} />
                        </div>
                        <div className="pl-4 pr-4 pb-4">
                            <p className="mt-4 text-lg font-light font-sans leading-relaxed">
                                La herramienta Hoja de Ruta es un recurso invaluable para las empresas que buscan evolucionar en su transformación digital. Ofreciendo recomendaciones detalladas y pasos específicos, esta herramienta guía a las empresas hacia el siguiente nivel de madurez en cada dimensión de su transformación digital.
                                Adaptada al contexto empresarial colombiano, la Hoja de Ruta está diseñada para impulsar la competitividad y sostenibilidad de las Pymes en un mercado en constante digitalización. Proporciona un plan personalizado que considera las necesidades y desafíos únicos que enfrentan las empresas en Colombia, permitiendo así un crecimiento sólido y sostenible en el mundo digital.
                            </p>
                        </div>
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
};
