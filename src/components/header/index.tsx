import { useCallback, useEffect, useRef, useState } from "react";
import { Link, NavLink, useMatch, useParams } from "react-router-dom";
import _s from './index.module.scss';
import c from 'classnames';
import logo from './images/logo.png'
import IconRight from "../icon_right";


const ROUTER_PATH = process.env.REACT_APP_ROUTER;

const NavSub = ({list}: { list:TAPI.TMenuItem[];}) => {
  return (
    <div className={_s.subItem}>
      {
        list.map((subItem) =>
          <p key={subItem.id}>
            <NavLink to={ROUTER_PATH + subItem.urls}>{subItem.titles}</NavLink>
            <IconRight />
          </p>
        )
      }
    </div>
  )
}

const NavItem = ({ titles, mlist, urls, id, setNav, hideNav, current, handleClick, mini }: { setNav: Function; hideNav: Function; current: number; handleClick: Function; mini: boolean; } & TAPI.TMenuItem) => {
  const inMatch = useMatch(ROUTER_PATH + urls);
  const handleEnter = useCallback(() => {
    if (mlist && mlist.length > 0) {
      setNav({titles, id, mlist});
    }
  }, [titles, id, mlist, setNav]);

  const handleLeave = useCallback(() => {
    if (!mini && mlist && mlist.length > 0) {
      hideNav();
    }
  }, [mlist, hideNav, mini]);

  return (
    <>
      <div
        className={c(_s.item, current === id || (current === 0 && inMatch) ? _s.active : null)}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        onTouchEnd={() => handleClick(id)}
      >
        <NavLink
          className={({ isActive }) => c(isActive ? _s.active : null)}
          to={ROUTER_PATH + urls}
          end={urls === '/'} 
        >
            {titles} 
        </NavLink>
        {mlist?.length > 0 ? <IconRight turn={current === id} /> : null}
      </div>
      {
        mlist?.length > 0 ? <div className={_s.mSubNav}><NavSub list={mlist} /></div> : null
      }
    </>
  )
}


const Header = ({ menu }: { menu: TAPI.TMenuItem[];} ) => {

  const [showNav, setShowNav] = useState(false); // 移动端显示菜单 | PC 端显示二级菜单
  const [subNavData, setSubNav] = useState<TAPI.TMenuItem>(); // 二级菜单内容
  const [current, setCurrent] = useState(0); // 当前选中的一级菜单
  const params = useParams<{ name:string; type: string }>();

  const timeRef = useRef<NodeJS.Timeout>();
  const resetRef = useRef<NodeJS.Timeout>();

  const [mini, setMini] = useState(false); // 是否为小屏幕
  const bodyRef = useRef(document.getElementsByTagName('body')[0] as HTMLBodyElement);

  const resetMini = () => {
    if (bodyRef.current && bodyRef.current.clientWidth <= 820) {
      setMini(true);
    } else {
      setMini(false);
    }
  };

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
    window.scrollTo(0, 0);
  }, [params.name, params.type, mini]);

  useEffect(() => {
    if (mini) document.getElementsByTagName('html')[0].style.overflow = showNav ? 'hidden' : 'auto';
  }, [showNav, mini]);

  useEffect(() => {
    const throttle = (fn = Function.prototype, delay = 20) => {
      let lastTime = Date.now();
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
  }, []);

  return (
    <>
      <header className={_s.wrap}>
        <div className={_s.nav}>
          <div className={_s.main}>
            <div className={_s.logo}>
              <Link to={ROUTER_PATH + '/'}><img src={logo} alt="" /></Link>
            </div>
            <div className={c(_s.list, showNav ? _s.showNav : null)}>
              {
                menu.map(({ titles, mlist, urls, id }) => 
                  <NavItem
                    key={id}
                    titles={titles}
                    mlist={mlist}
                    urls={urls}
                    id={Number(id)}
                    setNav={showSubNav}
                    hideNav={hideSubNav}
                    current={current}
                    handleClick={setCurrent}
                    mini={mini}
                  />
                )
              }
              <i className={c(_s.icon, _s.icon_close)} onClick={() => setShowNav(false)}></i>
            </div>
            <div className={_s.nav_button} onClick={() => setShowNav(true)}></div>
          </div>
        </div>
        {
          !!subNavData && subNavData.mlist?.length > 0 ? 
          <div
            className={c(_s.pcSubNav, !showNav ? _s.hideSubNav : null)} 
            onMouseEnter={stopHideSubNav} 
            onMouseLeave={hideSubNav}
          >
            <div className={_s.main}>
              <div className={_s.title}>{subNavData.titles}</div>
              <NavSub list={subNavData.mlist} />
            </div>
          </div>
          : null
        }
      </header>
    </>
  )
}

export default Header;