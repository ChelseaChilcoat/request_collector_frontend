import axios from 'axios';
//fix me
const  baseUrl = 'http://localhost:4000';

const getAllEndpoints = () => {
  const request = axios.get(baseUrl);
  return request.then(response => response.data);
};

const createEndpoint = async (endpoint) => {
  const params = { endpoint };
  console.log("params", params)

  try {
    const response = await axios.post(`${baseUrl}/create`, params);
    console.log(response);
    return "just_filler";
  } catch (error) {
    console.log(error);
  }
};

const removeEndpoint = async (endpointId) => {
  await axios.delete(`${baseUrl}/${endpointId}`);
};

const getAllRequests = (endpoint) => {
  try {
  const request = axios.get(`${baseUrl}/${endpoint}`);
  return request.then(response => JSON.parse(response.data));
  } catch (error) {
    console.log(error);
  }
};

const requestService = { getAllEndpoints,
                         createEndpoint,
                         removeEndpoint,
                         getAllRequests,
                        };

export default requestService;
