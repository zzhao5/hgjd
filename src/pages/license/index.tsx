import { useEffect, useState, useRef, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import _s from './index.module.scss';
import API from '@/apis';
import { Image } from '@/components/cards';
import Pages from '@/components/pagination';
import Title from '@/components/title';
import Banner from '@/components/banner';

const ROUTER_PATH = process.env.REACT_APP_ROUTER;

const Licenses = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  const [data, setData] = useState<TAPI.TNewsList>(); // 资质证书
  const [searchParams, setSearchParams] = useSearchParams();
  const [curPage, setCurPage] = useState(1);
  

  const handleSetData = useCallback((page: number) => {
    API.getDataList({ newsId: 31, pageNo: page, pageSize: 8, }).then((res) => {
      setData(res.result);
      if (mainRef.current && searchParams.get('page')) mainRef.current.scrollIntoView({ behavior: 'smooth' });
    });
  },[searchParams, mainRef]);

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
      <Banner name='资质证明' />
      <section className={_s.main} ref={mainRef}>
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
      </section>
    </>
  )
}

export default Licenses;