'use client';
import AdminSidebar from '../admin/AdminSidebar';
import CompanySideBar from '../company/CompanySideBar';

export default function PageTemplate({ children }: { children: any }) {
  let userType = 'company';
  if (userType === 'admin') {
    return (
      <div className="flex">
        <AdminSidebar />
        <div className="ml-64 w-full p-4">
          {children}
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex">
        <CompanySideBar />
        <div className="ml-64 w-full p-4">
          {children}
        </div>
      </div>
    );
  }
}
