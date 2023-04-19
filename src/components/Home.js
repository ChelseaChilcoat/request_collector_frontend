import EndpointForm from './EndpointForm';
import ListEndpoints from './ListEndpoints';
import "../stylesheets/styles.css"

const Home = ({ createEndpoint, removeEndpoint, endpointPathArray, updateEndpointArray }) => {
  return (
    <div>
      <h1>Request Collector</h1>
      <p></p>
      <EndpointForm createEndpoint={createEndpoint} updateEndpointArray={updateEndpointArray} />
      <ListEndpoints endpointPathArray={endpointPathArray} removeEndpoint={removeEndpoint} />
  </div>
  )

};

export default Home;