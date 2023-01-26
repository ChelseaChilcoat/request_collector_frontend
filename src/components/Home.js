import EndpointForm from './endpointform'
import ListEndpoints from './ListEndpoints'

const Home = ({ createEndpoint, endpoints }) => {
  return (
    <div>
      <h1>Welcome To Our Request Bin</h1>
      <EndpointForm createEndpoint={createEndpoint} />
      <ListEndpoints endpoints={endpoints} />
  </div>
  )
};

export default Home;