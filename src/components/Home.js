import EndpointForm from './endpointform'
import ListEndpoints from './ListEndpoints'

const Home = ({ createEndpoint, removeEndpoint, endpoints }) => {
  return (
    <div>
      {
      //a working title
      }
      <h1>Welcome To Our Request Bin, Wooooo!!!  GO TEAM 4!!!! WOOOO!!!</h1>
      <EndpointForm createEndpoint={createEndpoint} />
      <ListEndpoints endpoints={endpoints} removeEndpoint={removeEndpoint} />
  </div>
  )
};

export default Home;