import AdminSidebar from "@/components/admin/AdminSidebar";
import SidebarItem from "@/components/admin/SidebarItem";

import { IoMdHome, IoMdPerson, IoMdSettings } from "react-icons/io";

function adminHome() {
  let userType = "admin";
  if(userType === "admin") {
    return (
      <div>
        <AdminSidebar>
          <SidebarItem icon={<IoMdHome size={25} className="text-white"/>} text="Home" route="/admin" />

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