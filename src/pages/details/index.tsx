import { useEffect, useState } from 'react';
import c from 'classnames';
import { useParams } from 'react-router-dom';
import _s from './index.module.scss';
import API from '@/apis';
import { Card } from '@/components/cards';
import Banner from '@/components/banner';
import { parse } from 'path';

const NAME_LIST = {
  news: '最新消息',
  viewpoint: '观点和经验',
  license: '资质证明',
  // notice: '通知公告',
  // activity: '活动预告',
  // media: '媒体报道',
};

const Details = ({ type }: {type: 'news' | 'viewpoint' | 'license';}) => {
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<TAPI.TNewsItem>();
  const [prev, setPrev] = useState<TAPI.TNewsItem>();
  const [next, setNext] = useState<TAPI.TNewsItem>();

  useEffect(() => {
    if (id) {
      API.getNewsInfo({
        id,
      }).then((res) => {
        setData(res.result.info);
      });
      API.getNewsInfo({
        id: parseInt(id) - 1,
      }).then((res) => {
        setPrev(res.result.info);
      });
      API.getNewsInfo({
        id: parseInt(id) + 1,
      }).then((res) => {
        setNext(res.result.info);
      });
    }
  }, [id]);

  return (
    <>
      <Banner name={NAME_LIST[type]} />
      <section className={c(_s.details, _s.main)}>
        <div className={_s.title}>
          { data?.tags ? <p className={_s.type}>{data.tags}</p> : null}
          <h5>{ data?.titles }</h5>
          <p>{ data?.createTime }</p>
        </div>
        <div className={_s.content}>
          {
            data?.imgs ?
              <img src={data?.imgs} alt="" /> :
            data?.video ?
              <div className={_s.video}>
                <video src="" preload='preload' controls></video>
              </div> : null
          }
          {
            // data?.contents ? <div dangerouslySetInnerHTML={{__html: data?.contents.replace(/<p>&nbsp;<\/p>/g, '') || ''}}></div> : null
            data?.contents ? <div dangerouslySetInnerHTML={{__html: data?.contents || ''}}></div> : null
          }
          
        </div>
        <div className={c(_s.more, _s.flex_2)}>
          { prev ? <div className={_s.prev}>上一篇</div> : null }
          { next ? <div className={_s.next}>下一篇</div> : null }
          {
            prev ? <Card
              link={`/news/${prev.id}/`}
              className={_s.newsCard}
              type={prev.tags} 
              time={prev.createTime}
              text={prev.describes}
              tips={'上一篇：'}
              mini
            /> : null
          }
          {
            next ? <Card
              link={`/news/${next.id}/`}
              className={_s.newsCard}
              type={next.tags} 
              time={next.createTime}
              text={next.describes}
              tips={'下一篇：'}
              mini
            /> : null
          }
        </div>
      </section>
    </>
  )
}

export default Details;