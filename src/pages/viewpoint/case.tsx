import { useEffect, useMemo, useState } from 'react';
import c from 'classnames';
import API from '@/apis';
import Banner from '@/components/banner';
import Title from '@/components/title';
import { Image, Text } from '@/components/cards';
import Pages from '@/components/pagination';
import _s from './index.module.scss';


const ROUTER_PATH = process.env.REACT_APP_ROUTER;
const ViewCase = () => {
  const [data, setData] = useState<TAPI.TNewsList>();

  useEffect(() => {
    API.getDataList({ newsId: 25, pageNo: 1, pageSize: 6, }).then((res) => {
      setData(res.result);
    });
  }, []);

  const pageChange = (page: number) => {
    API.getDataList({
      newsId: 26,
      pageNo: page,
      pageSize: 6,
    }).then((res) => {
      setData(res.result);
      window.scrollTo(0, 0);
    });
  };

  return (
    <>
      <Banner name='观点和经验' />
      <section className={_s.main}>
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
          data && data.total > 6 ? <Pages total={data?.total} pageSize={6} onChange={pageChange} /> : null
        }
      </section>
    </>
  )
}

export default ViewCase;