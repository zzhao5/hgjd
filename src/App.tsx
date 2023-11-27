import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import API from './apis';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Main from '@/pages/main';
import NewsList from '@/pages/newsList';
import Details from '@/pages/details';
import About from '@/pages/about';
import Service from '@/pages/service';

const ROUTER_PATH = process.env.REACT_APP_ROUTER;

function App() {
  const [menu, setMenu] = useState([] as TAPI.TMenuItem[]);
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
        // TODO: 处理链接，后续接口直接修改
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
      <Routes>
        <Route path={`${ROUTER_PATH}/:type?/`}  element={<Header menu={menu} />}></Route>
      </Routes>
      <Routes>
        <Route path={`${ROUTER_PATH}/`} index element={<Main data={imgs} />}></Route>
        <Route path={`${ROUTER_PATH}/news/`} element={<NewsList />} />
        <Route path={`${ROUTER_PATH}/news/:id/`} element={<Details />} />
        <Route path={`${ROUTER_PATH}/about/`} element={<About />} />
        <Route path={`${ROUTER_PATH}/service/:type?/`} element={<Service menu={menu} />} />
      </Routes>
      <Footer menu={menu} data={siteInfo} />
    </BrowserRouter>
  );
}

export default App;
