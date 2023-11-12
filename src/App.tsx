import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/header';
import Footer from './components/footer';
import Main from './pages/main';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<Header />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        {/* <Route path="/ext/:seriesName/" element={<Ext />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
