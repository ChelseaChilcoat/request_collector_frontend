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

  return (
    <div className="main">
      <div className="title">
        <h1>Request Collector*</h1>
        <p>A tool for receiving and viewing webhook data.</p>
      </div>
      <EndpointForm endpointPathArray={endpointPathArray} setEndpointPathArray={setEndpointPathArray} />
      <ListEndpoints endpointPathArray={endpointPathArray} setEndpointPathArray={setEndpointPathArray} />
      <div className="title">
        <p>*Formerly (and perhaps more aptly) named the Dumpster of Disappointment: Where Webhook dreams come to die. Despite the name-change to keep up professional appearances, we will still share this photo of Ryan Reynolds as a reminder that it's not all bad.</p>
        <img src={require("./ryan_reynolds.jpeg")} alt="Ryan Reynolds" />
      </div>
    </div>
  );
};

export default Home;