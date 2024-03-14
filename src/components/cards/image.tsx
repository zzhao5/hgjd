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
  link?: string;
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
        img && link ? <Link to={link} className={c(_s.imgLink, border ? _s.imgBorder : null)} style={{paddingTop: `${proportion}%`,}}><img src={img} alt={title} /></Link> :
        img ? <span className={c(_s.imgLink, border ? _s.imgBorder : null)} style={{paddingTop: `${proportion}%`,}}><img src={img} alt={title} /></span> :
        video ? <div className={_s.video}><video src={video} preload='preload' controls></video></div> : <div className={_s.placeholder} style={{paddingTop: `${proportion}%`}}></div>
      }
      {
        title ? <p className={_s.title}>
          {
            link ? <Link to={link}>{title}</Link> : title
          }
        </p> : null
      }
      {
        text && text !== title ? <p>
          {
            link ? <Link to={link}>{text}</Link> : text
          }
        </p> : null
      }
    </div>
  )
}

export default Image;