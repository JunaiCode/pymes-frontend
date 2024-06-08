'use client';
import { useEffect, useState } from 'react';
import AdminSidebar from '../admin/AdminSidebar';
import CompanySideBar from '../company/CompanySideBar';
import { useRouter } from 'next/navigation';

export default function PageTemplate({ children }: { children: any }) {
  let router = useRouter();
  const [user, setUser] = useState(null);
  const [userType, setUserType] = useState(null);
  useEffect(() => {
    if(typeof window !== 'undefined'){
    const user = localStorage.getItem("user");
    if(user){
      setUser(JSON.parse(user));
      setUserType(JSON.parse(user).role);
    }
  }
  }, []);
  
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
        <div className="ml-64 w-full p-4 bg-light">
          {children}
        </div>
      </div>
    );
  }else{
    router.push('/')
  }

}