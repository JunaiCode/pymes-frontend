'use client'
import AdminSidebar from "../admin/AdminSidebar";
import CompanySideBar from "../company/CompanySideBar";

export default function PageTemplate({children}: {children: any}){
    let userType = "company";
    if (userType === "admin") {
        return (
            <div className="flex flex-row">
            <AdminSidebar/>
            {children}
            </div>
        );
    }else{
        console.log("Company");
        return (
            <div className="flex flex-row">
            <CompanySideBar/>
                {children}
            </div>
        );
    }
}