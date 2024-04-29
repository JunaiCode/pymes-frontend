import { IconType } from "react-icons";
import {IoHelpCircleOutline  } from "react-icons/io5";
interface DimensionsCardProps {
    color: string,
    title: string,
    score: number,
    icon: IconType,
}

export default function DimensionsCard(props: DimensionsCardProps) {
    return (
        <div className="flex flex-col items-center rounded m-2 w-36">
            <div className={`flex flex-col items-center justify-between w-full  ${props.color} rounded-lg gap shadow-md`}>
                <div className="flex flex-row items-center w-full">
                    <div className="p-2 rounded-lg">
                        {props.icon({ className: `text-white`, size: 25 })}
                    </div>
                    <p className="font-sans font-bold text-white text-lg">{props.title}</p>
                </div>
                <p className="font-sans font-bold text-white text-5xl p-2 rounded-lg
                ">{props.score}</p>
                <div className="flex flex-row justify-end w-full">
                    <IoHelpCircleOutline  className="text-white m-2" size={20} />
                </div>
            </div>
        </div>
    );
}