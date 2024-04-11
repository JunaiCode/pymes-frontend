import AdminSidebar,{SidebarItem} from "@/components/admin/AdminSidebar";


import {
  IoHomeOutline, IoShapesOutline, IoBusiness,
  IoPricetagOutline, IoColorFilterOutline,
  IoPodiumOutline, IoHelpCircleOutline,
  IoAnalytics 
} from "react-icons/io5";




function adminHome() {
  let userType = "admin";
  if (userType === "admin") {
    return (
      <div>
        <AdminSidebar>
          <SidebarItem icon={<IoHomeOutline size={25} className="text-white" />} text="Inicio" route="/home" />
          <SidebarItem icon={<IoShapesOutline size={25} className="text-white" />} text="Modelo" route="/model" />
          <SidebarItem icon={<IoBusiness size={25} className="text-white" />} text="Empresas" route="/companies" />
          <SidebarItem icon={<IoPricetagOutline size={25} className="text-white" />} text="Tags" route="/tags" />
          <SidebarItem icon={<IoColorFilterOutline size={25} className="text-white" />} text="Dimensiones" route="/colors" />
          <SidebarItem icon={<IoPodiumOutline size={25} className="text-white" />} text="Niveles" route="/levels" />
          <SidebarItem icon={<IoHelpCircleOutline size={25} className="text-white" />} text="Preguntas" route="/questions" />
          <SidebarItem icon={<IoAnalytics size={25} className="text-white" />} text="Reportes" route="/reports" />
        </AdminSidebar>

      </div>
    );
  }

  return (
    <div>
      <h1>User home

      </h1>
    </div>
  );
}

export default adminHome;