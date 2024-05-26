import { useEffect, useState } from "react";
import { ProgressRoadMap } from "./ProgressRoadMap";
import { RoadMapRecommendation } from "./RoadMapRecommendation";

type Step = {
    recommendationActionPlanId:string;
    description: string;
    checked: boolean;
    recommendationId: string;
};

type Recommendation = {
    recommendationId: string;
    title: string;
    description: string;
    dimensionId: string;
    checked: boolean;
    tagName: string;
    steps: Step[];
};

interface Props {
    dimension: string;
    description: string;
    dimensionId: string;
    recommendations: Recommendation[];
}
const companyId = "72c963d0-15d2-40a7-95c0-5afa77c3e774";
const baseUrl = "http://localhost:8080";
export const RoadMap = () => {
    const [roadMap, setRoadMap] = useState([] as Props[]);
    const [roadMapId, setRoadMapId] = useState("" as string);
    const [progress, setProgress] = useState({ total: 0, completed: 0 });
    const [percentage, setPercentage] = useState("0%");
    const [startDate, setStartDate] = useState("");
    const [finishDate, setFinishDate] = useState(""); 
        
    useEffect(() => {
        const fetchRoadMap = async () => {
            try {
                const response = await fetch(`${baseUrl}/actionPlan/getActualActionPlan/${companyId}`);
                const data = await response.json();
                data.info.map((dimensionRecommendation: any) => {
                    dimensionRecommendation.recommendations.map((recommendation: any) => {
                        const totalStepsChecked = recommendation.steps.filter((step: any) => step.checked).length;
                        if(totalStepsChecked === recommendation.steps.length){
                            recommendation.checked = true;
                        }
                    });
                });
                setRoadMap(data.info);
                setRoadMapId(data.actionPlanId);
            } catch (error) {
                console.error("Error fetching roadmap data:", error);
            }
        };
        fetchRoadMap();
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
        const [recommendationId, stepId] = e.target.id.split("/");
        setRoadMap(prevRoadMap => 
            prevRoadMap.map(dimensionRecommendation => {
                if (dimensionRecommendation.recommendations.some(recommendation => recommendation.recommendationId === recommendationId)) {
                    // Si la recomendación está en esta dimensión
                    return {
                        ...dimensionRecommendation,
                        recommendations: dimensionRecommendation.recommendations.map(recommendation => {
                            if (recommendation.recommendationId === recommendationId) {
                                // Si es la recomendación que se está marcando
                                const updatedSteps = recommendation.steps.map(step => {
                                    if (step.recommendationActionPlanId === stepId) {
                                        fetch(`${baseUrl}/actionPlan/updateStepTrack/${roadMapId}/${stepId}/${e.target.checked}`, {
                                            method: "PUT",
                                            headers: {
                                                "Content-Type": "application/json",
                                            }
                                        }).then((response) => {
                                            if (response.ok) {
                                                return response.json();
                                            } else {
                                                throw new Error("No se pudo actualizar el paso de la hoja de ruta.");
                                            }
                                        }).then((data) => {
                                            console.log(data);
                                        })
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
                    };
                } else {
                    return dimensionRecommendation;
                }
            })
        );
    };
    

    return (
        <div className="w-full h-screen flex flex-col items-start justify-start bg-light relative">
            {roadMap.length === 0 ? (
                <div className="w-full flex flex-col items-center h-screen justify-center bg-light">
                    <h1 className="text-2xl font-semibold text-center mt-24 mb-8">
                        ¡Ups! Aún no tienes ninguna hoja de ruta disponible. Te invitamos a realizar tu primera evaluación.
                    </h1>
                </div>
            ) : (
                <div className="w-full flex flex-row p-4">
                    <div className="h-fit w-full bg-white mr-2 border rounded-lg shadow-lg">
                        <div className="flex justify-end items-center pl-4">
                            <p className="text-5xl font-sans font-bold mb-2 mt-2 w-1/2">Mi Hoja de Ruta</p>
                            <ProgressRoadMap percentage={percentage} finishDate={finishDate} startDate={startDate} setStartDate={setStartDate} setFinishDate={setFinishDate} />
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
