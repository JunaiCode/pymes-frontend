import { IconType } from "react-icons";
import { IoHelpCircleOutline } from "react-icons/io5";

interface DimensionsCardProps {
  color: string;
  title: string;
  level: string;  
  icon: IconType;
}

export default function DimensionsCard(props: DimensionsCardProps) {
  return (
    <div className="flex flex-row items-center rounded m-2 w-40"> 
      <div className={`flex flex-col items-center justify-between w-full ${props.color} rounded-lg gap shadow-md`}>
        <div className="flex flex-row items-center w-full justify-center">
          <div className="p-2 rounded-lg">
            {props.icon({ className: `text-white`, size: 20 })} 
          </div>
          <p className="font-sans font-bold text-white text-md mr-2">{props.title}</p> 
        </div>
        <p className="font-sans font-bold text-white text-3xl p-2 rounded-lg">{props.level}</p> 
        <div className="flex flex-row justify-end w-full">
          <IoHelpCircleOutline className="text-white m-2" size={16} /> 
        </div>
      </div>
    </div>
  );
}
