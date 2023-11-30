import _s from './index.module.scss';
import API from '@/apis';
import { useEffect, useMemo, useState } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { Man, Image } from '@/components/cards';
import Banner from '@/components/banner';
import Title from '@/components/title';
import Pages from '@/components/pagination';


const Group = () => {
  const { type } = useParams<{ type: string;}>();
  const [data, setData] = useState<TAPI.TGroupPeopel[]>();

  useEffect(() => {
    // API.getNewsInfo({
    //   type,
    // }).then((res) => {
    //   setData(res.data);
    // });
    setData([
        {
          id: 1,
          name: '程晓鸣副教授',
          title: '鉴定服务鉴定服务鉴定服务',
          img: 'https://life.kust.edu.cn/__local/4/AE/71/995CC0D2EA353829BD7661D89C0_59681445_17B30.jpg',
          link: '',
          content: '汉光鉴定服务汉光鉴定服务汉光鉴定服务汉光鉴定服务,汉光鉴定服务汉光鉴定服务,汉光鉴定服务汉光鉴定服务汉光鉴定服务',
        },
        {
          id: 2,
          name: '程晓鸣副教授',
          title: '鉴定服务鉴定服务鉴定服务',
          img: 'https://life.kust.edu.cn/__local/4/AE/71/995CC0D2EA353829BD7661D89C0_59681445_17B30.jpg',
          link: '',
          content: '汉光鉴定服务汉光鉴定服务汉光鉴定服务汉光鉴定服务,汉光鉴定服务汉光鉴定服务,汉光鉴定服务汉光鉴定服务汉光鉴定服务',
        },
        {
          id: 3,
          name: '程晓鸣副教授',
          title: '鉴定服务鉴定服务鉴定服务',
          img: 'https://life.kust.edu.cn/__local/4/AE/71/995CC0D2EA353829BD7661D89C0_59681445_17B30.jpg',
          link: '',
          content: '汉光鉴定服务汉光鉴定服务汉光鉴定服务汉光鉴定服务,汉光鉴定服务汉光鉴定服务,汉光鉴定服务汉光鉴定服务汉光鉴定服务',
        },
        {
          id: 4,
          name: '程晓鸣副教授',
          title: '鉴定服务鉴定服务鉴定服务',
          img: 'https://life.kust.edu.cn/__local/4/AE/71/995CC0D2EA353829BD7661D89C0_59681445_17B30.jpg',
          link: '',
          content: '汉光鉴定服务汉光鉴定服务汉光鉴定服务汉光鉴定服务,汉光鉴定服务汉光鉴定服务,汉光鉴定服务汉光鉴定服务汉光鉴定服务',
        },
        {
          id: 5,
          name: '程晓鸣副教授',
          title: '鉴定服务鉴定服务鉴定服务',
          img: 'https://life.kust.edu.cn/__local/4/AE/71/995CC0D2EA353829BD7661D89C0_59681445_17B30.jpg',
          link: '',
          content: '汉光鉴定服务汉光鉴定服务汉光鉴定服务汉光鉴定服务,汉光鉴定服务汉光鉴定服务,汉光鉴定服务汉光鉴定服务汉光鉴定服务',
        },
        {
          id: 6,
          name: '程晓鸣副教授',
          title: '鉴定服务鉴定服务鉴定服务',
          img: 'https://life.kust.edu.cn/__local/4/AE/71/995CC0D2EA353829BD7661D89C0_59681445_17B30.jpg',
          link: '',
          content: '汉光鉴定服务汉光鉴定服务汉光鉴定服务汉光鉴定服务,汉光鉴定服务汉光鉴定服务,汉光鉴定服务汉光鉴定服务汉光鉴定服务',
        },
    
    ])
  }, []);


  return (
    <>
      <Banner name='专家和合作机构' />
      <section className={_s.main}>
        <Title name='合作机构' border/>
        <div className={_s.flex_3}>
          {
            data?.map(({id, img, link, content}) => {
              return <Image key={id} className={_s.logo_list} img={'https://www.autohome.com.cn/about/img/mail@2x.jpg'} link={link} text={'网站名称是啥'} />
            })
          }
        </div>
        <Pages total={20} pageSize={12} onChange={() => {}} />
      </section>
    </>
  )
}

export default Group;