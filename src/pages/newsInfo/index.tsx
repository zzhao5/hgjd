import c from 'classnames';
import Pagination from 'rc-pagination';
import _s from './index.module.scss';
import API from '../../apis';
import { News, ImgText, Text } from '../../components/cards';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const NewsInfo = () => {
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<TAPI.TNewsListItem>();

  useEffect(() => {
    API.getNewsInfo({
      id,
    }).then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <>
      <section className={c(_s.news, _s.main)}>
        <div className={_s.flex_3}>
          {
            [1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => {
              return (
                <News
                  key={index}
                  link={''}
                  className={index % 2 === 0 ? _s.even : _s.odd}
                  type={'新闻分类'} 
                  time={'2023-11-10'}
                  text={'专业的知识产权鉴定团队，为您提供专业的知识产权鉴定服务专业的知识产权鉴定团队，为您提供专业的知识产权鉴定服务'}
                />
              )
            })
          }
        </div>
      </section>
      <Pagination total={20} current={1} />
    </>
  )
}

export default NewsInfo;