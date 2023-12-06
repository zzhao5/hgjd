import { useEffect, useState } from 'react';
import c from 'classnames';
import { useParams } from 'react-router-dom';
import _s from './index.module.scss';
import API from '@/apis';
import { Card, Man } from '@/components/cards';
import Banner from '@/components/banner';
import Title from '@/components/title';


const ROUTER_PATH = process.env.REACT_APP_ROUTER;
const NAME_LIST = {
  news: '最新消息',
  viewpoint: '观点和经验',
  license: '资质证明',
  service: '服务内容',
  group: '专家和合作机构',
};

const Details = ({ type }: {type: 'news' | 'viewpoint' | 'license' | 'service' | 'group';}) => {
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<TAPI.TNewsItem>();
  const [prev, setPrev] = useState<TAPI.TNewsItem>();
  const [next, setNext] = useState<TAPI.TNewsItem>();

  const getMenuPath = (menuId: number | string) => {
    switch (menuId) {
      case 30:
        return 'news';
      case 31:
        return 'license';
      case 27:
      case 28:
        return 'group';
      default:
        return 'news';
    }
  }

  useEffect(() => {
    if (id) {
      const trueId = id === 'typical' ? 35 : parseInt(id);
      API.getDataInfo({ id: trueId, }).then((res) => {
        setData(res.result.info);
      });
      API.getDataInfo({ id: trueId - 1, }).then((res) => {
        setPrev(res.result.info);
      });
      API.getDataInfo({ id: trueId + 1, }).then((res) => {
        setNext(res.result.info);
      });
    }
  }, [id]);

  return (
    <>
      <Banner name={NAME_LIST[type]} />
      <section className={c(_s.details, _s.main)}>
        {
          type === 'group' && data?.imgs ? 
          <div className={_s.manBox}>
            <Title name={ id === 'typical' || id === '35' ? '典型专家' : '专家团队'} border />
            <div className={_s.flex_1}>
              <Man className={_s.typical} img={data.imgs} name={data.titles} title={data.remarks} text={data.describes} />
            </div>
          </div>
          : 
          <div className={_s.title}>
            { data?.tags ? <p className={_s.type}>{data.tags}</p> : null}
            <h5>{ data?.titles }</h5>
            <p>{ data?.createTime }</p>
          </div>
        }
        <div className={_s.content}>
          {
            type === 'group' && data?.imgs ? null : <img src={data?.imgs} alt="" />
          }
          {
            data?.contents ? <div dangerouslySetInnerHTML={{__html: data?.contents.replace(/<p>&nbsp;<\/p>/g, '') || ''}}></div> : null
          }
          
        </div>
        {
          type !== 'service' && id !== 'typical' && id !== '35'  ? 
          <div className={c(_s.more, _s.flex_2)}>
            { prev && prev.describes ? <div className={_s.prev}>上一篇</div> : <div></div> }
            { next && next.describes ? <div className={_s.next}>下一篇</div> : <div></div> }
            {
              prev && prev.describes ? <Card
                link={`${ROUTER_PATH}/${getMenuPath(prev.menuId)}/${prev.id}/`}
                className={_s.newsCard}
                type={prev.tags} 
                time={prev.createTime}
                text={prev.describes}
                tips={'上一篇：'}
                mini
              /> : <div></div>
            }
            {
              next && next.describes ? <Card
                link={`${ROUTER_PATH}/${getMenuPath(next.menuId)}/${next.id}/`}
                className={_s.newsCard}
                type={next.tags} 
                time={next.createTime}
                text={next.describes}
                tips={'下一篇：'}
                mini
              /> : <div></div>
            }
          </div> : null
        }
        
      </section>
    </>
  )
}

export default Details;