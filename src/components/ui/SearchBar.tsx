import { IoIosSearch } from "react-icons/io";



export default function SearchBar() {
    return (
        <div className="w-64 flex flex-row items-start rounded-lg justify-start border border-gray-300 left-0">
            <div className="p-1.5 rounded-tl-lg rounded-bl-lg bg-gray-400">
                <IoIosSearch size={24} className="text-gray-700"/>
            </div>
            <div className="flex grow-0">
                <input type="text" className="w-full p-1.5 rounded-tr-lg rounded-br-lg bg-gray-100" />
            </div>
        </div>
    )
}

