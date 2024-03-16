import { useEffect, useState, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import API from '@/apis';
import Title from '@/components/title';
import { Image } from '@/components/cards';
import Pages from '@/components/pagination';
import ScrollView from '@/components/scrollview';
import _s from './index.module.scss';


const ROUTER_PATH = process.env.REACT_APP_ROUTER;
const ViewCase = () => {
  const [data, setData] = useState<TAPI.TNewsList>();
  const [searchParams, setSearchParams] = useSearchParams();
  const [curPage, setCurPage] = useState(1);

  const handleSetData = useCallback((page: number) => {
    const opt = { newsId: 26, pageNo: page, pageSize: 6, };
    API.getList(opt, setData);
  }, [searchParams]);

  useEffect(() => {
    const page = Number(searchParams.get('page')) || 1;
    setCurPage(page);
    handleSetData(page);
  }, [searchParams, handleSetData]);

  const pageChange = (page: number) => {
    setSearchParams({ page: page.toString() });
  };

  return (
    <ScrollView>
      <Title name={'视频案例'} border />
      <div className={_s.flex_2}>
        { data ? 
          data.records.map(({id, titles, imgs, describes}) => {
            return <Image
              key={id}
              img={imgs}
              proportion={56}
              link={`${ROUTER_PATH}/viewpoint/${id}/`}
              title={titles}
              text={describes}
            />
          }) : null
        }
      </div>
      {
        data && data.total > 6 ? <Pages total={data?.total} current={curPage} pageSize={6} onChange={pageChange} /> : null
      }
    </ScrollView>
  )
}

export default ViewCase;