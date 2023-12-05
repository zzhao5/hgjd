import { useEffect, useMemo, useState } from 'react';
import c from 'classnames';
import API from '@/apis';
import Banner from '@/components/banner';
import Title from '@/components/title';
import { Image, Text } from '@/components/cards';
import Pages from '@/components/pagination';
import _s from './index.module.scss';


const ViewList = () => {
  const [list, setList] = useState<TAPI.TViewList[]>();

  useEffect(() => {
    // API.getNewsInfo({
    //   type,
    // }).then((res) => {
    //   setData(res.data);
    // });
    setList([
      {id: 1, title: '鉴定服务鉴定服务鉴定服务', content: '汉光鉴定服务汉光鉴定服务汉光鉴定服务汉光鉴定服务,汉光鉴定服务汉光鉴定服务,汉光鉴定服务汉光鉴定服务汉光鉴定服务'},
      {id: 2, title: '鉴定服务鉴定服务鉴定服务', content: '汉光鉴定服务汉光鉴定服务汉光鉴定服务汉光鉴定服务,汉光鉴定服务汉光鉴定服务,汉光鉴定服务汉光鉴定服务汉光鉴定服务'},
      {id: 3, title: '鉴定服务鉴定服务鉴定服务', content: '汉光鉴定服务汉光鉴定服务汉光鉴定服务汉光鉴定服务,汉光鉴定服务汉光鉴定服务,汉光鉴定服务汉光鉴定服务汉光鉴定服务'},
      
    ]);
  }, []);


  return (
    <>
      <Banner name='观点和经验' />
      <section className={_s.main}>
        <Title name={'学术研讨'} border />
        <div className={_s.flex_1}>
          {
            list?.map(({id, title, content}) => {
              return <Text
                key={id}
                type={title}
                text={content}
              />
            })
          }
        </div>
        <Pages total={30} pageSize={9} onChange={() => {}} />
      </section>
    </>
  )
}

export default ViewList;