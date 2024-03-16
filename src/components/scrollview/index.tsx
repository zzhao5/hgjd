import { useEffect, useRef } from 'react';
import { useSearchParams, useNavigationType, useBlocker } from 'react-router-dom';
import _s from './index.module.scss';

const ScrollView = ({children}: {children: any; }) => {
  const mainRef = useRef<HTMLDivElement>(null);
  const [searchParams] = useSearchParams();
  const navType = useNavigationType();

  useEffect(() => {
    const scroll = Number(sessionStorage.getItem('scroll'));
    if (mainRef.current && searchParams.get('page') && navType !== 'POP') {
      mainRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (navType === 'POP' && scroll) {
      setTimeout(() => {
        window.scrollTo({ top: scroll, behavior: 'smooth' });
      }, 100);
      sessionStorage.removeItem('scroll');
    }
  }, [searchParams, navType]);

  return (
    <section className={_s.main} ref={mainRef}>
      {children}
    </section>
  )
}

export default ScrollView;