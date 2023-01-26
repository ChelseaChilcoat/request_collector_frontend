import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import Home from './components/Home';
import RequestsPage from './components/viewrequests';
import requestService from './services/requestService';

const App = () => {
  const [endpoints, setEndpoints] = useState([]);

  useEffect(() => {
    requestService
      .getAllEndpoints()
      .then(endpoints => {
        setEndpoints(endpoints);
      });
  }, []);

  // Are we using this? (Honestly don't remember, but commented it out
  // and page still works)
  // const getEndpoints = async () => {
  //   const endpoints = await requestService.getAllEndpoints()
  //   console.log("endpoint", endpoints)
  //   console.log("type", typeof endpoints)
  //   setEndpoints(endpoints)
  //   return
  // }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home createEndpoint={requestService.createNewEndpoint} endpoints={endpoints} />} />
        <Route path="/:path" element={<RequestsPage />} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
