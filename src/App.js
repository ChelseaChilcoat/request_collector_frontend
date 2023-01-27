import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import Home from './components/Home';
import RequestsPage from './components/viewrequests';
import requestService from './services/requestService';

const App = () => {
  const [endpoints, setEndpoints] = useState([]);
  const [endpointPathArray, setEndpointPathArray] = useState([]);

  useEffect(() => {
    requestService
      .getAllEndpoints()
      .then(endpoints => {
        setEndpoints(endpoints);
        const paths = JSON.parse(endpoints).map(el => el.path);
        setEndpointPathArray(paths);
      });
  }, []);

  const updateEndpointArray = (newEndpoint) => {
    setEndpointPathArray(endpointPathArray.concat(newEndpoint));
  };

  const removeEndpoint = async (path) => {
    await requestService.removeEndpoint(path);
    const updatedPaths = endpointPathArray.filter(endpoint => endpoint !== path);
    setEndpointPathArray(updatedPaths);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home createEndpoint={requestService.createNewEndpoint} updateEndpointArray={updateEndpointArray} removeEndpoint={removeEndpoint} endpointPathArray={endpointPathArray} />} />
        <Route path="/:path" element={<RequestsPage />} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
