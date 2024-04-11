'use client'
import { useRouter } from "next/navigation";
import { IoArrowBackOutline,IoArrowForward} from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { createContext, useState } from "react";
import React, {useContext} from 'react';

const SidebarContext = createContext({ expanded: true, setExpanded: (expanded: boolean) => {} });

export default function AdminSidebar({ children }: { children: any }){
    const router = useRouter();
    const [expanded, setExpanded] = useState(true);
    return (
        <>
            <aside className={`h-screen flex flex-col bg-dark_bg transition-all duration-300 ease-in-out ${expanded ? "w-52" : "w-20"}`}>
                <div className="p-4 pb-8 flex justify-between items-center">
                    <p className={`font-sans font-bold text-white text-2xl mx-2
                        overflow-hidden transition-all ${expanded ? "w-full" : "w-0"}
                    `}>Logo</p>
                    <button className="hover:bg-secondary p-2 rounded-full transition-colors duration-100 ease-in-out"
                        onClick={() => setExpanded(!expanded)}
                    >
                        {expanded ?  <IoArrowForward className="text-white transform rotate-180" />: <IoArrowBackOutline className="text-white transform rotate-180" /> }
                    </button>
                </div>

                <SidebarContext.Provider value={{ expanded, setExpanded }}>
                    <ul className="flex flex-col items-center ">
                        {children}
                    </ul>
                </SidebarContext.Provider>

                <div className="flex justify-center items-center p-4">
                    <button
                        className={`flex flex-row ${expanded ? "justify-between bg-primary" : "justify-center"} items-center
                         hover:bg-dark_bg_hover p-2 rounded-lg duration-100 px-3
                          transition-all`}
                    >
                        <IoIosLogOut size={25} className={`text-white ${expanded ? "mr-2" : ""}` } />
                        {expanded ? <p className="text-white text-lg ">Salir</p> : null}
                        
                    </button>
                </div>
            </aside>



        </>
    )
}



interface SidebarItemProps {
    icon: JSX.Element;
    text: string;
    route: string;
}

export function SidebarItem({icon, text, route}: SidebarItemProps){
    const {expanded} = useContext(SidebarContext);
    return (
        <li className="w-full px-3">
            <button className="flex flex-row px justify-start items-start hover:bg-dark_bg_hover rounded-lg transition-colors duration-300 ease-in-out
            h-fit w-full px-3 py-1.5 my-4">
                {icon}
                {expanded ? <p className={`text-white text-lg mx-3 overflow-hidden transition-all `}>{text}</p> : null}
                
            </button>

        </li>
    );
}

