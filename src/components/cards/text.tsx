import { Link } from 'react-router-dom';
import _s from './index.module.scss';
import c from 'classnames';
import IconRight from '../icon_right';


const Text = ({
  link,
  time,
  type,
  typeLink,
  text,
  className,
}: {
  link?: string;
  time?: string;
  type?: string;
  typeLink?: string;
  text?: string;
  className?: 'item';
}) => {
  const handleClick = () => {
    sessionStorage.setItem('scroll', window.scrollY.toString());
  }

  return (
    <div className={c(_s.text, className ? _s[className] : null)}>
      {
        type ? <p className={_s.title}>
          {typeLink ? <Link onClick={handleClick} to={typeLink}>{type}</Link> : type}
        </p> : null
      }
      {time ? <span className={_s.time}>{time}</span> : null}
      <p className={_s.content}>
        {link ? <Link onClick={handleClick} to={link}>{text}</Link> : text}
      </p>
      <span className={_s.icon}><IconRight className={_s.icon_right} size={8} /></span>
    </div>
  )
}

export default Text;