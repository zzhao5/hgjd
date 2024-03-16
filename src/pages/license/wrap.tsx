import Banner from '@/components/banner';
import { Outlet } from 'react-router-dom';

const LicensesWrap = () => {
  return (
    <>
      <Banner name='资质证明' />
      <Outlet />
    </>
  )
}

export default LicensesWrap;