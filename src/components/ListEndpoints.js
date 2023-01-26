import React from "react";
import { Link } from "react-router-dom";

const ListEndpoints = ({ endpoints }) => {
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