import axios from 'axios';

const  baseUrl = 'http://localhost:4000/endpoints';

const getAllEndpoints = async() => {
  try {
    const response = await axios.get(baseUrl);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const createEndpoint = async(endpoint) => {
  const params = { endpoint };
  try {
    const response = await axios.post(`${baseUrl}/create`, params);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const removeEndpoint = async(endpointId) => {
  try {
    await axios.delete(`${baseUrl}/${endpointId}`);
  } catch (error) {
    console.log(error);
  }
};

const getAllRequests = async(endpoint) => {
  console.log("url:", `${baseUrl}/${endpoint}`);
  try {
    const response = await axios.get(`${baseUrl}/${endpoint}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const RequestService = { getAllEndpoints,
                         createEndpoint,
                         removeEndpoint,
                         getAllRequests,
                         baseUrl
                        };

export default RequestService;
