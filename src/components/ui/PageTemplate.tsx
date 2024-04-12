'use client'
import AdminSidebar from "../admin/AdminSidebar";

export default function PageTemplate({children}: {children: any}){
    let userType = "admin";
    if (userType === "admin") {
        return (
            <div className="flex flex-row">
            <AdminSidebar/>
            {children}
            </div>
        );
    }else{
        return (
            <div className="flex flex-row">
                {children}
            </div>
        );
    }
}