import { useEffect, useState } from 'react';
import c from 'classnames';
import _s from './index.module.scss';
import API from '@/apis';
import Title from '@/components/title';
import { Card, Image, Text } from '@/components/cards';
import { useCookies } from 'react-cookie';
import pic from './images/pic_best.jpeg';
import banner1 from './images/pic_banner1.jpeg';
import banner2 from './images/pic_banner2.jpeg';

const BANNERS = [banner1, banner2];

const Main = ({
  license,
  news,
}: {
  license: TAPI.TNewsItem[];
  news: TAPI.TNewsItem[];
}) => {
  const [cookies, setCookie] = useCookies(['bannerViewIndex']);
  const [banner, setBanner] = useState<string>(BANNERS[0]);

  useEffect(() => {
  }, []);

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
        <Title name="最新消息" more="/news/" />
        <div className={_s.flex_2}>
          {
            news.map(({id, tags, createTime, describes }, index) => {
              return (
                <Card
                  key={id}
                  link={`/news/${id}`}
                  className={index % 2 === 0 ? _s.even : _s.odd}
                  type={tags} 
                  time={createTime}
                  text={describes}
                />
              )
            })
          }
        </div>
      </section>
      <section className={c(_s.img_list, _s.main)}>
        <Title name="资质证明" more='/license/' />
        <div className={_s.flex_2}>
          {
            license.map(({id, imgs, titles, describes}) => {
              return (
                <Image
                  key={id}
                  link={''}
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
        <Title name="汉光研究" more='/about/' border />
        <div className={_s.flex_1}>
          {
            [1, 2, 3].map((item, index) => {
              return (
                <Text
                  link={''}
                  key={index}
                  type={'汉光研究'}
                  time={'2023-11-10'}
                  text={'专业的知识产权鉴定团队，为您提供专业的知识产权鉴定服务专业的知识产权鉴定团队，为您提供专业的知识产权鉴定服务'}
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