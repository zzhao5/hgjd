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
  link: string;
  img: string;
  name: string;
  title: string;
  text: string;
  className?: string;
}) => {

  return (
    <div className={c(_s.man, className)}>
      <div className={_s.img}>
        <Link to={link}><img src={img} alt={title} /></Link>
      </div>
      <div className={_s.info}>
        <p className={_s.name}><Link to={link}>{name}</Link></p>
        <p className={_s.title}>{title}</p>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Man;