import { NavLink } from "react-router-dom";
import _s from './index.module.scss';
import c from 'classnames';
import logo from './images/logo.png'

const NAV_LIST = [
  {
    name: '首页',
    path: '/',
  },
  {
    name: '关于我们',
    path: '/about/',
  },
  {
    name: '服务内容',
    path: '/service/',
    sub: [
      {
        name: '服务列表',
        path: '/service/list',
      },
      {
        name: '服务类型',
        path: '/service/type',
      },
    ]
  },
  {
    name: '观点和经验',
    path: '/view/',
  },
  {
    name: '专家和合作机构',
    path: '/pics/',
  },
  {
    name: '联系我们',
    path: '/contact',
  },

];

const Header = () => {
  return (
    <header className={_s.wrap}>
      <div className={_s.main}>
        <div className={_s.logo}>
          <img src={logo} alt="" />
        </div>
        <div className={_s.nav}>
          {
            NAV_LIST.map((item, index) => 
              <NavLink key={index} className={({isActive}) => c(_s.item, isActive ? _s.active : '')} to={item.path} end={item.path === '/'} >
                  <span>
                    {item.name}
                    {
                      item.sub && <div className={_s.sub}>
                        {
                          item.sub.map((subItem, subIndex) => 
                            <NavLink key={index + '-' + subIndex} to={subItem.path}>{subItem.name}</NavLink>
                          )
                        }
                      </div>
                    }
                  </span>
              </NavLink>
            )
          }
        </div>
      </div>
    </header>
  )
}

export default Header;