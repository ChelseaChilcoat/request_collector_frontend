import axios from 'axios';
//fix me
const  baseUrl = 'http://localhost:4000/bin/1';

const getAllEndpoints = () => {
  const request = axios.get(baseUrl);
  return request.then(response => response.data);
};

const createNewEndpoint = async (endpoint) => {
  // const response = await axios.post(baseUrl)
  const params = { endpoint };
  //console.log(JSON.stringify(params))
  let response;
  try {
      response = await fetch(`${baseUrl}/endpoint`, {
          method: 'POST',
          body: JSON.stringify(params),
          headers: { 'Content-Type': 'application/json' },
      });
      const data = await response.json();
      const myPath = data.split(': ')[1].split('added')[0]
      console.log(data, myPath)
      return myPath;
  } catch (err) {
      console.error(err);
  }
  // const response = await axios.post(baseUrl, newObject)

};

const removeEndpoint = async (endpointId) => {
  await axios.delete(`${baseUrl}/endpoint/${endpointId}`);
};

const getAllRequests = (endpoint) => {
  const request = axios.get(`${baseUrl}/endpoint/${endpoint}`);
  return request.then(response => JSON.parse(response.data));
};

const requestService = { getAllEndpoints,
                         createNewEndpoint,
                         removeEndpoint,
                         getAllRequests,
                        };

export default requestService;
