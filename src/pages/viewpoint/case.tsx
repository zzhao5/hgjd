import { useEffect, useState, useRef, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import API from '@/apis';
import Banner from '@/components/banner';
import Title from '@/components/title';
import { Image } from '@/components/cards';
import Pages from '@/components/pagination';
import _s from './index.module.scss';


const ROUTER_PATH = process.env.REACT_APP_ROUTER;
const ViewCase = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  const [data, setData] = useState<TAPI.TNewsList>();
  const [searchParams, setSearchParams] = useSearchParams();
  const [curPage, setCurPage] = useState(1);


  const handleSetData = useCallback((page: number) => {
    API.getDataList({ newsId: 26, pageNo: page, pageSize: 6, }).then((res) => {
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
      <Banner name='观点和经验' />
      <section className={_s.main} ref={mainRef}>
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
      </section>
    </>
  )
}

export default ViewCase;