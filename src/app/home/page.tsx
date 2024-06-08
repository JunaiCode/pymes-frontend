'use client';

import AdminHome from "@/components/admin/AdminHome";
import CompanyHome from "@/components/company/CompanyHome";
import PageTemplate from "@/components/ui/PageTemplate";
import WelcomeScreen from "@/components/company/WelcomeScreen";
import { useEffect, useState } from "react";
import { getCompanyInfo } from '@/services/companyService';
import { CompanyInfo } from '../../../utils/types';

const Page: React.FC = () => {
  const [userId, setUserId] = useState<string | null>(null);
  const [userType, setUserType] = useState<string | null>(null);
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if(typeof window != 'undefined'){
    const user = localStorage.getItem('user');
    if (user) {
      const parsedUser = JSON.parse(user);
      setUserId(parsedUser.id);
      setUserType(parsedUser.role);

      getCompanyInfo(parsedUser.id).then((data) => {
        setCompanyInfo(data);
        setLoading(false);
      }).catch(() => {
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }
  }, []);



  const hasCompletedEvaluation = companyInfo?.currentEvaluation && companyInfo.currentEvaluation.length > 0;

  return (
    <PageTemplate>
      {userType === "admin" ? (
        <AdminHome />
      ) : (
        hasCompletedEvaluation ? (
          <div className="flex flex-col w-full h-full">
            <CompanyHome companyInfo={companyInfo} />
          </div>
        ) : (
          <WelcomeScreen />
        )
      )}
    </PageTemplate>
  );
};

export default Page;
