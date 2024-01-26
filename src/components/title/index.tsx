import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import _s from './index.module.scss';
import c from 'classnames';
import IconRight from '@/components/icon_right';


const Title = ({
  name,
  more,
  border,
  className,
  tags,
}: {
  name?: string;
  more?: string;
  border?: boolean;
  className?: string;
  tags?: ReactElement;
}) => {

  return (
    name ?
    <div className={c(_s.title, className, tags ? _s.hasTags : null, border ? _s.border : null)}>
      <span className={_s.name}>{name}</span>
      {more ? <Link className={_s.more} to={more}><IconRight double size={8} /></Link> : null}
      {tags ? tags : null}
    </div> : null
  )
}

export default Title;