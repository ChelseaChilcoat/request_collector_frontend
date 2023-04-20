import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import RequestService from '../services/RequestService';
import '../stylesheets/styles.css';


const RequestsPage = () => {
  const [requests, setRequests] = useState([]);
  const [error, setError] = useState(null);

  const { path } = useParams();
  useEffect(() => {
    RequestService.getAllRequests(path)
      .then(data => setRequests(data))
      .catch(error => setError(error));
  }, [path]);

  if (error) {
    return <p>An error occurred: {error.message}</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Path</th>
          <th>Headers</th>
          <th>Body</th>
        </tr>
      </thead>
      <tbody>
        {requests.map((request) => (
          <tr key={request.path}>
            <td>{request.path}</td>
            <td>
              {Object.entries(JSON.parse(request.headers)).map(([key, value]) => (
                <div key={key}>
                  {key}: {value}
                </div>
              ))}
            </td>
            <td>
              {request.body}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RequestsPage;