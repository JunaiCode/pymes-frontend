import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useState } from "react";

interface RecommendationProps {
  description: string;
  tag: string;
  index: string;
  dimension: string;
  handleCheck: (e: any) => void;
}
export const RecommendationComponent = ({
  description,
  tag,
  index,
  dimension,
  handleCheck,
}: RecommendationProps) => {
  const [hidden, setHidden] = useState(true);
  return (
    <>
      <hr className="mt-4 rounded bg-[#EAEFFF] p-0.5" />
      <div className="flex flex-row justify-between items-center mt-4">
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
          <p className="text-xl">{description}</p>
        </div>
        <div className="h-14 w-64  bg-[url(/tag.svg)] bg-no-repeat bg-cover flex justify-evenly items-center">
          <span className="bg-white rounded-full w-2 h-2"></span>
          <p className="text-[#00000067]">{tag}</p>
        </div>
      </div>
      <ul
        id={`${dimension}-${index}`}
        className={`${hidden ? "hidden" : ""} ml-8`}
      >
        <p className="text-xl mb-2">Pasos a realizar:</p>
        <div className="flex w-5/6 justify-start items-center">
          <input
            type="checkbox"
            onClick={handleCheck}
            className="
      before:content[''] 
      peer relative h-5 w-5 cursor-pointer 
      appearance-none rounded-full border border-blue-gray-200 transition-all 
      before:absolute before:top-2/4 before:left-2/4 before:block 
      before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 
      before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity 
      checked:border-primary checked:bg-primary checked:before:bg-primary 
      hover:before:opacity-10"
            id="amber"
          />
          <li className="ml-4">Definir objetivos claros</li>
        </div>
      </ul>
    </>
  );
};
