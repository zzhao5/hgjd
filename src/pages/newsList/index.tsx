import c from 'classnames';
import _s from './index.module.scss';
import API from '@/apis';
import { Card } from '@/components/cards';
import Pages from '@/components/pagination';
import Title from '@/components/title';
import Banner from '@/components/banner';
import { useEffect, useState } from 'react';

const NewsList = () => {
  const [data, setData] = useState<TAPI.TNewsList>(); // 最新消息

  useEffect(() => {
    API.getNewsList({
      newsId: 30,
      pageNo: 1,
      pageSize: 6,
    }).then((res) => {
      setData(res.result);
    });
  }, []);

  const pageChange = (page: number) => {
    API.getNewsList({
      newsId: 30,
      pageNo: page,
      pageSize: 6,
    }).then((res) => {
      setData(res.result);
    });
  };

  return (
    <>
      <Banner name='最新消息' />
      <section className={_s.main}>
        <Title name='最新消息' />
        <div className={_s.flex_2}>
          {
            data?.records.map(({id, tags, describes, createTime}) => {
              return (
                <Card
                  className={_s.item}
                  key={id}
                  link={`/news/${id}/`}
                  type={tags}
                  time={createTime}
                  text={describes}
                />
              )
            })
          }
        </div>
        {
          data && data?.total > 6 && (
            <Pages
              total={data?.total}
              pageSize={6}
              onChange={pageChange}
            />
          )
        }
      </section>
    </>
  )
}

export default NewsList;