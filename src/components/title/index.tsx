import _s from './index.module.scss';
import c from 'classnames';


const Title = ({
  name,
  more,
}: {
  name: string,
  more?: string,
}) => {

  return (
    <div className={_s.title}>
      <span className={_s.name}>{name}</span>
      {more ? <a className={_s.more} href={more}></a> : ''}
    </div>
  )
}

export default Title;