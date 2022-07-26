import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Variables from "./pages/Variables";
import './App.css';

const BrowserRouter = require("react-router-dom").BrowserRouter;
const Route = require("react-router-dom").Route;
const Link = require("react-router-dom").Link;


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
