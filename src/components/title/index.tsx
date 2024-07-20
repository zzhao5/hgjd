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
        {more ? <Link className={_s.more} state={state} to={more}><IconRight /></Link> : null}
      </div>
      {tags ? tags : null}
    </> : null
  )
}

const TitleCenter = ({
  name,
  more,
  state,
  children,
}: {
  name?: string;
  more?: string;
  border?: boolean;
  className?: string;
  state?: object;
  children?: ReactElement;
}) => {
  return (
    <div className={_s.main}>
      <div className={_s.titleCenter}>{name}</div>
      {children}
      {more ? <Link className={_s.moreCenter} state={state} to={more}>查看更多</Link> : null}
    </div>
  )
}

export { TitleCenter };
export default Title;