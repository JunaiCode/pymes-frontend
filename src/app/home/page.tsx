"use client";

import AdminHome from "@/components/admin/AdminHome";
import CompanyHome from "@/components/company/CompanyHome";
import PageTemplate from "@/components/ui/PageTemplate";
import WelcomeScreen from "@/components/company/WelcomeScreen";
import { useEffect, useState } from "react";
import { getCompanyInfo } from '@/services/companyService';
import { CompanyInfo } from '../../../utils/types';

const mockCompanyInfo: CompanyInfo = {
  name: "Bancolombia",
  employees: 5000,
  companyType: { companyTypeId: "1", name: "Finance", description: "Finance" },
  economicSectorId: "1",
  currentEvaluation: [
    { dimensionId: "1", dimensionName: "Procesos", levelId: "1", levelName: "Nivel 1", levelValue: 2 },
    { dimensionId: "2", dimensionName: "Información", levelId: "1", levelName: "Nivel 1", levelValue: 1 },
    { dimensionId: "3", dimensionName: "Tecnología", levelId: "1", levelName: "Nivel 1", levelValue: 3 },
    { dimensionId: "4", dimensionName: "Personas", levelId: "1", levelName: "Nivel 1", levelValue: 2 }
  ],
  evaluationHistory: [
    {
      date: "2023-01-01",
      dimensionResults: [
        { dimensionId: "1", dimensionName: "Procesos", levelId: "1", levelName: "Nivel 1", levelValue: 2 },
        { dimensionId: "2", dimensionName: "Información", levelId: "1", levelName: "Nivel 1", levelValue: 1 },
        { dimensionId: "3", dimensionName: "Tecnología", levelId: "1", levelName: "Nivel 1", levelValue: 3 },
        { dimensionId: "4", dimensionName: "Personas", levelId: "1", levelName: "Nivel 1", levelValue: 2 }
      ]
    },
    {
      date: "2023-02-01",
      dimensionResults: [
        { dimensionId: "1", dimensionName: "Procesos", levelId: "1", levelName: "Nivel 1", levelValue: 3 },
        { dimensionId: "2", dimensionName: "Información", levelId: "1", levelName: "Nivel 1", levelValue: 2 },
        { dimensionId: "3", dimensionName: "Tecnología", levelId: "1", levelName: "Nivel 1", levelValue: 2 },
        { dimensionId: "4", dimensionName: "Personas", levelId: "1", levelName: "Nivel 1", levelValue: 1 }
      ]
    }
  ]
};

const Page: React.FC = () => {
  const userType: string = "company";
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo | null>(null);
  const [hasCompletedEvaluation, setHasCompletedEvaluation] = useState(false);

  useEffect(() => {
    // Utilizar datos ficticios
    setCompanyInfo(mockCompanyInfo);
    setHasCompletedEvaluation(mockCompanyInfo.currentEvaluation.length > 0);
  }, []);

  if (!companyInfo) {
    return <div>Loading...</div>;
  }

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
