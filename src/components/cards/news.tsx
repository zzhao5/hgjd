import _s from './index.module.scss';
import c from 'classnames';


const News = ({
  link,
  type,
  text,
  time,
  className,
}: {
  link: string,
  type: string,
  text: string,
  time: string,
  className?: string,
}) => {

  return (
    <div className={c(_s.news, className)}>
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