'use client';
import AdminHome from "@/components/admin/AdminHome";
import PageTemplate from "@/components/ui/PageTemplate";
import { useRouter } from "next/navigation";





const page = () => {
  return (
    <PageTemplate>
      <AdminHome/>
    </PageTemplate>
  );
}

export default page;