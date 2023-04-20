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

  return (
    <div className="main">
      <div className="title">
        <h1>Requests for {path}</h1>
        <p>Full address for webhook post requests: {RequestService.baseUrl}/{path}</p>
      </div>
      {error
        ? <p>An error retrieving your webhook requests occurred: {error.mesage}</p>
        : <table>
          <thead>
            <tr>
              <th>Timestamp</th>
              <th>Headers</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request) => (
              <tr key={request.id}>
                <td>
                  {request.timestamp}
                </td>
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
      }
    </div>
  );
};

export default RequestsPage;