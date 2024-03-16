import Banner from '@/components/banner';
import { Outlet } from 'react-router-dom';

const NewsWrap = () => {
  
  return (
    <>
      <Banner name='最新消息' />
      <Outlet />
    </>
  )
}

export default NewsWrap;