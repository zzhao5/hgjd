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
  state,
}: {
  link?: string;
  time?: string;
  type?: string;
  typeLink?: string;
  text?: string;
  className?: string;
  state?: object;
}) => {

  return (
    <div className={c(_s.text, className)}>
      {
        type ? <p className={_s.title}>
          {typeLink ? <Link to={typeLink} state={state}>{type}</Link> : type}
        </p> : null
      }
      {time ? <span className={_s.time}>{time}</span> : null}
      <p className={_s.content}>
        {link ? <Link to={link} state={state}>{text}</Link> : text}
      </p>
    </div>
  )
}

export default Text;