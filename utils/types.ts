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

export interface CompanyType {
  companyTypeId: string;
  name: string;
  description: string;
}

export interface CompanyInfo {
  name: string;
  employees: number;
  companyType: CompanyType;
  economicSectorId: string;
  currentEvaluation: DimensionResult[];
  evaluationHistory: Evaluation[];
}
