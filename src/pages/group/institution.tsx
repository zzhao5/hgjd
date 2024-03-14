import { useEffect, useState, useRef, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import _s from './index.module.scss';
import API from '@/apis';
import { Image } from '@/components/cards';
import Banner from '@/components/banner';
import Title from '@/components/title';
import Pages from '@/components/pagination';


const GroupInstitution = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  const [data, setData] = useState<TAPI.TNewsList>();
  const [searchParams, setSearchParams] = useSearchParams();
  const [curPage, setCurPage] = useState(1);

  const handleSetData = useCallback((page: number) => {
    API.getDataList({ newsId: 29, pageNo: page, pageSize: 16, }).then((res) => {
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
      <Banner name='专家和合作机构' />
      <section className={_s.main} ref={mainRef}>
        <Title name='合作机构' border/>
        <div className={_s.flex_4}>
          {
            data?.records.map(({id, imgs, titles}) => {
              return <Image key={id} border img={imgs} text={titles} proportion={56} />
            })
          }
        </div>
        {
          data && data.total > 16 ? <Pages current={curPage} total={data.total} pageSize={12} onChange={pageChange} /> : null
        }
      </section>
    </>
  )
}

export default GroupInstitution;