import { useEffect, useState, useMemo, useRef } from 'react';
import c from 'classnames';
import _s from './index.module.scss';
import API from '@/apis';
import {TitleCenter} from '@/components/title';
import { Card, Image, Text, Service } from '@/components/cards';
import pic from './images/pic_best.jpeg';
import banner1 from './images/pic_banner1.jpg';
import banner2 from './images/pic_banner2.jpg';

const ROUTER_PATH = process.env.REACT_APP_ROUTER;
const BANNERS = [banner1, banner2];

const ListItem = ({
  count,
  text,
  content,
}: {
  count: number;
  text: string;
  content: string;
}) => {
  return (
    <li>
      <p className={_s.border}><strong>{count}</strong><sup>+</sup><span>{text}</span></p>
      <p className={_s.content}>{content}</p>
    </li>
  )
}

const Main = ({
  license,
  news,
  menu,
}: {
  license: TAPI.TNewsItem[];
  news: TAPI.TNewsItem[];
  menu: TAPI.TMenuItem[];
}) => {
  const [bannerIdx, setBanner] = useState<number>(0);
  const [data, setData] = useState<TAPI.TNewsItem[]>();
  const [service, setService] = useState<TAPI.TServiceData>();
  const bannerRef = useRef<boolean>(false);
  const subMenuList = useMemo(() => {
    if (!menu || menu.length === 0) return undefined;
    const current = menu.filter(({urls}) => urls === '/service/');
    return current[0].mlist; 
  }, [menu]);

  useEffect(() => {
    API.getDataList({ newsId: 26, pageNo: 1, pageSize: 6, }).then((res) => {
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
    if (bannerRef.current) return;
    const localIdx = localStorage.getItem('bannerViewIndex');
    const idx = localIdx ? ((Number(localIdx) + 1) % BANNERS.length) : 0;
    localStorage.setItem('bannerViewIndex', idx.toString());
    bannerRef.current = true;
    setBanner(idx);
  }, []);

  return (
    <>
      <section className={_s.banner} style={{ backgroundImage: `url(${BANNERS[bannerIdx]})`, }}>
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
            <div className={_s.textContent}>
              <h4 className={_s.border}>为什么选择我们？</h4>
              <p>擅长领域：专利和商业秘密
                <br />截至目前累计完成知识产权鉴定和咨询服务百余件，其中部分参与案件为省(市)和全国行业知识产权当年十大案例或者经典案例。
              </p>
            </div>
            <ul className={_s.list}>
              <ListItem count={20} text="年" content="行业经验" />
              <ListItem count={100} text="位" content="资深专家" />
              <ListItem count={100} text="位" content="专业专家" />
              <ListItem count={10} text="年" content="专业服务" />
              <ListItem count={100} text="项" content="项目案例" />
              <ListItem count={2} text="万" content="客户" />
            </ul>
          </div>
        </div>
      </section>
      <section className={c(_s.wrap, _s.blueBg)}>
        <TitleCenter name="最新消息" more={`${ROUTER_PATH}/news/`}>
          <div className={_s.flex_2}>
            {
              news.slice(0, 2).map(({id, tags, createTime, titles }, index) => {
                return (
                  <Card
                    key={id}
                    link={`${ROUTER_PATH}/news/${id}`}
                    type={'NEWS'}
                    time={createTime.split(' ')[0]}
                    text={titles}
                  />
                )
              })
            }
          </div>
        </TitleCenter>
      </section>
      {
        service ? 
        <section className={c(_s.wrap, _s.service)}>
          <TitleCenter name="服务内容" more={`${ROUTER_PATH}/service/`}>
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
          </TitleCenter>
        </section>
        : null
      }
      <section className={c(_s.img_list, _s.wrap)}>
        <TitleCenter name="资质证明" more={`${ROUTER_PATH}/license/`}>
          <div className={_s.flex_4}>
            {
              license.slice(0, 4).map(({id, imgs, titles, describes}) => {
                return (
                  <Image
                    key={id}
                    link={`${ROUTER_PATH}/license/${id}`}
                    img={imgs}
                    title={titles}
                    text={describes}
                  />
                )
              })
            }
          </div>
        </TitleCenter>
      </section>
      <section className={c(_s.text_list, _s.blueBg, _s.wrap)}>
        <TitleCenter name="学术研讨" more={`${ROUTER_PATH}/viewpoint/science/`}>
          <div className={_s.flex_6}>
            {
              data?.map(({titles, tags, createTime, id}) => {
                return (
                  <Text
                    className={'item'}
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
        </TitleCenter>
      </section>
    </>
  )
}

export default Main;