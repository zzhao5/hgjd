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


  useEffect(() => {
    API.getSiteInfo().then((res) => {
      const { result, code } = res;
      if (code === 200) {
        const { menuList, siteInfo } = result;
        setMenu(menuList);
        setSiteInfo(siteInfo);
      }
    });
  }, []);

  
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`${ROUTER_PATH}/:type?/:sub?/`}  element={<Header menu={menu} />}></Route>
      </Routes>
      <Routes>
        <Route path={`${ROUTER_PATH}/`} index element={<Main />}></Route>
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
