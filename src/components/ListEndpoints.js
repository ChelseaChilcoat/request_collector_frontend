import React from "react";
import { Link } from "react-router-dom";

const ListEndpoints = ({ removeEndpoint, endpointPathArray }) => {
  const remove = (event) => {
    event.preventDefault();
    const endpoint = event.target.id;
    removeEndpoint(endpoint);
  };

  return (
    <div>
      <h2>Existing Endpoints:</h2>
      <ul>
        {endpointPathArray.map((path) => {
          return (
            <li key={path}>
              <Link class="links" to={`/${path}`}>{path}</Link><button id={path} onClick={remove}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListEndpoints;