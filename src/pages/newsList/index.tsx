import { useEffect, useState, useRef, useCallback } from 'react';
import _s from './index.module.scss';
import API from '@/apis';
import { Card } from '@/components/cards';
import Pages from '@/components/pagination';
import Title from '@/components/title';
import Banner from '@/components/banner';
import { useSearchParams } from 'react-router-dom';

const ROUTER_PATH = process.env.REACT_APP_ROUTER;

const NewsList = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  const [data, setData] = useState<TAPI.TNewsList>(); // 最新消息
  const [searchParams, setSearchParams] = useSearchParams();
  const [curPage, setCurPage] = useState(1);

  const handleSetData = useCallback((page: number) => {
    API.getDataList({ newsId: 30, pageNo: page, pageSize: 6, }).then((res) => {
      setData(res.result);
      if (mainRef.current && searchParams.get('page')) mainRef.current.scrollIntoView({ behavior: 'smooth' });
    });
  }, [searchParams, mainRef]);

  useEffect(() => {
    const page = Number(searchParams.get('page')) || 1;
    setCurPage(page);
    handleSetData(page);
  }, [searchParams, handleSetData]);

  const pageChange = (page: number) => {
    setSearchParams({ page: page.toString() });
  };

  return (
    <>
      <Banner name='最新消息' />
      <section className={_s.main} ref={mainRef}>
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
          data && data.total > 6 ? <Pages total={data?.total} current={curPage} pageSize={6} onChange={pageChange} /> : null
        }
      </section>
    </>
  )
}

export default NewsList;