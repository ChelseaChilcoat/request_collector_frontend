import EndpointForm from './endpointform'
import ListEndpoints from './ListEndpoints'

const Home = ({ createEndpoint, removeEndpoint, endpointPathArray, updateEndpointArray }) => {
  return (
    <div>
      <h1>Welcome to the Dumpster of Disappointment!</h1>
      <EndpointForm createEndpoint={createEndpoint} updateEndpointArray={updateEndpointArray} />
      <ListEndpoints endpointPathArray={endpointPathArray} removeEndpoint={removeEndpoint} />
  </div>
  )
};

export default Home;