import _s from './index.module.scss';
import c from 'classnames';

const IconRight = ({
  className,
  double,
  size = 5,
  turn,
}: {
  className?: string;
  double?: boolean;
  size?: number;
  turn?: boolean;
}) => {
  return (
    <i className={c(_s.icon, double ? _s.icon_right_double : _s.icon_right, turn ? _s.turn_down : null, className)} style={{fontSize: `${size}px`}}></i>
  )
}

export default IconRight;