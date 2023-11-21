import _s from './index.module.scss';
import c from 'classnames';


const News = ({
  link,
  type,
  text,
  time,
  className,
  mini,
  tips,
}: {
  link: string;
  type: string;
  text: string;
  time: string;
  className?: string;
  mini?: boolean;
  tips?: string;
}) => {

  return (
    <div className={c(_s.news, className, (mini ? _s.mini : ''))} data-tips={tips}>
      <p className={_s.type}>{type}</p>
      <a href={link}>
          {text}
      </a>
      <p className={_s.time}>
        <span>{time}</span> <i className={c(_s.icon, _s.icon_right)}></i>
      </p>
    </div>
  )
}

export default News;