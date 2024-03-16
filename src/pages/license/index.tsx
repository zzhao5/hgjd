import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import _s from './index.module.scss';
import API from '@/apis';
import { Image } from '@/components/cards';
import Pages from '@/components/pagination';
import Title from '@/components/title';
import ScrollView from '@/components/scrollview';

const ROUTER_PATH = process.env.REACT_APP_ROUTER;

const Licenses = () => {
  const [data, setData] = useState<TAPI.TNewsList>(); // 资质证书
  const [searchParams, setSearchParams] = useSearchParams();
  const [curPage, setCurPage] = useState(1);
  
  useEffect(() => {
    const page = Number(searchParams.get('page')) || 1;
    setCurPage(page);
    API.getList({ newsId: 31, pageNo: page, pageSize: 8, }, setData);
  }, [searchParams]);

  const pageChange = (page: number) => {
    setSearchParams({ page: page.toString() });
  };

  return (
    <ScrollView>
      <Title name='资质证明' />
      <div className={_s.flex_2}>
        {
          data?.records.map(({id, titles, describes, imgs}) => {
            return (
              <Image
                key={id}
                link={`${ROUTER_PATH}/license/${id}/`}
                img={imgs}
                title={titles}
                text={describes}
                proportion={50}
                />
            )
          })
        }
      </div>
      {
        data && data.total > 8 ? <Pages current={curPage} onChange={pageChange} total={data?.total} pageSize={8} /> : null
      
      }
    </ScrollView>
  )
}

export default Licenses;