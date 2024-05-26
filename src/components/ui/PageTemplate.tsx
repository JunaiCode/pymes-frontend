'use client';
import AdminSidebar from '../admin/AdminSidebar';
import CompanySideBar from '../company/CompanySideBar';

export default function PageTemplate({ children }: { children: any }) {
  let userType = 'company';
  if (userType === 'admin') {
    return (
      <div className="flex flex-row">
        <AdminSidebar />
        <div className="flex flex-col w-full">
          {children}
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-row">
        <CompanySideBar />
        <div className="flex flex-col w-full">
          {children}
        </div>
      </div>
    );
  }
}
