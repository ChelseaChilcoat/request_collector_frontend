import axios from 'axios';
const  baseUrl = '/api/';

const getAllEndpoints = () => {
  const request = axios.get(baseUrl);
  return request.then(response => response.data);
};

const createNewEndpoint = async (newObject) => {
  const response = await axios.post(baseUrl, newObject)
  return response.data;
};

const removeEndpoint = async (endpointId) => {
  axios.delete(`${baseUrl}/${endpointId}`);
};

const getAllRequests = (endpointId) => {
  const request = axios.get(`${baseUrl}/postgres`);
  return request.then(response => JSON.parse(response.data));
};

const requestService = { getAllEndpoints,
                         createNewEndpoint,
                         removeEndpoint,
                         getAllRequests,
                        };

export default requestService;