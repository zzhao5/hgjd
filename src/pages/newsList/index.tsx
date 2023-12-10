import c from 'classnames';
import _s from './index.module.scss';
import API from '@/apis';
import { Card } from '@/components/cards';
import Pages from '@/components/pagination';
import Title from '@/components/title';
import Banner from '@/components/banner';
import { useEffect, useState } from 'react';

const ROUTER_PATH = process.env.REACT_APP_ROUTER;

const NewsList = () => {
  const [data, setData] = useState<TAPI.TNewsList>(); // 最新消息

  useEffect(() => {
    API.getDataList({
      newsId: 30,
      pageNo: 1,
      pageSize: 6,
    }).then((res) => {
      setData(res.result);
    });
  }, []);

  const pageChange = (page: number) => {
    API.getDataList({
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
            data?.records.map(({id, tags, titles, createTime}) => {
              return (
                <Card
                  className={_s.item}
                  key={id}
                  link={`${ROUTER_PATH}/news/${id}/`}
                  type={tags}
                  time={createTime.split(' ')[0]}
                  text={titles}
                />
              )
            })
          }
        </div>
        {
          data && data.total > 6 ? <Pages total={data?.total} pageSize={6} onChange={pageChange} /> : null
        }
      </section>
    </>
  )
}

export default NewsList;