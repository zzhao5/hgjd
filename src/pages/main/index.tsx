import { useEffect, useState, useMemo } from 'react';
import c from 'classnames';
import _s from './index.module.scss';
import API from '@/apis';
import Title from '@/components/title';
import { Card, Image, Text } from '@/components/cards';
import { useCookies } from 'react-cookie';
import pic from './images/pic_best.jpg';
import banner1 from './images/pic_banner1.jpeg';
import banner2 from './images/pic_banner2.jpeg';

const ROUTER_PATH = process.env.REACT_APP_ROUTER;
const BANNERS = [banner1, banner2];

const Main = ({
  license,
  news,
  menu,
}: {
  license: TAPI.TNewsItem[];
  news: TAPI.TNewsItem[];
  menu: TAPI.TMenuItem[];
}) => {
  const [cookies, setCookie] = useCookies(['bannerViewIndex']);
  const [banner, setBanner] = useState<string>(BANNERS[0]);
  const [data, setData] = useState<TAPI.TNewsItem[]>();
  const [service, setService] = useState<TAPI.TServiceData>();
  const subMenuList = useMemo(() => {
    if (!menu || menu.length === 0) return undefined;
    const current = menu.filter(({urls}) => urls === '/service/');
    return current[0].mlist; 
  }, [menu]);

  useEffect(() => {
    API.getDataList({ newsId: 26, pageNo: 1, pageSize: 3, }).then((res) => {
      setData(res.result.records);
    })
  }, []);

  useEffect(() => {
    if (!subMenuList || subMenuList.length === 0) return;
    const getData = async () => {
      const result =  await Promise.all(
        subMenuList.map(({id}) => {
          return API.getDataList({newsId: id, pageNo: 1, pageSize: 20});
        })
      );
      return result;
    };
    getData().then((res) => {
      const obj: TAPI.TServiceData = {};
      for (let i = 0; i < subMenuList.length; i++) {
        const {titles, urls, id} = subMenuList[i];
        const records = res[i].result.records;
        const key = urls.split('/')[2];
        obj[key] = { titles, id, urls, records};
      }
      setService(obj);
    });

  }, [subMenuList]);

  useEffect(() => {
    const idx = cookies.bannerViewIndex === undefined ? 0 : (parseInt(cookies.bannerViewIndex) + 1);
    const newIdx = idx >= BANNERS.length ? 0 : idx;
    setCookie('bannerViewIndex', newIdx);
    setBanner(BANNERS[newIdx]);
  }, []);

  return (
    <>
      <section className={_s.banner} style={{ backgroundImage: `url(${banner})`, }}>
        <div className={_s.main}>
          <h1>专业、公正、科学</h1>
          <h3>知识产权证据服务</h3>
        </div>
      </section>
      <section className={_s.best}>
        <div className={_s.main}>
          <div className={_s.img}>
            <img src={pic} alt="" />
          </div>
          <div className={_s.text}>
            <h6>为什么选择我们？</h6>
            <p>深耕知识产权领域20余年；<br/>
              提供鉴定、意见及评估等证据服务10余年；<br/>
              持续深入研究知识产权证据。</p>
          </div>
        </div>
      </section>
      <section className={c(_s.card, _s.main)}>
        <Title name="最新消息" more={`${ROUTER_PATH}/news/`} />
        <div className={_s.flex_2}>
          {
            news.slice(0, 2).map(({id, tags, createTime, titles }, index) => {
              return (
                <Card
                  key={id}
                  link={`${ROUTER_PATH}/news/${id}`}
                  className={index % 2 === 0 ? _s.even : _s.odd}
                  type={tags} 
                  time={createTime.split(' ')[0]}
                  text={titles}
                />
              )
            })
          }
        </div>
      </section>
      <section className={c(_s.card, _s.main)}>
        <Title name="服务内容" more={`${ROUTER_PATH}/news/`} />
        <div className={_s.flex_2}>
          {
            news.slice(0, 2).map(({id, tags, createTime, titles }, index) => {
              return (
                <Card
                  key={id}
                  link={`${ROUTER_PATH}/news/${id}`}
                  className={index % 2 === 0 ? _s.even : _s.odd}
                  type={tags} 
                  time={createTime.split(' ')[0]}
                  text={titles}
                />
              )
            })
          }
        </div>
      </section>
      <section className={c(_s.img_list, _s.main)}>
        <Title name="资质证明" more={`${ROUTER_PATH}/license/`} />
        <div className={_s.flex_2}>
          {
            license.slice(0, 4).map(({id, imgs, titles, describes}) => {
              return (
                <Image
                  key={id}
                  link={`${ROUTER_PATH}/license/${id}`}
                  img={imgs}
                  title={titles}
                  text={describes}
                  proportion={50}
                 />
              )
            })
          }
        </div>
      </section>
      <section className={c(_s.text_list, _s.main)}>
        <Title name="学术研讨" more={`${ROUTER_PATH}/viewpoint/science/`} border />
        <div className={_s.flex_1}>
          {
            data?.map(({titles, tags, createTime, id}) => {
              return (
                <Text
                  link={`${ROUTER_PATH}/viewpoint/${id}/`}
                  key={id}
                  type={tags}
                  time={createTime.split(' ')[0]}
                  text={titles}
                />
              )
            })
          }
        </div>
      </section>
    </>
  )
}

export default Main;