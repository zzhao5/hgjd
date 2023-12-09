import _s from './index.module.scss';
import API from '@/apis';
import { useEffect, useState } from 'react';
import { Image } from '@/components/cards';
import Banner from '@/components/banner';
import Title from '@/components/title';
import Pages from '@/components/pagination';


const GroupInstitution = () => {
  const [data, setData] = useState<TAPI.TNewsList>();

  useEffect(() => {
    API.getDataList({
      newsId: 29,
      pageNo: 1,
      pageSize: 9,
    }).then((res) => {
      setData(res.result);
    });
  }, []);
  const pageChange = (page: number) => {
    API.getDataList({
      newsId: 29,
      pageNo: page,
      pageSize: 9,
    }).then((res) => {
      setData(res.result);
    });
  };


  return (
    <>
      <Banner name='专家和合作机构' />
      <section className={_s.main}>
        <Title name='合作机构' border/>
        <div className={_s.flex_3}>
          {
            data?.records.map(({id, imgs, titles}) => {
              return <Image key={id} link='javascript:void(0)' border img={imgs} text={titles} proportion={56} />
            })
          }
        </div>
        {
          data ? <Pages total={data.total} pageSize={12} onChange={pageChange} /> : null
        }
      </section>
    </>
  )
}

export default GroupInstitution;