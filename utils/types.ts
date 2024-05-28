export interface DimensionResult {
  dimensionId: string;
  dimensionName: string;
  levelId: string;
  levelName: string;
  levelValue: number;
}

export interface Evaluation {
  date: string;
  dimensionResults: DimensionResult[];
}

export interface CompanyInfo {
  name: string;
  employees: number;
  companyType: {
    companyTypeId: string;
    name: string;
    description: string;
  };
  economicSectorId: string;
  currentEvaluation: DimensionResult[]; 
  evaluationHistory: Evaluation[];
}
