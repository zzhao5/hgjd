import _s from './index.module.scss';
import c from 'classnames';
import IconRight from '../icon_right';
import { Link } from 'react-router-dom';


const Card = ({
  link,
  type,
  text,
  time,
  className,
  mini,
  tips,
}: {
  link: string;
  type?: string;
  text: string;
  time: string;
  className?: string;
  mini?: boolean;
  tips?: string;
}) => {
  const handleClick = () => {
    if (!mini) sessionStorage.setItem('scroll', window.scrollY.toString());
  }

  return (
    <Link className={c(_s.card, (className ? _s[className] : null), (mini ? _s.mini : null))} onClick={handleClick} to={link}>
      <div className={_s.content} data-tips={tips}>
        { type ? <p className={_s.type} data-type={type}></p> : null}
        <div className={_s.detailed}>
          <div className={_s.title}>{text}</div>
          <p className={_s.time}>
            <span className={_s.date}>{time}</span> <IconRight  className={_s.icon_right} size={6} />
          </p>
        </div>
      </div>
    </Link>
  )
}

export default Card;