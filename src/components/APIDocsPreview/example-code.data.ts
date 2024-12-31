export const EXAMPLE_CODE = `
import axios from 'axios';

const fetchData = async () => {
  try {
    const response = await axios.get('https://api.example.com/v1/resource', {
      headers: {
        Authorization: 'Bearer YOUR_API_KEY',
      },
    });
    console.log(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

fetchData();
`
