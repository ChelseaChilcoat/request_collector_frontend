import { useState, useEffect } from 'react';
import Modal from 'react-modal'
import RequestService from '../services/RequestService';

const EndpointForm = ({ endpointPathArray, setEndpointPathArray }) => {
  const [endpoint, setEndpoint] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [invalidInput, setInvalidInput] = useState(false);
  const [endpointExists, setEndpointExists] = useState(false);

  useEffect(() => { }, [invalidInput]);

  const invalid = (newEndpoint) => {
    const regex = /^[A-Za-z0-9_-]+$/;
    return newEndpoint !== "" && !regex.test(newEndpoint);
  };

  const existingEndpoint = (newEndpoint) => {
    return endpointPathArray.includes(newEndpoint);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (invalid(endpoint)) {
      alert("Invalid endpoint. Only letters, numbers, dashes(-), and underscores(_) are allowed. Please correct your endpoint value in order to submit it.")
    } else if (endpointExists) {
      alert("This endpoint already exists. Please create a unique endpoint.");
    } else {
      try {
        let path = await RequestService.createEndpoint(endpoint);
        setEndpointPathArray(endpointPathArray.concat(path));
        setEndpoint(`${RequestService.baseUrl}/${path}`);
        setModalIsOpen(true);
      } catch (error) {
        alert(`Request failed: ${error.message}`);
      }
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setEndpoint('');
  };

  const handleChange = (event) => {
    event.preventDefault();
    setEndpoint(event.target.value);
    setInvalidInput(invalid(event.target.value));
    setEndpointExists(existingEndpoint(event.target.value));
  };

  return (
    <div className='new-endpoint'>
      <h2>Create New Endpoint:</h2>
      <div className='form-instructions'>
        <p>For a custom endpoint address, enter a value including only letters, numbers, dashes (-) and underscores (_) below. To create a randomly-generated webhook address, simply leave the input field below blank and click "Create".</p>
        <form onSubmit={handleSubmit}>
          <label>
            Endpoint:
            <input
              type="text"
              value={endpoint}
              minLength={5}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Create</button>
        </form>
        {invalidInput && <p className="invalid">Invalid endpoint. Only letters, numbers, dashes(-), and underscores(_) are allowed.</p>}
        {endpointExists && <p className="invalid">Endpoint already exists. Please create a unique endpoint.</p>}
      </div>

      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className="modal" appElement={document.getElementById('root')}>
        <h2>New Endpoint Created</h2>
        <p>Send POST requests to your endpoint at {endpoint}</p>
        <button onClick={closeModal}>Got it!</button>
      </Modal>
    </div>
  );
}
export default EndpointForm;
