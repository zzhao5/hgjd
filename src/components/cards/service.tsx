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
  className?: string;
}) => {
  const handleClick = () => {
    sessionStorage.setItem('scroll', window.scrollY.toString());
  }

  return (
    <div className={c(_s.service, className)}>
      <Link onClick={handleClick} to={link} className={_s.content}>
        <div>
          <p className={_s.type}>{type}</p>
          {
            text.map((item, index) => {
              return <p key={index} className={_s.item}><span>{item.titles}</span><IconRight /></p>
            })
          }
        </div>
      </Link>
    </div>
  )
}

export default Service;