import axios from 'axios';

const getUpperBodyData = async () => {
  try {
    const response = await axios.get('https://reqres.in/api/users');
    return response.data.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export default getUpperBodyData;