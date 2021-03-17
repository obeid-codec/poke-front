import Axios from 'axios'
const getApiData = (url) => {
    try {
      return Axios.get(url);
      
    } catch (error) {
        console.error(error)
    }
  };

export { getApiData };