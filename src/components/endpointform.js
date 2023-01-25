import { useState, useEffect } from 'react';

function EndpointForm() {
  const [endpoint, setEndpoint] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch('/bin/1/endpoint', {
            method: 'POST',
            body: JSON.stringify({ endpoint }),
            headers: { 'Content-Type': 'application/json' },
        });
        const data = await response.json();
        console.log(data)
    } catch (err) {
        console.error(err);
    }
  };
  return (
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
  );
}
export default EndpointForm;
