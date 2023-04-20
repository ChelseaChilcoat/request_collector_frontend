import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './components/Home';
import RequestsPage from './components/RequestsPage';
import RequestService from './services/RequestService';

const App = () => {
  const [endpoints, setEndpoints] = useState([]);
  const [endpointPathArray, setEndpointPathArray] = useState([]);

  useEffect(() => {
    RequestService
      .getAllEndpoints()
      .then(response => {
        setEndpoints(response);
        response = response.sort((a, b) => a.id > b.id);
        const paths = response.map(el => el.path);
        setEndpointPathArray(paths);
      });
  }, []);

  const updateEndpointArray = (newEndpoint) => {
    setEndpointPathArray(endpointPathArray.concat(newEndpoint));
  };

  const removeEndpoint = async (path) => {
    await RequestService.removeEndpoint(path);
    const updatedPaths = endpointPathArray.filter(endpoint => endpoint !== path);
    setEndpointPathArray(updatedPaths);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home createEndpoint={RequestService.createEndpoint} updateEndpointArray={updateEndpointArray} removeEndpoint={removeEndpoint} endpointPathArray={endpointPathArray} />} />
        <Route path="/:path" element={<RequestsPage />} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;