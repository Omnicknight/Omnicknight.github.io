import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Variables from "./pages/Variables";


function App() {
    
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="Variables" element={<Variables />} />
              </Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
