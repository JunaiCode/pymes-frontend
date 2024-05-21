import { useEffect, useState } from "react";

export const ProgressRoadMap = ({ percentage }: any) => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const roadmapTop = (document.querySelector('.ProgressRoadMap-sticky') as HTMLElement)?.offsetTop;
            setIsSticky(window.scrollY > roadmapTop);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const roadmapStyles = isSticky ? 'fixed top-0 ' : '';

    return (
        <div className={`ProgressRoadMap-sticky h-24 rounded-b-md w-1/2 z-50 bg-dark_bg border-b border-gray-300 p-4 flex flex-col justify-center items-center m-0  ${roadmapStyles}`}>
            <div className="flex justify-start w-full">
            <div className="flex flex-row justify-between items-baseline">
                                <p className={`text-lg font-sans text-white  font-light mb-4 mr-2`}>Inicio de la hoja de ruta:</p>
                                <p className="pr-4 pl-4 rounded text-white bg-secondary_old inline-block w-fit h-fit">8 de marzo del 2024</p>
            </div>
            </div>
            <div className="flex w-full m-0 p-0 justify-start items-baseline gap-2">
            <p className={`text-lg font-sans text-white`}>Mi progreso</p>
            <div className="w-3/4 bg-gray-200 rounded-full h-2.5 barbar">
                <div className="bg-primary h-2.5 rounded-full" style={{ width: `${percentage}` }}></div>
            </div>
            </div>
        </div>
    );
};
