import { Link } from 'react-router-dom';
import _s from './index.module.scss';
import c from 'classnames';


const Image = ({
  link,
  img,
  title,
  text,
  className,
  video,
  border,
  proportion = 75, 
}: {
  link: string;
  img?: string;
  title?: string;
  text?: string;
  video?: string;
  className?: string;
  border?: boolean;
  proportion?: number; // 宽高比，默认 75%
}) => {

  return (
    <div className={c(_s.image, className)}>
      
      {
        img ? <Link to={link} className={c(_s.imgLink, border ? _s.imgBorder : null)} style={{paddingTop: `${proportion}%`,}}><img src={img} alt={title} /></Link> :
        video ? <div className={_s.video}><video src={video} preload='preload' controls></video></div> : null
      }
      {
        title ? <p className={_s.title}><Link to={link}>{title}</Link></p> : null
      }
      {
        text && text !== title ? <p><Link to={link}>{text}</Link></p> : null
      }
    </div>
  )
}

export default Image;