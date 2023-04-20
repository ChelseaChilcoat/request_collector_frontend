import { useState, useEffect } from 'react';
import Modal from 'react-modal'
import RequestService from '../services/RequestService';

const EndpointForm = ({ endpointPathArray, setEndpointPathArray }) => {
  const [endpoint, setEndpoint] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let path = await RequestService.createEndpoint(endpoint);
    setEndpointPathArray(endpointPathArray.concat(path));
    setEndpoint(`${RequestService.baseUrl}/${path}`);
    setModalIsOpen(true);

    // updateEndpointArray(path);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setEndpoint('')
  }

  const customStyles = {
  content : {
    backgroundColor       : '#F5F5F5',
    boxShadow             : '2px 2px 5px #888888',
    borderRadius          : '5px'
  }
};

  return (
    <div>
      <h2>Create New Endpoint:</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Endpoint:
          <input
            type="text"
            value={endpoint}
            minLength={5}
            onChange={(e) => setEndpoint(e.target.value)}
          />
        </label>
        <button type="submit">Create</button>
      </form>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} appElement={document.getElementById('root')}>
          <h2>New Endpoint Created</h2>
          <p>Send POST requests to your endpoint at {endpoint}</p>
          <button onClick={closeModal}>Got it!</button>
      </Modal>
    </div>
  );
}
export default EndpointForm;

// need to validate endpoint and also process for no spaces
