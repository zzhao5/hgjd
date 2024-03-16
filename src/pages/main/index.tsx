import { useEffect, useState, useMemo } from 'react';
import c from 'classnames';
import _s from './index.module.scss';
import API from '@/apis';
import Title from '@/components/title';
import { Card, Image, Text, Service } from '@/components/cards';
import pic from './images/pic_best.jpeg';
import banner1 from './images/pic_banner1.jpg';
import banner2 from './images/pic_banner2.jpg';

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
    });
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
    const localIdx = localStorage.getItem('bannerViewIndex');
    const idx = localIdx ? ((Number(localIdx) + 1) % BANNERS.length) : 0;
    localStorage.setItem('bannerViewIndex', idx.toString());
    setBanner(BANNERS[idx]);
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
            <p>深耕知识产权领域20余年<br/>
            提供鉴定等服务10余年<br/>
            持续深入研究诉讼证据<br/>
            擅长领域：专利和商业秘密，截至目前累计完成案件量百余件，部分参与案件为省（市）和全国行业知识产权当年十大或者经典案例。
            </p>
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
                  type={tags} 
                  time={createTime.split(' ')[0]}
                  text={titles}
                />
              )
            })
          }
        </div>
      </section>
      {
        service ? 
        <section>
          <Title name="服务内容" className={c(_s.main, _s.serviceTitle)} more={`${ROUTER_PATH}/service/`} />
          <div className={_s.service}>
            <div className={c(_s.card, _s.main)}>
              <div className={_s.flex_3}>
                {
                  Object.keys(service || {}).map((item, index) => {
                    const { titles, urls, records } = service[item];
                    return (
                      <Service
                        key={index}
                        link={`${ROUTER_PATH}${urls}`}
                        type={titles} 
                        text={records}
                      />
                    )
                  })
                }
              </div>
            </div>
          </div>
        </section>
        : null
      }
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