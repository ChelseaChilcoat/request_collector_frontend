import React from "react";
import { Link } from "react-router-dom";

const ListEndpoints = ({ endpoints }) => {
  return (
    <div>
      <h2>Existing Endpoints:</h2>
      <ul>
        {JSON.stringify(endpoints).split(',').map((endpoint) => {
          let path = endpoint.split('\\"')[3];
          return (
            <li key={path} id={path}>
              <Link to={`/${path}`}>{path}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListEndpoints;