import { Link } from 'react-router-dom';
import _s from './index.module.scss';
import c from 'classnames';


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
  className?: string;
}) => {

  return (
    <div className={c(_s.text, className)}>
      {
        type ? <p className={_s.title}>
          {typeLink ? <Link to={typeLink}>{type}</Link> : type}
          {time ? <span>{time}</span> : null}
        </p> : null
      }
      <p>
        {link ? <Link to={link}>{text}</Link> : text}
      </p>
    </div>
  )
}

export default Text;