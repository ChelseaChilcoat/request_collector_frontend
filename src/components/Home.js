import EndpointForm from './endpointform'
import ListEndpoints from './ListEndpoints'
import './styles.css'

const Home = ({ createEndpoint, removeEndpoint, endpointPathArray, updateEndpointArray }) => {
  return (
    <div>
      <h1>Welcome to the Dumpster of Disappointment*!</h1>
      <EndpointForm createEndpoint={createEndpoint} updateEndpointArray={updateEndpointArray} />
      <ListEndpoints endpointPathArray={endpointPathArray} removeEndpoint={removeEndpoint} />
      <div>
        <p>*Don't be too disappointed, though...there's always Ryan Reynolds...
          <img src={require("./ryan_reynolds.jpeg")} alt="Ryan Reynolds" />
        </p>
      </div>
  </div>
  )

};

export default Home;