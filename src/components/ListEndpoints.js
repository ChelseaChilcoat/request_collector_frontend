import React from "react";
import { Link } from "react-router-dom";

const ListEndpoints = ({ removeEndpoint, endpoints }) => {
  console.log(typeof removeEndpoint);
  const remove = (event) => {
    event.preventDefault();
    const endpoint = event.target.id;
    removeEndpoint(endpoint);
  };

  return (
    <div>
      <h2>Existing Endpoints:</h2>
      <ul>
        {JSON.stringify(endpoints).split(',').map((endpoint) => {
          // I manually parsed this, I'm _sure_ there is a better way
          // JSON.parse on endpoints throws an error and breaks everything
          // so it's not that...
          let path = endpoint.split('\\"')[3];
          return (
            // for some reaso the app is not pickind up on the key property even
            // though it's picking up the Id property. I have NO ideas here...
            <li key={path}>
              <Link to={`/${path}`}>{path}</Link><button id={path} onClick={remove}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListEndpoints;