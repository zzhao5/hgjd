import { Link } from 'react-router-dom';
import _s from './index.module.scss';
import c from 'classnames';


const Man = ({
  link,
  img,
  name,
  title,
  text,
  className,
}: {
  link?: string;
  img?: string;
  name: string;
  title?: string;
  text: string;
  className?: string;
}) => {
  const handleClick = () => {
    sessionStorage.setItem('scroll', window.scrollY.toString());
  }

  return (
    <div className={c(_s.man, className)}>
      <div className={_s.info}>
        <div className={_s.name}>
          {
            link ? <p><Link onClick={handleClick} to={link}>{name}</Link></p> : <p>{name}</p>
          }
          { title ? <p className={_s.title}>业务领域：{title}</p> : null}
        </div>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Man;