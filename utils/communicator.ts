import axios from 'axios';

export const GetInfo = async (url: string) => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}${url}`);
    console.log('Response data:', response.data);  // <-- Log 
    return response.data;
  } catch (error) {
    console.error('Error in GetInfo:', error);
    throw error;
  }
};
