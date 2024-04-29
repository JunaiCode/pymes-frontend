import { IconType } from "react-icons";

interface DimensionsCardProps {
    color: string,
    title: string,
    score: number,
    icon: IconType,
}

export default function DimensionsCard(props: DimensionsCardProps) {
    return (
        <div className="flex flex-col items-center rounded m-2">
            <div className={`flex flex-row items-center justify-between w-full p-8 bg-black rounded-lg gap shadow-md`}>
                <div className="flex flex-row items-center">
                    <div className="p-2 rounded-lg">
                        {props.icon({ className: `text-white`, size: 25 })}
                    </div>
                    <p className="font-sans font-bold text-white text-lg ml-2">{props.title}</p>
                </div>
                <p className="font-sans font-bold text-white text-lg-200 p-2 rounded-lg
                ">{props.score}</p>
            </div>
        </div>
    );
}