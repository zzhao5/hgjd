import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import _s from './index.module.scss';
import c from 'classnames';


const ManLink = ({
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


const Man = ({
  link,
  img,
  name,
  title,
  text,
  className,
}: {
  link?: string;
  img?: string;
  name: string;
  title?: string;
  text: string;
  className?: string;
}) => {
  const handleClick = () => {
    sessionStorage.setItem('scroll', window.scrollY.toString());
  }

  return (
    <ManLink className={c(_s.man, className ? _s[className] : null)} link={link} handleClick={handleClick}>
      <div>
        <div className={_s.name}>{name}</div>
        { title ? <p className={_s.title}>业务领域：{title}</p> : null }
        <p className={_s.message}>{text}</p>
      </div>
    </ManLink>
  )
}

export default Man;