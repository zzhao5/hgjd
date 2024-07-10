import _s from './index.module.scss';
import c from 'classnames';
import IconRight from '../icon_right';
import { Link } from 'react-router-dom';


const Service = ({
  link,
  type,
  text,
  className,
}: {
  link: string;
  type: string;
  text: TAPI.TNewsItem[];
  className?: 'item';
}) => {
  const handleClick = () => {
    sessionStorage.setItem('scroll', window.scrollY.toString());
  }

  return (
    <Link onClick={handleClick} to={link} className={c(_s.service, className ? _s[className] : null)}>
      <div className={_s.content}>
        <i className={_s.icon}></i>
        <p className={_s.type}>{type}</p>
        <div className={_s.list}>
          {
            text.map((item, index) => {
              return <p key={index}>{item.titles}</p>
            })
          }
        </div>
        <IconRight size={8} />
      </div>
    </Link>
  )
}

export default Service;