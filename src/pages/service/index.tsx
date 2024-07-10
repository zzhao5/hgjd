import React, { useCallback } from 'react';
import c from 'classnames';
import _s from './index.module.scss';
import API from '@/apis';
import { useEffect, useMemo, useState } from 'react';
import { useParams, NavLink, Navigate } from 'react-router-dom';
import Banner from '@/components/banner';
import Title from '@/components/title';
import IconRight from '@/components/icon_right';


const ROUTER_PATH = process.env.REACT_APP_ROUTER;

const ServiceList = ({title, content}: {title:string; content?:string;}) => {
  const [show, setShow] = useState(false);
  return <>
    <p className={c(_s.title, show ? _s.active : null)} onClick={() => { if (content) setShow((old) => !old)}}>
      <span>{title}</span>
      {content ? <IconRight size={10} turn={show} /> : null}
    </p>
    {
      content ? <p className={_s.text}>{content}</p> : null
    }
  </>
}

const Service = ({ menu } : { menu: TAPI.TMenuItem[]; }) => {
  const { type } = useParams<{ type: string;}>();
  const [data, setData] = useState<TAPI.TServiceData>();
  const [showNav, setShowNav] = useState(false);
  const subMenuList = useMemo(() => {
    if (!menu || menu.length === 0) return undefined;
    const current = menu.filter(({urls}) => urls === '/service/');
    return current[0].mlist; 
  }, [menu]);
  
  useEffect(() => {
    setShowNav(false);
  }, [type]);

  const currentType = useMemo(() => {
    return type ? type : 'appraisal';
  }, [type]);

  useEffect(() => {
    if (!subMenuList || subMenuList.length === 0) return;
    const getData = async () => {
      const result =  await Promise.all(
        subMenuList.map(({id}) => {
          return API.getDataList({newsId: id, pageNo: 1, pageSize: 20});
        })
      );
      return result;
    };
    getData().then((res) => {
      const obj: TAPI.TServiceData = {};
      for (let i = 0; i < subMenuList.length; i++) {
        const {titles, urls, id} = subMenuList[i];
        const records = res[i].result.records;
        const key = urls.split('/')[2];
        obj[key] = { titles, id, urls, records};
      }
      setData(obj);
    });

  }, [subMenuList]);


  const handleClick = useCallback(() => {
    setShowNav((o) => !o);
  }, []);

  return (
    type === undefined ? <Navigate to={ROUTER_PATH + '/service/appraisal/'} /> :
    <>
      <Banner name='服务内容' />
      <section className={c(_s.nav, _s.main)}>
        {
          <div className={c(_s.nav_control)} onClick={handleClick}>
            <span>{data ? `${data[currentType].titles}` : null}</span>
            <IconRight size={8} turn={showNav} />
          </div>
        }
        {
          data ? <div className={c(_s.nav_content, showNav ? _s.nav_show : null)}>
            {
              Object.keys(data).map((item) => {
                const {titles, id, urls} = data[item];
                return (
                  <NavLink
                    key={id}
                    data-title={titles}
                    className={({isActive}) => c(_s.item, isActive ? _s.active : null)}
                    to={ROUTER_PATH + urls}
                  >
                      { titles }
                  </NavLink>
                )
              })
            }
          </div> : null
        }
      </section>
      <section className={c(_s.content, _s.main)}>
        <Title border name={data ? data[currentType].titles : undefined} />
        {
          data && data[currentType]?.records ? data[currentType].records.map(({titles, describes, id}) => {
            return <ServiceList title={titles} content={describes} key={id} />
          }) : null
        }
      </section>
    </>
  )
}

export default Service;