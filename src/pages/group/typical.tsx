import React, { useCallback } from 'react';
import c from 'classnames';
import _s from './index.module.scss';
import API from '@/apis';
import { useEffect, useMemo, useState } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { Man } from '@/components/cards';
import Banner from '@/components/banner';
import Title from '@/components/title';


const GroupTypical = () => {
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
      <section className={c(_s.main, _s.info)}>
        <Title name='典型专家' border />
        <div className={_s.flex_1}>
          {
            data?.slice(0,1).map(({id, img, name, title, link, content}) => {
              return <Man className={_s.typical} key={id} img={img} name={name} title={title} link={link} text={content} />
            })
          }
        </div>
      </section>
      <section className={c(_s.main, _s.box)}>
        <div className={_s.title}>
          <p className={_s.type}>爱的方式</p>
          <p>2023-09-10 12:11:00</p>
        </div>
        <div className={_s.content}>
          <div className={_s.video}>
            <video src="" preload='preload' controls></video>
          </div>
          <p>上海汉光知识产权数据科技有限公司司法鉴定所（以下称：汉光鉴定所）出具咨询意见的山东瀚霖生物技术有限公司、王某某侵犯商业秘密罪案入选2019年度山东法院十大知识产权案件，被称为山东省实施知识产权民事、行政、刑事案件“三合一”审判以来影响最大的刑事案件。此外，该案曾先后被评为“2017年度全省检察机关优秀审查逮捕案件”、入选山东省检察院通报的8起服务保障民营经济高质量发展典型案例。2019年2月16日，山东省人民检察院检察长陈勇在省第十三届人民代表大会第二次会议作的《山东省人民检察院工作报告》中将本案列入 “服务保障民营企业健康发展”的典型案例。</p>
          <p>山东凯赛生物技术有限公司（以下称：凯赛生物）是一家以生物法生产高品质二元酸的高新技术企业，在世界范围内率先开发出以生物发酵法工业化生产长链二元酸。2008年，掌握凯赛生物核心技术的高管王某某离职，并将生产长链二元酸的相关技术非法披露山东瀚霖生物技术有限公司（以下称：瀚霖公司）。瀚霖公司在明知王某某违反保密义务披露涉案生产技术的情况下，以非法手段获取并将涉案商业秘密用于生产经营，同时以申请专利的形式进行了披露，给凯赛生物造成了数以亿计的巨额经济损失。</p>
          <p>济宁市公安局于2012年8月对该案件立案侦查，并于2017年6月针对涉及“生物发酵法工业化生产长链二元酸的生产技术”的相关专业问题，委托汉光鉴 定所提供技术咨询意见。汉光鉴定所接受委托后，组建了9人队伍的专家团队，围绕委托方的咨询要求进行了深入研讨，经科技查新、综合分析、归纳总结，最终得出“生产生物发酵法工业化生产长链二元酸的五个技术秘密点及其整体在2008年7月31日之前属于不为公众所知悉的技术信息”的结论，并出具相关咨询意见书。</p>
          <p>汉光鉴定所组织参与咨询的四位专家两次赴济宁出席法庭质证，回答了庭审各方尤其是对方律师关于咨询意见在技术、科技查新以及鉴定程序等方面的近百个问题，该咨询意见通过其专业性、科学性和客观性的论证分析最终被法院采信。咨询专家特别是技术专家，弥补了法官在长链二元酸技术知识方面的不足。我所出具的咨询意见为法官尽快查明事实提供了有力支持，为检察机关以“零口供”提起公诉提供了重要支撑。</p>
        </div>
      </section>
    </>
  )
}

export default GroupTypical;