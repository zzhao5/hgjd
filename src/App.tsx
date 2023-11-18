import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import API from './apis';
import Header from './components/header';
import Footer from './components/footer';
import Main from './pages/main';


function App() {
  const [menu, setMenu] = useState([]);
  const [siteInfo, setSiteInfo] = useState({});
  const [imgs, setImgs] = useState([]);

  useEffect(() => {
    API.getSiteInfo().then((res) => {
      const { result, code } = res;
      if (code === 200) {
        const { menuList, picList, siteInfo } = result;
        const newMenu = menuList.map((item: { urls: string; mlist: { urls: string; }[] }) => {
          const url = item.urls.split('.')[0];
          const newSub = item.mlist.map((sub: { urls: string; }) => {
            const subUrl = sub.urls.split('.')[0];
            return {
              ...sub,
              urls: `/${subUrl}/`,
            }
          });
          return {
            ...item,
            mlist: newSub,
            urls: url === 'inde' ? '/' : `/${url}/`,
          }
        });
        setMenu(newMenu);
        setImgs(picList);
        setSiteInfo(siteInfo);
      }
    });
  }, []);

  
  return (
    <BrowserRouter>
      <Header menu={menu} />
      <Routes>
        <Route path="/" element={<Main data={imgs} />}></Route>
        {/* <Route path="/ext/:seriesName/" element={<Ext />} /> */}
      </Routes>
      <Footer menu={menu} data={siteInfo} />
    </BrowserRouter>
  );
}

export default App;
