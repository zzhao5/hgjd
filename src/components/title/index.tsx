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
  state,
}: {
  name?: string;
  more?: string;
  border?: boolean;
  className?: string;
  tags?: ReactElement;
  state?: object;
}) => {

  return (
    name ?
    <>
      <div className={c(_s.title, className, border ? _s.border : null)}>
        <span className={_s.name}>{name}</span>
        {more ? <Link className={_s.more} state={state} to={more}><IconRight double size={8} /></Link> : null}
      </div>
      {tags ? tags : null}
    </> : null
  )
}

export default Title;