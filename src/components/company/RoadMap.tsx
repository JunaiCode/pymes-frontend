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
    return (
        <div className="w-full flex flex-col items-start justify-center bg-light">
            <div className="w-full h-full flex flex-row  p-4">
            <div className="h-fit w-full bg-white mr-2 border rounded-lg shadow-lg p-4" >
                <p className="flex justify-center items-center text-xl font-sans font-bold">Progreso</p>
                <div className="flex flex-row justify-between items-baseline" >
                <h1 className="text-4xl font-sans font-bold mb-1 mt-2">Hoja de ruta</h1>
                <ProgressRoadMap/>
                <div className="flex flex-row justify-between items-baseline">
                <p className="text-lg font-sans font-light mb-4 mr-2">Inicio de la hoja de ruta:</p>
                <p className="pr-4 pl-4 rounded text-white bg-slate-500 inline-block w-fit h-fit">8 de marzo del 2024</p>
                </div>
                </div>
                <p className="mt-4">La herramienta Hoja de Ruta proporciona recomendaciones y pasos específicos para que las empresas avancen hacia el siguiente nivel de madurez en cada dimensión de su transformación digital, adaptadas al contexto empresarial colombiano y diseñadas para impulsar la competitividad y sostenibilidad de las Pymes en un mercado cada vez más digitalizado.</p>
            </div>
            </div>
            {dimensionsRecommendations.map((dimensionRecommendation, index) => (
                <RoadMapRecommendation key={index} dimension={dimensionRecommendation.dimension} description={dimensionRecommendation.description} recommendations={dimensionRecommendation.recommendations}/>
             ))}
        </div>
    )
}