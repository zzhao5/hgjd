import { useEffect, useState, useRef, useCallback } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import _s from './index.module.scss';

const throttle = (fn: () => void, dly: number, atl: number) => {
  let timer: NodeJS.Timeout;
  let previous: number;
  const delay = dly || 500;
  const atleast = atl || 1000;
  return function (): void {
    const now = new Date().getTime();
    if (!previous) previous = now;
    if (now - previous > atleast) {
      fn();
      // 重置上一次开始时间为本次结束时间
      previous = now;
    } else {
      clearTimeout(timer);
      timer = setTimeout(function () {
        fn();
      }, delay);
    }
  };
};

const Wrap = ({children}: {children: any; }) => {
  const mainRef = useRef<HTMLDivElement>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  

  useEffect(() => {
    console.log('wrap', location);
    if (mainRef.current && searchParams.get('page')) {
      mainRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [searchParams]);

  return (
    <section className={_s.main} ref={mainRef}>
      {children}
    </section>
  )
}

export default Wrap;