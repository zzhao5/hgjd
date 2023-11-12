import _s from './index.module.scss';
import c from 'classnames';
import logo from './images/logo.png'
import { Link } from 'react-router-dom';


const Footer = () => {

  return (
    <footer className={_s.wrap}>
      <div className={_s.main}>
        <div className={_s.content}>
          <div className={_s.logo}>
            <img src={logo} alt="" />
          </div>
          <div className={_s.list}>
            <p><Link to='/about' className={_s.item}>关于我们</Link></p>
            <p><Link to='/service' className={_s.item}>服务内容</Link></p>
            <p><Link to='/view' className={_s.item}>观点和经验</Link></p>
            <p><Link to='/pics' className={_s.item}>专家和合作机构</Link></p>
            <p><Link to='/contact' className={_s.item}>联系我们</Link></p>
          </div>
          <div className={_s.contact}>
            联系方式
            <p><i className={_s.icon_mail}></i>xxx@qq.com</p>
            <p><i className={_s.icon_address}></i>上海市徐汇区xxxxx</p>
            <p><i className={_s.icon_phone}></i>+86 123456789</p>
          </div>
          <div className={_s.code}>
            <p>官方微信公众号</p>
            <img src={logo} alt="" />
          </div>
        </div>
        <div className={_s.other}>
          <div className={_s.links}>
            <a href="https://www.baidu.com" target="_blank" rel="noreferrer">百度</a>
            <a href="https://www.baidu.com" target="_blank" rel="noreferrer">百度</a>
            <a href="https://www.baidu.com" target="_blank" rel="noreferrer">百度</a>
          </div>
          <div className={_s.copy}>
            © 2021 xxx. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;