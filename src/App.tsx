import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import NotFound from "./pages/not-found";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/prueba-opa/" element={<Home />} />
          <Route path="/prueba-opa/*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
