import { Link } from 'react-router-dom';
import _s from './index.module.scss';
import c from 'classnames';


const Title = ({
  name,
  more,
  border,
}: {
  name?: string;
  more?: string;
  border?: boolean;
}) => {

  return (
    name ?
    <div className={c(_s.title, border ? _s.border : null)}>
      <span className={_s.name}>{name}</span>
      {more ? <Link className={_s.more} to={more}></Link> : null}
    </div> : null
  )
}

export default Title;