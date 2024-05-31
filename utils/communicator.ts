import axios from 'axios';

export const GetInfo = async (url: string) => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}${url}`);
    console.log('Response data:', response.data); // <-- Log the response data
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error fetching data:', error.message); // <-- Log the error
      throw new Error(`Axios error fetching data: ${error.message}`);
    } else {
      console.error('Unknown error fetching data:', error); // <-- Log the error
      throw new Error(`Unknown error fetching data: ${(error as Error).message}`);
    }
  }
}
