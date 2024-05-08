import Image from "next/image";



interface RecommendationProps{
    description: string;
    tag: string;
    handleCheck: (e:any)=>void;
}
export const RecommendationComponent = ({description,tag,handleCheck}:RecommendationProps) => {
    return(
        <>
        <hr className="mt-4 rounded bg-[#EAEFFF] p-0.5" />
        <div className="flex flex-row justify-between items-center mt-4">
            <p className="mt-4">{description}</p>
            <div className="flex flex-col justify-center items-center gap-8 ">
            <div className="bg-[url(/tag.svg)] w-64 h-14 bg-no-repeat bg-cover flex justify-evenly items-center">
            <span className="bg-white rounded-full w-2 h-2"></span>
            <p className="text-[#00000067]">{tag}</p>
            </div>
            <input type="checkbox" onClick={handleCheck}
            className="before:content[''] ml-4 peer relative h-8 w-8 cursor-pointer appearance-none rounded-full border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-primary checked:bg-primary checked:before:bg-primary hover:before:opacity-10"
            id="amber"/>
        </div>
        </div>
        </>
    )
};