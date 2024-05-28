'use client';
import AdminSidebar from '../admin/AdminSidebar';
import CompanySideBar, { SidebarContext } from '../company/CompanySideBar';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';

export default function PageTemplate({ children }: { children: any }) {
  const router = useRouter();
  const string = localStorage.getItem("user");
  const user = string ? JSON.parse(string) : null;
  const userType = user ? user.role : null;
  const { expanded } = useContext(SidebarContext);

  if (userType === 'admin') {
    return (
      <div className="flex h-screen">
        <AdminSidebar />
        <div className="flex flex-col w-full h-full overflow-auto">
          {children}
        </div>
      </div>
    );
  } else if (userType === 'company') {
    return (
      <div className="flex h-screen">
        <CompanySideBar />
        <div className={`flex flex-col w-full h-full overflow-auto p-4 transition-all duration-300 ease-in-out ${expanded ? 'ml-64' : 'ml-20'}`}>
          {children}
        </div>
      </div>
    );
  } else {
    router.push('/');
    return null;
  }
}
