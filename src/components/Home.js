import { useState, useEffect } from 'react';
import EndpointForm from './EndpointForm';
import ListEndpoints from './ListEndpoints';
import RequestService from '../services/RequestService';
import "../stylesheets/styles.css"

const Home = () => {
  const [endpointPathArray, setEndpointPathArray] = useState([]);

  useEffect(() => {
    RequestService
      .getAllEndpoints()
      .then(response => {
        response = response.sort((a, b) => a.id > b.id);
        const paths = response.map(el => el.path);
        setEndpointPathArray(paths);
      });
  }, []);

  const removeEndpoint = async (path) => {
    await RequestService.removeEndpoint(path);
    const updatedPaths = endpointPathArray.filter(endpoint => endpoint !== path);
    setEndpointPathArray(updatedPaths);
  };

  return (
    <div>
      <h1>Request Collector</h1>
      <p></p>
      <EndpointForm endpointPathArray={endpointPathArray} setEndpointPathArray={setEndpointPathArray} />
      <ListEndpoints endpointPathArray={endpointPathArray} removeEndpoint={removeEndpoint} />
  </div>
  );
};

export default Home;