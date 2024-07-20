import { useEffect, useState } from 'react';
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

  useEffect(() => {
    const page = Number(searchParams.get('page')) || 1;
    setCurPage(page);
    API.getList({ newsId: 25, pageNo: page, pageSize: 6, }, setData);
    
  }, [searchParams]);

  const pageChange = (page: number) => {
    setSearchParams({ page: page.toString() });
  };

  return (
    <ScrollView>
      <Title name={'视频案例'} />
      <div className={_s.flex_2}>
        { data ? 
          data.records.map(({id, titles, imgs, describes}) => {
            return <Image
              key={id}
              img={imgs}
              proportion={57}
              link={`${ROUTER_PATH}/viewpoint/${id}/`}
              title={titles}
              text={describes}
              className={'videoMode'}
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