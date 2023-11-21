import _s from './index.module.scss';
import c from 'classnames';


const Banner = ({
  name,
  pic,
}: {
  name: string;
  pic: string;
}) => {

  return (
    <div className={c(_s.banner)} style={{backgroundImage: `url(${pic})`,}}>
      <div>{name}</div>
    </div>
  )
}

export default Banner;