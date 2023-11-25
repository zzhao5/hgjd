import React from 'react';
import c from 'classnames';
import Pagination from 'rc-pagination';
import _s from './index.module.scss';
import API from '../../apis';
import { News } from '../../components/cards';
import { useEffect, useMemo, useState } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import Banner from '../../components/banner';
import Title from '../../components/title';

const ServiceList = ({title, content}: {title:string; content:string;}) => {
  const [show, setShow] = useState(false);
  return <>
    <p className={c(_s.title, show ? _s.active : null)} onClick={() => setShow((old) => !old)}>
      <span>{title}</span>
      <i className={c(_s.icon, _s.icon_right, show ? _s.turn_down : null)} style={{fontSize: '10px'}}></i>
    </p>
    <p className={_s.text}>{content}</p>
  </>
}

const Service = ({ menu } : { menu: TAPI.TMenuItem[]; }) => {
  const { type } = useParams<{ type: string }>();
  const [data, setData] = useState<TAPI.TServiceData[]>();
  const [content, setContent] = useState<TAPI.TServiceData>();
  const menuList = useMemo(() => {
    const menus = menu.filter(({urls}) => urls === '/service/');
    if (menus.length > 0) return menus[0].mlist; 
  }, [menu]);

  useEffect(() => {
    // API.getNewsInfo({
    //   type,
    // }).then((res) => {
    //   setData(res.data);
    // });
    setData([{
      type: 'appraisal',
      title: '汉光鉴定服务',
      data: [
        {id: 1, title: '鉴定服务鉴定服务鉴定服务', content: '汉光鉴定服务汉光鉴定服务汉光鉴定服务汉光鉴定服务,汉光鉴定服务汉光鉴定服务,汉光鉴定服务汉光鉴定服务汉光鉴定服务'}
      ],
    }])
  }, []);

  useEffect(() => {
    const cnt = [] as TAPI.TServiceData[];
    if (type && data?.length) {
      cnt.concat(data.filter((item) => {
        return item.type === type;
      }));
    }
    if (cnt.length) {
      setContent(cnt[0]);
    } else {
      setContent(data?.[0]);
    }
  }, [data, type]);

  return (
    <>
      <Banner name='服务内容' />
      <section className={c(_s.nav, _s.main, _s.flex_3)}>
        {
          menuList ? menuList.map(({id, urls, titles}) => {
            return (
              <NavLink key={id} className={({isActive}) => c(_s.item, isActive ? _s.active : null)} to={urls} >
                  { titles }
              </NavLink>
            )
          }) : null
        }
      </section>
      <section className={c(_s.content, _s.main)}>
        <Title border name={content?.title} />
        {
          content?.data.map(({title, content, id}) => {
            return <ServiceList title={title} content={content} key={id} />
          })
        }
      </section>
    </>
  )
}

export default Service;