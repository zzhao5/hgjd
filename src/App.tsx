import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/bar" element={``} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
