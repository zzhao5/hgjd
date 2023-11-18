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
      <a href={link}>
        <p className={_s.type}>{type}</p>
        <p className={_s.content}>
          {text}
        </p>
        <p className={_s.time}>
          {time}
        </p>
      </a>
    </div>
  )
}

export default News;