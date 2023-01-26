import { useState, useEffect } from 'react';
import Modal from 'react-modal'

function EndpointForm({createEndpoint}) {
  const [endpoint, setEndpoint] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let path = await createEndpoint(endpoint)
    setEndpoint(`http://localhost:4000/bin/1/endpoint/${path}`);
    setModalIsOpen(true);
    
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setEndpoint('')
  }

  const customStyles = {
  content : {
    top                   : '30%',
    left                  : '30%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    width                 : '300px',
    height                : '200px',
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
            onChange={(e) => setEndpoint(e.target.value)}
          />
        </label>
        <button type="submit">Create</button>
      </form>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} appElement={document.getElementById('root')}>
          <h2>New Endpoint Created</h2>
          <p>Send POST requests to your endpoint at {endpoint}</p>
          <button onClick={closeModal}>I Know My Endpoint</button>
      </Modal>
    </div>
  );
}
export default EndpointForm;
