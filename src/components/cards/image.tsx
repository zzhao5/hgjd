import _s from './index.module.scss';
import c from 'classnames';


const Image = ({
  link,
  img,
  title,
  text,
  className,
  video,
}: {
  link: string;
  img?: string;
  title?: string;
  text: string;
  video?: string;
  className?: string;
}) => {

  return (
    <div className={c(_s.image, className)}>
      {
        img ? <a href={link}><img src={img} alt={title} /></a> :
        video ? <div className={_s.video}><video src={video} preload='preload' controls></video></div> : null
      }
      {
        title ? <p className={_s.title}><a href={link}>{title}</a></p> : null
      }
      <p><a href={link}>{text}</a></p>
    </div>
  )
}

export default Image;