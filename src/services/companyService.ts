import { GetInfo } from '../../utils/communicator';

export const getCompanyInfo = async (companyId: string) => {
  try {
    const data = await GetInfo(`/company/get/${companyId}`);
    return data;
  } catch (error) {
    console.error('Error in getCompanyInfo:', error); // <-- Log the error
    throw error;
  }
}

