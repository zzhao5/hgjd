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
  title: string;
  text: string;
  className?: string;
}) => {

  return (
    <div className={c(_s.text, className)}>
      <p className={_s.title}>
        {link ? <a href={link}>{title}</a> : title}
        {time ? <span>{time}</span> : null}
      </p>
      <p>
        {link ? <a href={link}>{text}</a> : text}
      </p>
    </div>
  )
}

export default Text;