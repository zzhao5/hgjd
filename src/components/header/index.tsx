import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import _s from './index.module.scss';
import c from 'classnames';
import logo from './images/logo.png'
import IconRight from "../icon_right";


const NavSub = ({list}: { list:TAPI.TMenuItem[] }) => {
  return (
    <div className={_s.sub}>
      {
        list.map((subItem) =>
          <p key={subItem.id}><NavLink to={subItem.urls}>{subItem.titles}</NavLink></p>
        )
      }
    </div>
  )
}

const NavItem = ({ titles, mlist, urls, mini, id, setNav, hideNav, active }: { mini: boolean; active: boolean; setNav: Function; hideNav: Function; } & TAPI.TMenuItem) => {
  const handleEnter = () => {
    console.log('handleEnter');
    if (!mini) {
      if (mlist && mlist.length > 0) {
        setNav({titles, id, mlist});
      } else {
        hideNav('handleEnter - leave');
      }
    }
  };

  return (
    <>
      <NavLink
        className={({ isActive }) => c(_s.item, (isActive ? _s.active : null), (active ? _s.border : null))}
        to={urls}
        end={urls === '/'} 
        onMouseEnter={handleEnter}
        onMouseLeave={() => hideNav('onMouseLeave')}
      >
          <span>{titles}</span> {mlist?.length > 0 ? <IconRight turn={active} /> : null}
      </NavLink>
      {
        mini && mlist?.length > 0 ? <NavSub list={mlist} /> : null
      }
    </>
  )
}


const Header = ({ menu }: { menu: TAPI.TMenuItem[] } ) => {

  const [mini, setMini] = useState(false); // 是否为移动端
  const [showNav, setShowNav] = useState(false); // 移动端显示菜单 | PC 端显示二级菜单
  const [subNavData, setSubNav] = useState<TAPI.TMenuItem>(); // 二级菜单内容

  const bannerRef = useRef<HTMLDivElement>(null);
  const timeRef = useRef<NodeJS.Timeout>();
  const resetRef = useRef<NodeJS.Timeout>();

  const resetMini = useCallback(() => {
    if (bannerRef.current && bannerRef.current.clientWidth < 768) {
      setMini(true);
    } else {
      setMini(false);
    }
  }, [bannerRef.current]);

  const stopHideSubNav = useCallback(() => {
    console.log('stopHideSubNav');
    clearTimeout(timeRef.current);
    clearTimeout(resetRef.current);
  }, [timeRef.current, resetRef.current]);

  const showSubNav = useCallback((t:TAPI.TMenuItem) => {
    console.log('showSubNav');
    clearTimeout(timeRef.current);
    clearTimeout(resetRef.current);
    setShowNav(false);
    setSubNav(t);
  }, [timeRef.current, resetRef.current]);

  const hideSubNav = useCallback(() => {
    console.log('hideSubNav');
    timeRef.current = setTimeout(() => {
      console.log('hideSubNav - setTimeout');
      setShowNav(true);
      setSubNav((t) => {
        const n =  t ? {...t, id: '-'} : {id: '-'} as TAPI.TMenuItem;
        return n;
      });
    }, 300);
    resetRef.current = setTimeout(() => {
      console.log('hideSubNav - resetTimeout');
      setSubNav(undefined);
    }, 610);
  }, [timeRef.current, resetRef.current]);

  /**
   * 监听当前视口大小
   */
  useEffect(() => {
    const throttle = (fn = Function.prototype, delay = 20) => {
      let lastTime = Date.now();
      // TODO: arguments in ts
      return (...args: any) => {
        const nowTime = +new Date();
        if (nowTime - lastTime > delay || !lastTime) {
          fn.apply(this, args);
          lastTime = nowTime;
        }
      };
    };

    const resizeFn = throttle(() => {
      resetMini();
    }, 100);

    // 默认执行一次
    resetMini();
    window.addEventListener('resize', resizeFn);

    return () => {
      window.removeEventListener('resize', resizeFn);
    };
  }, [resetMini]);

  return (
    <header className={_s.wrap} ref={bannerRef}>
      <div className={_s.nav}>
        <div className={_s.main}>
          <div className={_s.logo}>
            <img src={logo} alt="" />
          </div>
          <div className={c(_s.list, mini && showNav ? _s.showNav : null)}>
            {
              menu.map(({ titles, mlist, urls, id }) => 
                <NavItem
                  key={id}
                  titles={titles}
                  active={ !mini && !!subNavData && subNavData.mlist?.length > 0 && id === subNavData.id }
                  mlist={mlist}
                  urls={urls}
                  id={id}
                  mini={mini}
                  setNav={showSubNav}
                  hideNav={hideSubNav}
                />
              )
            }
          </div>
          {
            mini ? <div className={_s.nav_button} onClick={() => setShowNav(true)}></div> : null
          }
        </div>
      </div>
      {
        !mini && !!subNavData && subNavData.mlist?.length > 0 ? 
        <div className={c(_s.subNav, showNav ? _s.hideSubNav : null)} onMouseEnter={stopHideSubNav} onMouseLeave={hideSubNav}>
          <div className={_s.main}>
            <div className={_s.title}>{subNavData.titles}</div>
            <NavSub list={subNavData.mlist} />
          </div>
        </div>
        : null
      }
    </header>
  )
}

export default Header;