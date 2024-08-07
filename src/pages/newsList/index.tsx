import { useEffect, useState } from 'react';
import _s from './index.module.scss';
import API from '@/apis';
import { Card } from '@/components/cards';
import Pages from '@/components/pagination';
import Title from '@/components/title';
import ScrollView from '@/components/scrollview';
import { useSearchParams } from 'react-router-dom';

const ROUTER_PATH = process.env.REACT_APP_ROUTER;

const NewsList = () => {
  const [data, setData] = useState<TAPI.TNewsList>(); // 最新消息
  const [searchParams, setSearchParams] = useSearchParams();
  const [curPage, setCurPage] = useState(1);

  useEffect(() => {
    const page = Number(searchParams.get('page')) || 1;
    setCurPage(page);
    API.getList({ newsId: 30, pageNo: page, pageSize: 10, }, setData);

  }, [searchParams]);

  const pageChange = (page: number) => {
    setSearchParams({ page: page.toString() });
  };

  return (
    <ScrollView>
      <Title name='最新消息' />
      <div className={_s.flex_2}>
        {
          data?.records.map(({id, tags, titles, createTime}) => {
            return (
              <Card
                key={id}
                link={`${ROUTER_PATH}/news/${id}/`}
                type={'NEWS'}
                time={createTime.split(' ')[0]}
                text={titles}
              />
            )
          })
        }
      </div>
      {
        data && data.total > 10 ? <Pages total={data?.total} current={curPage} pageSize={6} onChange={pageChange} /> : null
      }
    </ScrollView>
  )
}

export default NewsList;