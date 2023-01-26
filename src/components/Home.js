import EndpointForm from './endpointform'
import ListEndpoints from './ListEndpoints'

const Home = ({ createEndpoint, endpoints }) => {
  return (
    <div>
      <EndpointForm createEndpoint={createEndpoint} />
      <ListEndpoints endpoints={endpoints} />
  </div>
  )
};

export default Home;