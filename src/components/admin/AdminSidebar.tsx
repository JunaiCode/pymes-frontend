'use client'
import { useRouter } from "next/navigation";
import { IoMdArrowBack } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";



const AdminSidebar = ({children}: {children: any}) => {
    const router = useRouter();
    return (
        <>
            <aside className="h-screen flex flex-col bg-dark_bg max-w-40">
                <div className="p-4 pb-2 flex justify-between items-center">
                    <p className="font-sans font-bold text-white text-2xl">Logo</p>
                    <button className=" hover:bg-secondary p-2 rounded-full transition-colors duration-100 ease-in-out" >
                        <IoMdArrowBack className="text-white " />
                    </button>
                </div>

                <ul className="flex-1 px-3">{children}</ul>

                <div className="flex justify-center items-center p-4">
                    <button 
                        className="flex flex-row justify-between items-center
                         hover:bg-dark_bg_hover p-2 rounded-lg transition-colors duration-100 ease-in-out px-6
                         bg-primary"
                    >
                        <IoIosLogOut size={25} className="text-white mr-4"/>
                        <p className="text-white text-lg">Salir</p>
                    </button>
                </div>
            </aside>

           

        </>
    )
}

export default AdminSidebar;

export function SidebarItem({icon, text, route}) {
    return (
        <li >
            {icon}
            <p className="text-white ml-4">{text}</p>
        </li>
    )
}