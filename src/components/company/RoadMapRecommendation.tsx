import { IoConstructOutline, IoDesktopOutline, IoPeopleOutline } from "react-icons/io5";
import { FaGlobe, FaPuzzlePiece } from "react-icons/fa";
import  Image  from "next/image";
import { RecommendationComponent } from "./RecommendationComponent";

interface recommendation{
    title: string;
    description: string;
    tag: string;
}


interface props {
    dimension: string;
    description: string;
    recommendations: recommendation[];
}

export const RoadMapRecommendation = ({dimension, description, recommendations}:props) => {
    return (
        <div className="w-full h-full flex flex-row  p-4">
            <div className="h-full w-full bg-white mr-2 border rounded-lg shadow-lg p-4" >
                <div className="flex flex-row justify-start items-center">
                <p className="text-3xl font-sans font-bold mb-1 mt-2 mr-6">{dimension}</p>
                {dimension === "Tecnología" ? <IoDesktopOutline size={40}/> : null}
                {dimension === "Procesos" ? <IoConstructOutline size={40}/> : null}
                {dimension === "Personas" ? <IoPeopleOutline size={40}/> : null}
                {dimension === "Cultura" ? <FaGlobe/> : null}
                {dimension === "Estrategia" ? <FaPuzzlePiece size={40}/> : null}
                </div>
                <div className="flex flex-row justify-start items-center mt-4">
                    <Image src={"./next.svg"}  width={500} height={500} alt="roadmap"/>
                    <p className="ml-4">{description}</p>
                </div>
                {recommendations.map((recommendation, index) => (
                    <RecommendationComponent key={index} title={recommendation.title} description={recommendation.description} tag={recommendation.tag}/>
                ))}
            </div>
        </div>
    )
}