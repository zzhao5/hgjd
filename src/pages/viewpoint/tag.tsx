import { Fragment, useCallback, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import c from 'classnames';
import _s from './index.module.scss';
import 'swiper/css';

const TAG_LIST = ['全部', '商业秘密', '专利', '著作权', '其他'];
const SUB_TAG_LIST = ['全部', '非公知性', '同一性', '质证审查', '证据', '案例分析', '诉讼相关', '载体', '其他'];

const Tag = ({click, current, subCurrent} : {click: Function; current: number; subCurrent: number;}) => {
  const [hasSwiper, setHasSwiper] = useState(false);

  const handleClick = useCallback((index: number) => () => {
    click(index, index === 1 ? subCurrent : '');
  }, [click, subCurrent]);

  const hadndelSubClick = useCallback((index: number) => () => {
    click(current, current === 1 ? 10 + index : '');
  }, [click, current]);

  return (
    <dl className={_s.tags}>
      <dt>学术分类</dt>
      <dd>
        {
          TAG_LIST.map((item, index) => {
            return <span key={index} className={c(_s.item, current === index ? _s.active : null )} onClick={handleClick(index)}>{item}</span>
          })
        }
      </dd>
      {
        current === 1 ? <>
          <dt>细分分类</dt>
          <dd>
            {
              SUB_TAG_LIST.map((item, index) => {
                return <span key={index} className={c(_s.item, subCurrent === 10 + index ? _s.active : null )} onClick={hadndelSubClick(index)}>{item}</span>
              })
            }
          </dd>
        </> : null
      }
    </dl>
  )
}

export default Tag;