import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/header';
import Main from './pages/main';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/:name?/' element={<Header />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        {/* <Route path="/ext/:seriesName/" element={<Ext />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
