import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './components/Home';
import RequestsPage from './components/RequestsPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:path" element={<RequestsPage />} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;