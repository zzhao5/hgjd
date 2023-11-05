import { NavLink, useParams } from "react-router-dom";
import './index.scss';

const Header = () => {
  const {type, id} = useParams();
  return (
    <header className="header">
      <div className="header_wrap">
        <div className="header_subnav">
          <NavLink className="header_subnav__item" to={`/ext/${id}/`}>VR外观</NavLink>
          <NavLink className="header_subnav__item" to={`/pano/${id}/`}>VR内饰</NavLink>
          <NavLink className="header_subnav__item" to={`/videos/${id}/`}>视频说明书</NavLink>
          <NavLink className="header_subnav__item" to={`/pics/${id}/`}>图集</NavLink>
        </div>
      </div>
    </header>
  )
}

export default Header;