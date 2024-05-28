'use client';
import AdminHome from "@/components/admin/AdminHome";
import CompanyHome from "@/components/company/CompanyHome";
import PageTemplate from "@/components/ui/PageTemplate";
import ComparisonWithSector from "@/components/company/ComparisonWithSector";
import WelcomeScreen from "@/components/company/WelcomeScreen";
import { useRouter } from "next/navigation";

const page = () => {
  let string = localStorage.getItem("user");
  let user = string ? JSON.parse(string) : null;
  let userType = user ? user.role : null;

  let hasCompletedEvaluation = true;

  if (userType === "admin") {
    return (
      <PageTemplate>
        <AdminHome />
      </PageTemplate>
    );
  } else {
    return (
      <PageTemplate>
        {hasCompletedEvaluation ? (
          <div className="flex flex-col w-full">
            <CompanyHome />
            <ComparisonWithSector />
          </div>
        ) : (
          <WelcomeScreen />
        )}
      </PageTemplate>
    );
  }
};

export default page;
