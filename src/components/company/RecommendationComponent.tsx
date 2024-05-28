import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useState } from "react";

interface RecommendationProps {
  recommendationId: string;
  description: string;
  tagName: string;
  index: string;
  dimension: string;
  checked: boolean;
  steps: {
    recommendationActionPlanId
    : string;
    description: string;
    checked: boolean;
}[];
  handleCheck: (e: any) => void;
}

export const RecommendationComponent = ({
  description,
  tagName,
  index,
  dimension,
  steps,
  checked,
  handleCheck,
  recommendationId
}: RecommendationProps) => {
  const [hidden, setHidden] = useState(true);
  return (
    <>
      <hr className="mt-4 rounded bg-[#EAEFFF]" />
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-4">
        <div className="flex flex-row justify-center items-baseline gap-2">
          {hidden ? (
            <FaAngleDown
              className="text-primary cursor-pointer"
              size={24}
              onClick={() => {
                let ul = document.getElementById(`${dimension}-${index}`);
                if (ul?.classList.contains("hidden")) {
                  ul?.classList.remove("hidden");
                  setHidden(false);
                } else {
                  ul?.classList.add("hidden");
                  setHidden(true);
                }
              }}
            />
          ) : (
            <FaAngleUp
              className="text-primary cursor-pointer"
              size={24}
              onClick={() => {
                let ul = document.getElementById(`${dimension}-${index}`);
                ul?.classList.add("hidden");
                setHidden(true);
              }}
            />
          )}
          <p className={`text-lg font-medium font-sans decoration-slate-500  ${checked?'line-through':''}`}>{description}</p>
        </div>
        <div className="flex justify-evenly items-center h-12 w-48 px-4 mt-2 sm:mt-0 bg-secondary_old rounded-full  break-words">
          <span className="bg-white rounded-full w-2 h-2 mr-2"></span>
          <p className="text-sm text-white">{tagName}</p>
        </div>
      </div>
      <ul
        id={`${dimension}-${index}`}
        className={`${hidden ? "hidden" : ""} ml-8 mt-4`}
      >
        <p className="text-base font-medium mb-2 font-sans">Pasos a realizar:</p>
        <div className="flex w-5/6 flex-col justify-start gap-4">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-row items-center gap-2">
            <input
              type="checkbox"
              onClick={handleCheck}
              id={`${recommendationId}/${step.recommendationActionPlanId
              }`}
              defaultChecked={step.checked}
              className="peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 transition-all 
              before:content[''] before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 
              before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 
              before:opacity-0 before:transition-opacity checked:border-primary checked:bg-primary 
              checked:before:bg-primary hover:before:opacity-10"
            />
            <li className='ml-4 text-base font-sans'>{step.description}</li>
          </div>
        ))}
        </div>
      </ul>
    </>
  );
};
