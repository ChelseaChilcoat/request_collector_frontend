import React, { useState, useEffect } from 'react';
import './styles.css';

function RequestsPage({ path }) {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/bin/1/endpoint/${path}`)
      .then((res) => res.json())
      .then((data) => {
        setRequests(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [path]);

  if (loading) {
    return <p>Loading...</p>;
  }

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

}

export default RequestsPage;