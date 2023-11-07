import React from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/header';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/type/:id/" element={<Header />} />
      </Routes>
      <Routes>
        {/* <Route index element={<Main />}></Route> */}
        {/* <Route path="/ext/:seriesName/" element={<Ext />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
