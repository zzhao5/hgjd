import _s from './index.module.scss';
import API from '@/apis';
import { Image } from '@/components/cards';
import Pages from '@/components/pagination';
import Title from '@/components/title';
import Banner from '@/components/banner';
import { useEffect, useState } from 'react';

const Licenses = () => {
  const [data, setData] = useState<TAPI.TNewsList>(); // 资质证书
  
  useEffect(() => {
    API.getDataList({
      newsId: 31,
      pageNo: 1,
      pageSize: 6,
    }).then((res) => {
      setData(res.result);
    });
  }, []);

  const pageChange = (page: number) => {
    API.getDataList({
      newsId: 31,
      pageNo: page,
      pageSize: 6,
    }).then((res) => {
      setData(res.result);
    });
  };

  return (
    <>
      <Banner name='资质证明' />
      <section className={_s.main}>
        <Title name='资质证明' />
        <div className={_s.flex_2}>
          {
            data?.records.map(({id, titles, describes, imgs}) => {
              return (
                <Image
                  key={id}
                  link={''}
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
          data && data.total > 8 ? <Pages onChange={pageChange} total={data?.total} pageSize={8} /> : null
        
        }
      </section>
    </>
  )
}

export default Licenses;