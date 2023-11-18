import _s from './index.module.scss';
import c from 'classnames';


const ImgText = ({
  link,
  img,
  title,
  text,
  className,
}: {
  link: string,
  img: string,
  title: string,
  text: string,
  className?: string,
}) => {

  return (
    <div className={c(_s.img_text, className)}>
      <a href={link}><img src={img} alt={title} /></a>
      <p className={_s.name}><a href={link}>{title}</a></p>
      <p><a href={link}>{text}</a></p>
    </div>
  )
}

export default ImgText;