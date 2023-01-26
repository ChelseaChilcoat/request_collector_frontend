import axios from 'axios';
//fix me
const  baseUrl = 'http://localhost:4000/bin/1';

const getAllEndpoints = () => {
  const request = axios.get(baseUrl);
  return request.then(response => response.data);
};

const createNewEndpoint = async () => {
  // const response = await axios.post(baseUrl)
  try {
      const response = await fetch('${baseUrl}/endpoint', {
          method: 'POST',
          // body: JSON.stringify({ endpoint }),
          // headers: { 'Content-Type': 'application/json' },
      });
      const data = await response.json();
      console.log(data)
  } catch (err) {
      console.error(err);
  }
  // const response = await axios.post(baseUrl, newObject)
  return response.data;
};

// const removeEndpoint = async (endpointId) => {
//   axios.delete(`${baseUrl}/${endpointId}`);
// };

const getAllRequests = (endpoint) => {
  const request = axios.get(`${baseUrl}/endpoint/${endpoint}`);
  return request.then(response => JSON.parse(response.data));
};

const requestService = { getAllEndpoints,
                         createNewEndpoint,
                         getAllRequests,
                        };

export default requestService;
