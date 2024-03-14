import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import _s from './index.module.scss';
import c from 'classnames';
import logo from './images/logo.png'
import IconRight from "../icon_right";


const ROUTER_PATH = process.env.REACT_APP_ROUTER;

const NavSub = ({list, mini}: { list:TAPI.TMenuItem[]; mini:boolean; }) => {
  return (
    <div className={_s.sub}>
      {
        list.map((subItem) =>
          <p key={subItem.id}>
            <NavLink to={ROUTER_PATH + subItem.urls}>{subItem.titles}</NavLink>
            {mini ? null : <IconRight />}
          </p>
        )
      }
    </div>
  )
}

const NavItem = ({ titles, mlist, urls, mini, id, setNav, hideNav, active }: { mini: boolean; active: boolean; setNav: Function; hideNav: Function; } & TAPI.TMenuItem) => {
  const [hasClick, setHasClick] = useState(false);
  const handleEnter = useCallback(() => {
    if (!mini && mlist && mlist.length > 0) {
      setNav({titles, id, mlist});
    }
  }, [titles, id, mlist, mini, setNav]);

  const handleLeave = useCallback(() => {
    if (!mini && mlist && mlist.length > 0) {
      hideNav();
    }
  }, [mini, mlist, hideNav]);

  const handleClick = useCallback(() => {
    if (mini && mlist && mlist.length > 0) {
      if (!hasClick) {
        setHasClick(true);
        setNav({titles, id, mlist});
      } else {
        setHasClick(false);
        setNav(undefined);
      }
    }
  }, [mini, mlist, hasClick, setNav, titles, id]);

  return (
    <>
      <div
        className={c(_s.item, active ? _s.border : null)}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        onClick={handleClick}
      >
        <NavLink
          className={({ isActive }) => c(isActive ? _s.active : null)}
          to={ROUTER_PATH + urls}
          end={urls === '/'} 
        >
            {titles} 
        </NavLink>
        {mlist?.length > 0 ? <IconRight turn={active} size={mini ? 10 : 6} /> : null}
      </div>
      {
        mini && mlist?.length > 0 && active ? <NavSub list={mlist} mini={mini} /> : null
      }
    </>
  )
}


const Header = ({ menu, mini }: { menu: TAPI.TMenuItem[]; mini: boolean; } ) => {

  const [showNav, setShowNav] = useState(false); // 移动端显示菜单 | PC 端显示二级菜单
  const [subNavData, setSubNav] = useState<TAPI.TMenuItem>(); // 二级菜单内容
  const params = useParams<{ name:string; type: string }>();

  const timeRef = useRef<NodeJS.Timeout>();
  const resetRef = useRef<NodeJS.Timeout>();

  const stopHideSubNav = () => {
    clearTimeout(timeRef.current);
    clearTimeout(resetRef.current);
  };

  const showSubNav = (t:TAPI.TMenuItem) => {
    clearTimeout(timeRef.current);
    clearTimeout(resetRef.current);
    setShowNav(true);
    setSubNav(t);
  };

  const hideSubNav = () => {
    timeRef.current = setTimeout(() => {
      setShowNav(false);
      setSubNav((t) => {
        const n =  t ? {...t, id: '-'} : {id: '-'} as TAPI.TMenuItem;
        return n;
      });
    }, 0);
    resetRef.current = setTimeout(() => {
      setSubNav(undefined);
    }, 300);
  };

  useEffect(() => {
    setShowNav(!mini);
  }, [params.name, params.type, mini]);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params.name, params.type]);

  useEffect(() => {
    if (mini) document.getElementsByTagName('html')[0].style.overflow = showNav ? 'hidden' : 'auto';
  }, [showNav, mini]);


  return (
    <>
      <div className={_s.bannerHold}></div>
      <header className={_s.wrap}>
        <div className={_s.nav}>
          <div className={_s.main}>
            <div className={_s.logo}>
              <Link to={ROUTER_PATH + '/'}><img src={logo} alt="" /></Link>
            </div>
            <div className={c(_s.list, mini && showNav ? _s.showNav : null)}>
              {
                menu.map(({ titles, mlist, urls, id }) => 
                  <NavItem
                    key={id}
                    titles={titles}
                    active={ !!subNavData && subNavData.mlist?.length > 0 && id === subNavData.id }
                    mlist={mlist}
                    urls={urls}
                    id={id}
                    mini={mini}
                    setNav={mini ? setSubNav : showSubNav}
                    hideNav={hideSubNav}
                  />
                )
              }
              {
                mini ? <i className={c(_s.icon, _s.icon_close)} onClick={() => setShowNav(false)}></i> : null
              }
            </div>
            {
              mini ? <div className={_s.nav_button} onClick={() => setShowNav(true)}></div> : null
            }
          </div>
        </div>
        {
          !mini && !!subNavData && subNavData.mlist?.length > 0 ? 
          <div className={c(_s.subNav, !showNav ? _s.hideSubNav : null)} onMouseEnter={stopHideSubNav} onMouseLeave={hideSubNav}>
            <div className={_s.main}>
              <div className={_s.title}>{subNavData.titles}</div>
              <NavSub list={subNavData.mlist} mini={mini} />
            </div>
          </div>
          : null
        }
      </header>
    </>
  )
}

export default Header;