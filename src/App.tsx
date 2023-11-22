import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import API from './apis';
import Header from './components/header';
import Footer from './components/footer';
import Main from './pages/main';
import NewsList from './pages/newsList';
import Details from './pages/details';
import About from './pages/about';


function App() {
  const [menu, setMenu] = useState([] as TAPI.TMenuList);
  const [siteInfo, setSiteInfo] = useState({} as TAPI.TWebInfo);
  const [imgs, setImgs] = useState({} as TAPI.TBannerInfo);
  const [cookies, setCookie] = useCookies(['bannerViewIndex']);

  useEffect(() => {
    API.getSiteInfo().then((res) => {
      const { result, code } = res;
      if (code === 200) {
        const { menuList, picList, siteInfo } = result;
        // TODO: 模拟图片
        picList.forEach((item: { pctureUrl: string }) => {
          item.pctureUrl = 'http://127.0.0.1:5500/banner1.jpeg'
        });
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
        const idx = cookies.bannerViewIndex === undefined ? 0 : (parseInt(cookies.bannerViewIndex) + 1);
        const newIdx = idx >= picList.length ? 0 : idx;
        setCookie('bannerViewIndex', newIdx);
        setMenu(newMenu);
        setImgs(picList[newIdx]);
        setSiteInfo(siteInfo);
      }
    });
  }, []);

  
  return (
    <BrowserRouter>
      <Header menu={menu} />
      <Routes>
        <Route path="/" index element={<Main data={imgs} />}></Route>
        <Route path="/news/" element={<NewsList />} />
        <Route path="/news/:id/" element={<Details />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer menu={menu} data={siteInfo} />
    </BrowserRouter>
  );
}

export default App;
