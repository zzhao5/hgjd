import c from 'classnames';
import _s from './index.module.scss';
import API from '../../apis';
import { News } from '../../components/cards';
import Pages from '../../components/pagination';
import Title from '../../components/title';
import Banner from '../../components/banner';
import { useCallback, useEffect, useState } from 'react';

const NewsList = () => {
  const [list, setList] = useState<TAPI.TNewsList[]>([]);
  
  useEffect(() => {
    API.getNewsList({
      newsId: 22,
      pageNo: 1,
      pageSize: 20,
    }).then((res) => {
      setList(res.data);
    });
  }, []);

  const pageChange = useCallback((page: number) => {

  }, []);

  return (
    <>
      <Banner name='最新消息' pic={'http://127.0.0.1:5500/banner1.jpeg'} />
      <section className={c(_s.news, _s.main)}>
        <Title name='最新消息' />
        <div className={_s.flex_3}>
          {
            [1, 2, 3, 4, 5, 6, 7, ].map((item, index) => {
              return (
                <News
                  key={index}
                  link={'/news/3333'}
                  className={index % 2 === 0 ? _s.even : _s.odd}
                  type={'新闻分类'} 
                  time={'2023-11-10'}
                  text={'专业的知识产权鉴定团队，为您提供专业的知识产权鉴定服务专业的知识产权鉴定团队，为您提供专业的知识产权鉴定服务'}
                />
              )
            })
          }
        </div>
        <Pages onChange={pageChange} total={28} pageSize={9} />
      </section>
    </>
  )
}

export default NewsList;