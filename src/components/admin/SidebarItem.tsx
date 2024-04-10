


const SidebarItem = ({ icon, text, route }) => {
    return (
        <li>
            <button className="flex flex-row items-center hover:bg-dark_bg_hover p-2 rounded-lg transition-colors duration-100 ease-in-out px-6 bg-primary">

                {icon}
                <p className="text-white text-lg">{text}</p>
            </button>

        </li>
    );
}

export default SidebarItem;