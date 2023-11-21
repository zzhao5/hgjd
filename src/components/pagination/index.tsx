import c from 'classnames';
import Pagination from 'rc-pagination';
import './index.scss';


const Pages = (prop: TAPI.TPagination) => {
  return (
    <Pagination {...prop} />
  )
}

export default Pages;