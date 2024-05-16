import { useEffect, useState } from "react";

export const ProgressRoadMap = ({percentage}:any) => {

    const [isSticky, setIsSticky] = useState(false);

useEffect(() => {
    const handleScroll = () => {
        const roadmapTop = (document.querySelector('.ProgressRoadMap-sticky') as HTMLElement)?.offsetTop; // Use type assertion to access offsetTop
        setIsSticky(window.scrollY > roadmapTop);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
}, []);
const roadmapStyles = isSticky ? 'fixed top-2 left-1/4' : null;
    return (
    <div className={`ProgressRoadMap-sticky w-1/2 flex flex-col justify-center items-center ${roadmapStyles}`}>
    <div className="w-full bg-gray-200 rounded-full h-2.5 barbar">
    <div className={`bg-primary h-2.5 rounded-full`} style={{ width: `${percentage}` }}></div>
    </div>
    </div>
    )
};