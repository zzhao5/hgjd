import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import _s from './index.module.scss';
import c from 'classnames';

const ImageLink = ({
  link,
  children,
  handleClick,
  className,
}: {
  link?: string;
  handleClick: () => void;
  children: ReactElement;
  className?: string;
}) => {
  return link ? <Link className={className} onClick={handleClick} to={link}>{children}</Link> : <div className={className}>{children}</div>;
}

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
  className?: 'shadowMode' | 'videoMode' | 'borderMode';
  border?: boolean;
  proportion?: number; // 宽高比，默认 75%
}) => {
  const handleClick = () => {
    sessionStorage.setItem('scroll', window.scrollY.toString());
  }
  return (
    <ImageLink className={c(_s.image, className ? _s[className] : null)} handleClick={handleClick} link={link}>
      <div>
        {
          img ? <span className={c(_s.imgLink)} style={proportion ? {paddingTop: `${proportion}%`,} : {}}><img src={img} alt={title} /></span> :
          video ? <div className={_s.video}><video src={video} preload='preload' controls></video></div> :
          <div className={_s.placeholder} style={proportion ? {paddingTop: `${proportion}%`} : {}}></div>
        }
        {
          title ? <p className={_s.title}>
            { title }
          </p> : null
        }
        {
          text && text !== title ? <p>{ text }</p> : null
        }
      </div>
    </ImageLink>
  )
}

export default Image;