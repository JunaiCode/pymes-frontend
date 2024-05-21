import { IoConstructOutline, IoDesktopOutline, IoPeopleOutline } from "react-icons/io5";
import { FaGlobe, FaPuzzlePiece } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { RecommendationComponent } from "./RecommendationComponent";
import { useState, useEffect } from "react";

type Recommendation = {
    title: string;
    description: string;
    checked: boolean;
    tag: string;
}

interface Props {
    dimension: string;
    description: string;
    recommendations: Recommendation[];
    handleCheck: (e: any) => void;
}
export const RoadMapRecommendation = ({ dimension, description, recommendations, handleCheck }: Props) => {
    const [completedCount, setCompletedCount] = useState(0);

    useEffect(() => {
        const completed = recommendations.filter(rec => rec.checked).length;
        setCompletedCount(completed);
    }, [recommendations]);

    return (
        <div className="w-full h-full flex flex-row p-4">
            <div className="h-full w-full bg-white mr-2 border rounded-lg shadow-lg p-4">
                <div className="flex flex-row justify-between items-center w-full">
                    <div className="flex flex-row justify-start gap-2 items-center w-fit">
                        <div className="flex justify-center items-baseline">
                        <p className="text-3xl font-sans font-bold  mb-1 mt-2 mr-6 text-primary">{dimension}</p>
                        <div className="flex flex-row items-center gap-2">
                        <p className="text-lg font-sans text-gray-500">
                            {completedCount}/{recommendations.length} completado{recommendations.length > 1 ? "s" : ""}
                        </p>
                        {completedCount === recommendations.length && <FaCheck className="text-green-500" size={24} />}
                    </div>
                    </div>
                    </div>
                </div>
                <div className="mt-4">
                    <p className="font-sans text-xl font-semibold">{description}</p>
                </div>
                {recommendations.map((recommendation, index) => (
                    <RecommendationComponent
                        key={index}
                        dimension={dimension}
                        description={recommendation.description}
                        index={index.toString()}
                        tag={recommendation.tag}
                        handleCheck={handleCheck}
                    />
                ))}
            </div>
        </div>
    );
};
