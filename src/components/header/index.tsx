import React, { useEffect, useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import _s from './index.module.scss';
import c from 'classnames';
import logo from './images/logo.png'

const Header = ({ menu }: { menu: TAPI.TMenuList } ) => {

  const [showNav, setShowNav] = useState(false);
  const [showSubNav, setShowSubNav] = useState([] as boolean[]);

  useMemo(() => {
    menu.forEach((item, index) => {
      if (item.mlist.length > 0) {
        setShowSubNav((old) => {
          const t = [...old];
          t[index] = false;
          return t;
        });
      }
    });
  }, [menu]);

  useEffect(() => {
    const handleClick = () => {
      if (showNav) setShowNav(false);
    }
    window.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('click', handleClick);
    }
  }, [showNav]);

  return (
    <header className={_s.wrap}>
      <div className={_s.main}>
        <div className={_s.logo}>
          <img src={logo} alt="" />
        </div>
        <div className={c(_s.nav, showNav ? _s.active : '')} onClick={(event) => event.stopPropagation()}>
          {
            menu.map(({ titles, mlist, urls, id }, index) => 
              <NavLink key={id} className={({isActive}) => c(_s.item, isActive ? _s.active : '')} to={urls} end={urls === '/'} 
              onMouseEnter={() => setShowSubNav((old) => { const t = {...old}; t[index] = true; return t;})}
              onMouseLeave={() => setShowSubNav((old) => { const t = {...old}; t[index] = false; return t;})}>
                  <span>
                    {titles}
                    {
                      mlist.length > 0 && <div className={c(_s.sub, showSubNav[index] ? _s.active : '')}>
                        {
                          mlist.map((subItem) => 
                            <NavLink key={subItem.id} to={subItem.urls}>{subItem.titles}</NavLink>
                          )
                        }
                      </div>
                    }
                  </span>
              </NavLink>
            )
          }
        </div>
        <div className={_s.nav_button} onClick={(event) => {setShowNav(true); event.stopPropagation();}}></div>
      </div>
    </header>
  )
}

export default Header;