import _s from './index.module.scss';
import API from '@/apis';
import { useEffect, useState } from 'react';
import { Man } from '@/components/cards';
import Banner from '@/components/banner';
import Title from '@/components/title';
import Pages from '@/components/pagination';


const GroupTeam = () => {
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
        <div className={_s.text}>
          依托上海市雄厚的科学资源、门类齐全的技术实力以及完整的产业链基础，建立有丰富的专家资源库和检测资源库。现有入库专家200名，合作的检测、检验机构和国家重点实验室五十多家，覆盖上海交通大学、复旦大学、同济大学、华东师范大学、上海大学等985,211的高校，涵盖机械、电子、化工、生物、软件、芯片等多个技术类别。
        </div>
      </section>
      <section className={_s.main}>
        <Title name='专家团队' border more={'team'} />
        <div className={_s.flex_2}>
          {
            data?.map(({id, img, name, title, link, content}) => {
              return <Man key={id} img={img} name={name} title={title} link={link} text={content} />
            })
          }
        </div>
        <Pages total={20} pageSize={8} onChange={() => {}} />
      </section>
    </>
  )
}

export default GroupTeam;