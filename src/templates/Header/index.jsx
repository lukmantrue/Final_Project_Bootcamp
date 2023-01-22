import React from "react";
import Navbar from '../../components/Navbar';
import About from '../../pages/About';

import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function index() {
  return (
    <>
      {/* <BrowserRouter>
          <Routes>
              <Route path="/about" element={<About/>}/>
          </Routes>
      </BrowserRouter> */}
              <Navbar/>
    </>
  );
}
