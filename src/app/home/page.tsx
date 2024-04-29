'use client';
import AdminHome from "@/components/admin/AdminHome";
import CompanyHome from "@/components/company/CompanyHome";
import PageTemplate from "@/components/ui/PageTemplate";
import { useRouter } from "next/navigation";

const page = () => {
  let userType = "company";
  if (userType === "admin") {
    return (
      <PageTemplate>
        <AdminHome/>
      </PageTemplate>
    );
  }else{
    return (
      <PageTemplate>
        <CompanyHome/>
      </PageTemplate>
    );
  }
}

export default page;