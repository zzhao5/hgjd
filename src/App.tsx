import React, { useEffect, useState, useRef, useCallback } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import API from './apis';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Main from '@/pages/main';
import NewsList from '@/pages/newsList';
import Details from '@/pages/details';
import About from '@/pages/about';
import Service from '@/pages/service';
import ViewPoint from '@/pages/viewpoint';
import ViewList from '@/pages/viewpoint/list';
import Group from '@/pages/group';

const ROUTER_PATH = process.env.REACT_APP_ROUTER;

const App = () => {
  const [menu, setMenu] = useState([] as TAPI.TMenuItem[]);
  const [siteInfo, setSiteInfo] = useState({} as TAPI.TWebInfo);
  const [mini, setMini] = useState(false); // 是否为移动端
  const bodyRef = useRef(document.getElementsByTagName('body')[0] as HTMLBodyElement);

  const resetMini = useCallback(() => {
    console.log(bodyRef.current.clientWidth);
    if (bodyRef.current && bodyRef.current.clientWidth < 768) {
      setMini(true);
    } else {
      setMini(false);
    }
  }, [bodyRef.current]);
  /**
   * 监听当前视口大小
   */
  useEffect(() => {
    const throttle = (fn = Function.prototype, delay = 20) => {
      let lastTime = Date.now();
      // TODO: arguments in ts
      return (...args: any) => {
        const nowTime = +new Date();
        if (nowTime - lastTime > delay || !lastTime) {
          fn.apply(this, args);
          lastTime = nowTime;
        }
      };
    };

    const resizeFn = throttle(() => {
      resetMini();
    }, 100);

    // 默认执行一次
    resetMini();
    window.addEventListener('resize', resizeFn);

    return () => {
      window.removeEventListener('resize', resizeFn);
    };
  }, []);

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
        <Route path={`${ROUTER_PATH}/:name?/:type?/`}  element={<Header menu={menu} mini={mini} />} />
      </Routes>
      <Routes>
        <Route path={`${ROUTER_PATH}/`} index element={<Main />} />
        <Route path={`${ROUTER_PATH}/news/`} element={<NewsList />} />
        <Route path={`${ROUTER_PATH}/news/:id/`} element={<Details type='news' />} />
        <Route path={`${ROUTER_PATH}/about/`} element={<About />} />
        <Route path={`${ROUTER_PATH}/service/:type?/`} element={<Service menu={menu} mini={mini} />} />
        <Route path={`${ROUTER_PATH}/viewpoint/`} element={<ViewPoint />} />
        <Route path={`${ROUTER_PATH}/viewpoint/science/`} element={<ViewList />} />
        <Route path={`${ROUTER_PATH}/viewpoint/:id/`} element={<Details type='viewpoint' />} />
        <Route path={`${ROUTER_PATH}/group/`} element={<Group />} />
      </Routes>
      <Footer menu={menu} data={siteInfo} />
    </BrowserRouter>
  );
}

export default App;
