export const ProgressEvaluation = ({percentage}:any) => {
    return (
    <div className={`ProgressRoadMap-sticky w-full flex flex-col justify-center items-center`}>
    <div className="w-full bg-gray-200 rounded-full h-2.5 barbar">
    <div className={`bg-primary h-2.5 rounded-full`} style={{ width: `${percentage}` }}></div>
    </div>
    </div>
    )
};