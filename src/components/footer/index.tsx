import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import c from 'classnames';
import _s from './index.module.scss';
import logo from './images/logo_white.png'
import { useMemo } from 'react';


const ROUTER_PATH = process.env.REACT_APP_ROUTER;

const Footer = ({ data: { email, address, tels, copyrightInformation, icp }, menu }: { data: TAPI.TWebInfo; menu: TAPI.TMenuItem[]}) => {
  const tel = useMemo(() => {
    return tels ? tels.split(',') : [];
  }, [tels]);
  
  return (
    <footer className={_s.wrap}>
      <div className={_s.main}>
        <div className={_s.logo}>
          <img src={logo} alt="" />
        </div>
        <div className={_s.border}></div>
        <div className={_s.list}>
          {
            menu.map((item) => {
              return (
                item.urls === '/' ? null :
                <p key={item.urls}>
                  <Link to={ROUTER_PATH + item.urls} className={_s.item}>{item.titles}</Link>
                </p>
              )
            })
          }
        </div>
        <div className={_s.border}></div>
        <div className={_s.contact}>
          联系方式
          <p><i className={c(_s.icon, _s.icon_mail)}></i><a href={`mailto:${email}`}>{email}</a></p>
          <p><i className={c(_s.icon, _s.icon_address)}></i>{address}</p>
          <p><i className={c(_s.icon, _s.icon_phone)}></i>
            {
              tel.map((item, index) => {
                return (
                  <Fragment key={index}>{index === 0 ? '' : ' / '}<a href={`tel:${item}`}>{item}</a></Fragment>
                )
              })
            }
          </p>
        </div>
        <i></i>
      </div>
      <div className={c(_s.copy, _s.main)}>
        <span>{copyrightInformation}</span> <span>{icp}</span>
      </div>
    </footer>
  )
}

export default Footer;