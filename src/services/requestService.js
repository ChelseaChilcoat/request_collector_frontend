import axios from 'axios';
//fix me
const  baseUrl = 'https://5506-98-117-243-154.ngrok.io/bin/1';

const getAllEndpoints = () => {
  const request = axios.get(baseUrl);
  return request.then(response => response.data);
};

const createNewEndpoint = async () => {
  const response = await axios.post(baseUrl)
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
