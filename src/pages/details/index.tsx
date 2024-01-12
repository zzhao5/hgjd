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
  group: '专家和合作机构',
};

const Details = ({ type }: {type: 'news' | 'viewpoint' | 'license' | 'group';}) => {
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
      case 26:
        return 'viewpoint';
      default:
        return 'news';
    }
  }

  useEffect(() => {
    if (id) {
      const trueId = id === 'typical' ? 35 : parseInt(id);

      const getData = async () => {
        const result =  await Promise.all([
          API.getDataInfo({ id: trueId, }),
          API.getDataInfo({ id: trueId - 1, }),
          API.getDataInfo({ id: trueId + 1, })
        ]);
        return result;
      };
      getData().then((res) => {
        setData(res[0].result.info);
        setPrev(res[1].result.info);
        setNext(res[2].result.info);
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
            <p>{ data?.createTime.split(' ')[0] }</p>
          </div>
        }
        <div className={_s.content}>
          {
            // type === 'group' && data?.imgs ? null : <img src={data?.imgs} alt="" />
          }
          {
            data?.contents ? <div dangerouslySetInnerHTML={{__html: data?.contents.replace(/<p>&nbsp;<\/p>/g, '') || ''}}></div> : null
          }
          
        </div>
        {
          id !== 'typical' && id !== '35'  ? 
          <div className={c(_s.more, _s.flex_2)}>
            { prev && prev.titles && prev?.menuId === data?.menuId ? <div className={_s.prev}>上一篇</div> : <div></div> }
            { next && next.titles && next?.menuId === data?.menuId ? <div className={_s.next}>下一篇</div> : <div></div> }
            {
              prev && prev.titles && prev?.menuId === data?.menuId ? <Card
                link={`${ROUTER_PATH}/${getMenuPath(prev.menuId)}/${prev.id}/`}
                className={_s.newsCard}
                type={prev.tags} 
                time={prev.createTime.split(' ')[0]}
                text={prev.titles}
                tips={'上一篇：'}
                mini
              /> : <div></div>
            }
            {
              next && next.titles && next?.menuId === data?.menuId ? <Card
                link={`${ROUTER_PATH}/${getMenuPath(next.menuId)}/${next.id}/`}
                className={_s.newsCard}
                type={next.tags} 
                time={next.createTime.split(' ')[0]}
                text={next.titles}
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