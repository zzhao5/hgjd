import { Link } from 'react-router-dom';
import c from 'classnames';
import _s from './index.module.scss';
import logo from './images/logo_white.png'


const Footer = ({ data: { email, address, tels, copyrightInformation, icp }, menu }: { data: TAPI.TWebInfo; menu: TAPI.TMenuList}) => {

  return (
    <footer className={_s.wrap}>
      <div className={_s.main}>
        <div className={_s.logo}>
          <img src={logo} alt="" />
        </div>
        <div className={_s.list}>
          {
            menu.map((item) => {
              return (
                item.urls === '/' ? null :
                <p key={item.urls}>
                  <Link to={item.urls} className={_s.item}>{item.titles}</Link>
                </p>
              )
            })
          }
        </div>
        <div className={_s.contact}>
          联系方式
          <p><i className={c(_s.icon, _s.icon_mail)}></i>{email}</p>
          <p><i className={c(_s.icon, _s.icon_address)}></i>{address}</p>
          <p><i className={c(_s.icon, _s.icon_phone)}></i>{tels}</p>
        </div>
        <div className={_s.copy}>
          <span>{copyrightInformation}</span> <span>{icp}</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer;