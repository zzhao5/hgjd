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
import Case from '@/pages/viewpoint/case';
import Group from '@/pages/group';
import GroupTeam from '@/pages/group/team';
import GroupInstitution from '@/pages/group/institution';
import Contact from '@/pages/contact';
import Licenses from '@/pages/license';

const ROUTER_PATH = process.env.REACT_APP_ROUTER;

const App = () => {
  const [menu, setMenu] = useState([] as TAPI.TMenuItem[]); // 导航
  const [siteInfo, setSiteInfo] = useState({} as TAPI.TWebInfo); // 网站信息
  const [license, setLicense] = useState([] as TAPI.TNewsItem[]); // 资质证书
  const [news, setNews] = useState([] as TAPI.TNewsItem[]); // 最新消息

  const [mini, setMini] = useState(false); // 是否为小屏幕
  // const [phone, setPhone] = useState(false); // 是否为移动端
  const bodyRef = useRef(document.getElementsByTagName('body')[0] as HTMLBodyElement);

  const resetMini = useCallback(() => {
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

    // const ua = navigator.userAgent || '';
    // // TODO: 需要替换为手机判断
    // const bePhone = /iPhone/.test(ua);
    // setPhone(bePhone);

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
        const { menuList, siteInfo, zjList, messageList, } = result;
        setMenu(menuList);
        setSiteInfo(siteInfo);
        setLicense(zjList);
        setNews(messageList);
      }
    });
  }, []);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`${ROUTER_PATH}/:name?/:type?/`}  element={<Header menu={menu} mini={mini} />} />
      </Routes>
      <Routes>
        <Route path={`${ROUTER_PATH}/`} index element={<Main license={license} news={news} menu={menu} />} />
        <Route path={`${ROUTER_PATH}/about/`} element={<About />} />
        <Route path={`${ROUTER_PATH}/service/:type?/`} element={<Service menu={menu} mini={mini} />} />
        <Route path={`${ROUTER_PATH}/viewpoint/`} element={<ViewPoint />} />
        <Route path={`${ROUTER_PATH}/viewpoint/science/`} element={<ViewList />} />
        <Route path={`${ROUTER_PATH}/viewpoint/case/`} element={<Case />} />
        <Route path={`${ROUTER_PATH}/viewpoint/:id/`} element={<Details type='viewpoint' />} />
        <Route path={`${ROUTER_PATH}/group/`} element={<Group />} />
        <Route path={`${ROUTER_PATH}/group/team/`} element={<GroupTeam />} />
        <Route path={`${ROUTER_PATH}/group/institution/`} element={<GroupInstitution />} />
        <Route path={`${ROUTER_PATH}/group/:id/`} element={<Details type='group' />} />
        <Route path={`${ROUTER_PATH}/contact/`} element={<Contact />} />

        <Route path={`${ROUTER_PATH}/news/`} element={<NewsList />} />
        <Route path={`${ROUTER_PATH}/news/:id/`} element={<Details type='news' />} />
        <Route path={`${ROUTER_PATH}/license/`} element={<Licenses />} />
        <Route path={`${ROUTER_PATH}/license/:id/`} element={<Details type='license' />} />
      </Routes>
      <Footer menu={menu} data={siteInfo} />
    </BrowserRouter>
  );
}

export default App;
