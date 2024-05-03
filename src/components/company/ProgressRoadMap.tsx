export const ProgressRoadMap = () => {
    return (
        <div className="w-1/2 flex flex-col justify-center items-center">
        <p className="text-center">Tu progreso</p>
        <progress className="w-full rounded-xl" value="20" max="100"/>
        </div>
    )
};