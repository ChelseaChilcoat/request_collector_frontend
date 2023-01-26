import { useState, useEffect } from 'react';

function EndpointForm({createEndpoint}) {
  const [endpoint, setEndpoint] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    createEndpoint()
  };
  return (
    <div>
      <h2>Create New Endpoint</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Endpoint:
          <input
            type="text"
            value={endpoint}
            onChange={(e) => setEndpoint(e.target.value)}
          />
        </label>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
export default EndpointForm;
