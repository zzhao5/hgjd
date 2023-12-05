import _s from './index.module.scss';
import c from 'classnames';
import pic1 from './images/pic_banner1.jpeg';
import pic2 from './images/pic_banner2.jpeg';
import pic3 from './images/pic_banner3.jpeg';
import pic4 from './images/pic_banner4.jpeg';
import pic5 from './images/pic_banner5.jpeg';
import pic6 from './images/pic_banner6.jpeg';
import pic7 from './images/pic_banner7.jpeg';
import { useMemo } from 'react';

const PICS = [
  { text: '消息', pic: pic1, },
  { text: '关于', pic: pic2, },
  { text: '服务', pic: pic3, },
  { text: '经验', pic: pic4, },
  { text: '专家', pic: pic5, },
  { text: '联系', pic: pic6, },
  { text: '资质', pic: pic7, },
];

const Banner = ({
  name,
}: {
  name: string;
}) => {
  const idx = useMemo(() => {
    let index = 0;
    for( let i = 0; i < PICS.length; i++) {
      if (name.indexOf(PICS[i].text) !== -1) {
        index =i;
        break;
      }
    }
    return index;
  }, [name]);

  return (
    <div className={c(_s.banner)} data-name={name} style={{backgroundImage: `url(${PICS[idx].pic})`,}}></div>
  )
}

export default Banner;