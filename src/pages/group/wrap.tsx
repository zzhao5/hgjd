import Banner from '@/components/banner';
import { Outlet } from 'react-router-dom';

const GroupWrap = () => {
  return (
    <>
      <Banner name='专家和合作机构' />
      <Outlet />
    </>
  )
}

export default GroupWrap;