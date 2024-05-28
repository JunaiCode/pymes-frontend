'use client';
import AdminSidebar from '../admin/AdminSidebar';
import CompanySideBar from '../company/CompanySideBar';
import { useRouter } from 'next/navigation';

export default function PageTemplate({ children }: { children: any }) {
  let router = useRouter();
  let string = localStorage.getItem("user");
  let user = string ? JSON.parse(string) : null;
  let userType = user ? user.role : null;
  
  if (userType === 'admin') {
    return (
      <div className="flex">
        <AdminSidebar />
        <div className="flex flex-col w-full ">
          {children}
        </div>
      </div>
    );
  } else if (userType === 'company') {
    return (
      <div className="flex">
        <CompanySideBar />
        <div className="ml-64 w-full p-4">
          {children}
        </div>
      </div>
    );
  }else{
    router.push('/')
  }

}
