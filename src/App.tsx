import { useEffect, useState } from 'react';
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
import ViewPointWrap from '@/pages/viewpoint/wrap';
import GroupWrap from '@/pages/group/wrap';
import NewsWrap from '@/pages/newsList/wrap';
import LicensesWrap from '@/pages/license/wrap';

const ROUTER_PATH = process.env.REACT_APP_ROUTER;

const App = () => {
  const [menu, setMenu] = useState([] as TAPI.TMenuItem[]); // 导航
  const [siteInfo, setSiteInfo] = useState({} as TAPI.TWebInfo); // 网站信息
  const [license, setLicense] = useState([] as TAPI.TNewsItem[]); // 资质证书
  const [news, setNews] = useState([] as TAPI.TNewsItem[]); // 最新消息

  /**
   * 监听当前视口大小
   */
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
        <Route path={`${ROUTER_PATH}/:name?/:type?/:subTag?/`}  element={<Header menu={menu} />} />
      </Routes>
      <Routes>
        <Route path={`${ROUTER_PATH}/`} index element={<Main license={license} news={news} menu={menu} />} />
        <Route path={`${ROUTER_PATH}/about/`} element={<About />} />
        <Route path={`${ROUTER_PATH}/service/:type?/`} element={<Service menu={menu} />} />
        <Route path={`${ROUTER_PATH}/viewpoint/`} element={<ViewPointWrap />}>
          <Route index element={<ViewPoint />} />
          <Route path={`${ROUTER_PATH}/viewpoint/science/`} element={<ViewList />} />
          <Route path={`${ROUTER_PATH}/viewpoint/case/`} element={<Case />} />
          <Route path={`${ROUTER_PATH}/viewpoint/:id/:subTag?/`} element={<Details />} />
        </Route>

        <Route path={`${ROUTER_PATH}/group/`} element={<GroupWrap />}>
          <Route index element={<Group />} />
          <Route path={'team/'} element={<GroupTeam />} />
          <Route path={'institution/'} element={<GroupInstitution />} />
          <Route path={':id/'} element={<Details group />} />
        </Route>
        <Route path={`${ROUTER_PATH}/contact/`} element={<Contact />} />

        <Route path={`${ROUTER_PATH}/news/`} element={<NewsWrap />}>
          <Route index element={<NewsList />} />
          <Route path={':id/'} element={<Details />} />
        </Route>
        <Route path={`${ROUTER_PATH}/license/`} element={<LicensesWrap />}>
          <Route index element={<Licenses />} />
          <Route path={':id/'} element={<Details />} />
        </Route>
      </Routes>
      <Footer menu={menu} data={siteInfo} />
    </BrowserRouter>
  );
}

export default App;
