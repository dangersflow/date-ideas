import axios from 'axios';

// Define a default query function that will receive the query key
export const defaultQueryFn = async ({ queryKey }) => {
  const { data } = await axios.get(`http://${process.env.API_URL}/api${queryKey[0]}`);
  return data;
};
