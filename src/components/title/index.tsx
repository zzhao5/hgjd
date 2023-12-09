import { Link } from 'react-router-dom';
import _s from './index.module.scss';
import c from 'classnames';
import IconRight from '@/components/icon_right';


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
      {more ? <Link className={_s.more} to={more}><IconRight double size={8} /></Link> : null}
    </div> : null
  )
}

export default Title;