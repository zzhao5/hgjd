import _s from './index.module.scss';
import c from 'classnames';


const Text = ({
  link,
  time,
  title,
  text,
  className,
}: {
  link: string;
  time: string;
  title: string;
  text: string;
  className?: string;
}) => {

  return (
    <div className={c(_s.text, className)}>
      <p className={_s.title}><a href={link}>{title}</a><span>{time}</span></p>
      <p><a href={link}>{text}</a></p>
    </div>
  )
}

export default Text;