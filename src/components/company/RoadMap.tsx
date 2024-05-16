import { useEffect, useState } from "react";
import { ProgressRoadMap } from "./ProgressRoadMap";
import { RoadMapRecommendation } from "./RoadMapRecommendation";

interface recommendation{
    title: string;
    description: string;
    tag: string;
}


interface recommendations{
    dimension: string;
    description: string;
    recommendations: recommendation[];
}

interface RoadMapProps{
    dimensionsRecommendations: recommendations[];
}



export const RoadMap = ({dimensionsRecommendations}:RoadMapProps)=>{
    const [progress, setprogress] = useState({ total: 0,completed:0
    });
    const [percentage, setPercentage] = useState("0%");
    let totalRecommendations: number = 0;
    
    useEffect(() => {
        dimensionsRecommendations.forEach((dimensionRecommendation) => {
            dimensionRecommendation.recommendations.forEach((recommendation) => {
                totalRecommendations++;
            });
        });
        setprogress({
            total: totalRecommendations,
            completed: 0,
        });
    }, []);

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
            <div className="w-full h-full flex flex-row  p-4">
            <div className="h-fit w-full bg-white mr-2 border rounded-lg shadow-lg p-4" >
                <div className="flex flex-row justify-between items-center w-full">
                <div className="flex flex-col justify-between items-baseline w-1/2" >
                <h1 className="text-4xl font-sans font-bold mb-1 mt-2">Hoja de ruta</h1>
                <div className="flex w-full gap-2 justify-start items-center">
                <p className="text-lg">Tu progreso actual:</p>
                <ProgressRoadMap percentage={percentage}/>
                </div>
                </div>
                <div className="flex flex-row justify-between items-baseline">
                <p className="text-lg font-sans font-light mb-4 mr-2">Inicio de la hoja de ruta:</p>
                <p className="pr-4 pl-4 rounded text-white bg-slate-500 inline-block w-fit h-fit">8 de marzo del 2024</p>
                </div>
                </div>
                <p className="mt-4">La herramienta Hoja de Ruta es un recurso invaluable para las empresas que buscan evolucionar en su transformación digital. Ofreciendo recomendaciones detalladas y pasos específicos, esta herramienta guía a las empresas hacia el siguiente nivel de madurez en cada dimensión de su transformación digital.

Adaptada al contexto empresarial colombiano, la Hoja de Ruta está diseñada para impulsar la competitividad y sostenibilidad de las Pymes en un mercado en constante digitalización. Proporciona un plan personalizado que considera las necesidades y desafíos únicos que enfrentan las empresas en Colombia, permitiendo así un crecimiento sólido y sostenible en el mundo digital.</p>
            </div>
            </div>
            {dimensionsRecommendations.map((dimensionRecommendation, index) => (
                <RoadMapRecommendation key={index} dimension={dimensionRecommendation.dimension} description={dimensionRecommendation.description} recommendations={dimensionRecommendation.recommendations} handleCheck={handleCheck}/>
            ))}
        </div>
    )
}