import _s from './index.module.scss';
import c from 'classnames';


const Title = ({
  name,
  more,
  border,
}: {
  name: string,
  more?: string,
  border?: boolean,
}) => {

  return (
    <div className={c(_s.title, border ? _s.border : '')}>
      <span className={_s.name}>{name}</span>
      {more ? <a className={_s.more} href={more}></a> : ''}
    </div>
  )
}

export default Title;