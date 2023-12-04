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
        img ? <Link to={link} className={_s.imgLink}><img src={img} alt={title} /></Link> :
        video ? <div className={_s.video}><video src={video} preload='preload' controls></video></div> : null
      }
      {
        title ? <p className={_s.title}><Link to={link}>{title}</Link></p> : null
      }
      <p><Link to={link}>{text}</Link></p>
    </div>
  )
}

export default Image;