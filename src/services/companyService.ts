import { GetInfo } from '../../utils/communicator';
import { CompanyInfo } from '../../utils/types';

export const getCompanyInfo = async (companyId: string): Promise<CompanyInfo> => {
  try {
    const data = await GetInfo(`/company/get/${companyId}`);
    console.log('Company Info data:', data);
    return data as CompanyInfo;
  } catch (error) {
    console.error('Error fetching company info:', error);
    throw error;
  }
};
