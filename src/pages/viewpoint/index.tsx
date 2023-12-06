import c from 'classnames';
import _s from './index.module.scss';
import API from '@/apis';
import { useEffect, useMemo, useState } from 'react';
import Banner from '@/components/banner';
import Title from '@/components/title';
import { Image, Text } from '@/components/cards';


const ViewPoint = () => {
  const [data, setData] = useState<TAPI.TViewPoint[]>();
  const [list, setList] = useState<TAPI.TViewList[]>();

  useEffect(() => {
    // API.getDataInfo({
    //   type,
    // }).then((res) => {
    //   setData(res.data);
    // });
    setData([
      {id: 1, video: 'https://www.w3school.com.cn/i/video/shanghai.mp4', title: '鉴定服务鉴定服务鉴定服务', content: '汉光鉴定服务汉光鉴定服务汉光鉴定服务汉光鉴定服务,汉光鉴定服务汉光鉴定服务,汉光鉴定服务汉光鉴定服务汉光鉴定服务'},
      {id: 2, video: 'https://www.w3school.com.cn/i/video/shanghai.mp4', title: '鉴定服务鉴鉴定服务', content: '汉光鉴定服务汉光鉴定服汉光鉴定服务,汉光鉴定服务汉光鉴定服务,汉光鉴定服务汉光鉴定服务汉光鉴定服务'},
    ])
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
        <Title name={'研究与案例'} />
        <div className={_s.flex_2}>
          {
            data?.map(({id, video, title, content}) => {
              return <Image
                key={id}
                video={video}
                link=''
                title={title}
                text={content}
              />
            })
          }
        </div>
      </section>
      <section className={_s.main}>
          <Title name={'学术研讨'} more='science/' border />
          <div className={_s.flex_1}>
            {
              list?.map(({id, title, content}) => {
                return <Text
                  key={id}
                  type={title}
                  typeLink={''}
                  text={content}
                />
              })
            }
          </div>
      </section>
    </>
  )
}

export default ViewPoint;