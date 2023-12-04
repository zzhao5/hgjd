import { Link } from 'react-router-dom';
import _s from './index.module.scss';
import c from 'classnames';


const Text = ({
  link,
  time,
  title,
  text,
  className,
}: {
  link?: string;
  time?: string;
  title?: string;
  text: string;
  className?: string;
}) => {

  return (
    <div className={c(_s.text, className)}>
      {
        title ? <p className={_s.title}>
          {link ? <Link to={link}>{title}</Link> : title}
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