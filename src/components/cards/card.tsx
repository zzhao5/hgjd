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

  return (
    <div className={c(_s.card, className, (mini ? _s.mini : null))} data-tips={tips}>
      { type ? <p className={_s.type}>{type}</p> : null}
      <Link to={link} className={_s.content}>{text}</Link>
      <p className={_s.time}>
        <span>{time}</span> <IconRight double />
      </p>
      <IconRight className={_s.icon_right} size={8} />
    </div>
  )
}

export default Card;