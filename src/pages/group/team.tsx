import { useEffect, useState, useRef, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import _s from './index.module.scss';
import API from '@/apis';
import { Man } from '@/components/cards';
import Banner from '@/components/banner';
import Title from '@/components/title';
import Pages from '@/components/pagination';

const ROUTER_PATH = process.env.REACT_APP_ROUTER;

const GroupTeam = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  const [data, setData] = useState<TAPI.TNewsList>();
  const [searchParams, setSearchParams] = useSearchParams();
  const [curPage, setCurPage] = useState(1);

  const handleSetData = useCallback((page: number) => {
    API.getDataList({ newsId: 28, pageNo: page, pageSize: 6, }).then((res) => {
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
      {/* <section className={_s.main}>
        <div className={_s.text}>
          依托上海市雄厚的科学资源、门类齐全的技术实力以及完整的产业链基础，建立有丰富的专家资源库和检测资源库。现有入库专家200名，合作的检测、检验机构和国家重点实验室五十多家，覆盖上海交通大学、复旦大学、同济大学、华东师范大学、上海大学等985,211的高校，涵盖机械、电子、化工、生物、软件、芯片等多个技术类别。
        </div>
      </section> */}
      <section className={_s.main} ref={mainRef}>
        <Title name='专家团队' border />
        <div className={_s.flex_2}>
          {
            data?.records.map(({id, imgs, titles, remarks, describes}) => {
              return <Man key={id} img={imgs} name={titles} title={remarks} link={`${ROUTER_PATH}/group/${id}`} text={describes} />
            })
          }
        </div>
        {
          data && data.total > 6 ? <Pages current={curPage} total={data.total} pageSize={6} onChange={pageChange} /> : null
        }
      </section>
    </>
  )
}

export default GroupTeam;