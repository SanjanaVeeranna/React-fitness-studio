import axios from 'axios';

const getUpperBodyData = async () => {
  try {
    const response = await axios.get('https://reqres.in/api/users');
    return response.data.data; // Assuming the user data is under the 'data' key
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export default getUpperBodyData;