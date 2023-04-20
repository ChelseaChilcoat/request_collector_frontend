import React from "react";
import { Link } from "react-router-dom";
import RequestService from "../services/RequestService";

const ListEndpoints = ({ endpointPathArray, setEndpointPathArray }) => {
  const remove = async (event) => {
    event.preventDefault();
    const path = event.target.id;
    await RequestService.removeEndpoint(path);
    const updatedPaths = endpointPathArray.filter(endpoint => endpoint !== path);
    setEndpointPathArray(updatedPaths);
  };

  return (
    <div>
      <h2>Existing Endpoints</h2>
      <h4>(Litsted in order of creation, oldest first):</h4>
      <br />
      <ul>
        {endpointPathArray.map((path) => {
          return (
            <li key={path}>
              <Link className="links" to={`/${path}`}>{path}</Link>
              <button id={path} onClick={remove}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListEndpoints;