import Banner from '@/components/banner';
import { Outlet } from 'react-router-dom';

const ViewPointWrap = () => {
  return (
    <>
      <Banner name='观点和经验' />
      <Outlet />
    </>
  )
}

export default ViewPointWrap;