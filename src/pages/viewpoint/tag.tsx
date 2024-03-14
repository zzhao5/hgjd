import { Fragment, useCallback, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import c from 'classnames';
import _s from './index.module.scss';
import 'swiper/css';

const TAG_LIST = ['全部', '商业秘密', '专利', '著作权', '其他'];
const SUB_TAG_LIST = ['全部', '非公知性', '同一性', '质证审查', '证据', '案例分析', '诉讼相关', '载体', '其他'];

const Tag = ({click, mini, current, subCurrent} : {click: Function; mini: boolean; current: number; subCurrent: number;}) => {
  const [hasSwiper, setHasSwiper] = useState(false);

  const handleClick = useCallback((index: number) => () => {
    click(index, index === 1 ? subCurrent : '');
  }, [click]);

  const hadndelSubClick = useCallback((index: number) => () => {
    click(current, current === 1 ? 10 + index : '');
  }, [click]);

  return (
    <>
      <div className={_s.tags}>
        {
          TAG_LIST.map((item, index) => {
            return <span key={index} className={c(_s.item, current === index ? _s.active : null )} onClick={handleClick(index)}>{item}</span>
          })
        }
      </div>
      
      {
        current === 1 ?
          <Swiper
            slidesPerView={'auto'}
            centeredSlidesBounds={true}
            centerInsufficientSlides={true}
            centeredSlides={true}
            slideToClickedSlide={true}
            className={_s.subTags}
            enabled={mini}
            onSliderMove={() => setHasSwiper(true)}
            onClick={() => setHasSwiper(true)}
          >
            {
              SUB_TAG_LIST.map((item, index) => {
                return <SwiperSlide key={index} className={c(_s.item, subCurrent === 10 + index ? _s.active : null )} onClick={hadndelSubClick(index)}>{item}</SwiperSlide>
              })
            }
            {
              !hasSwiper && mini ? <div className={_s.tips} slot="container-end"><i className={c(_s.icon, _s.icon_triangle)}></i></div> : null
            }
          </Swiper> : null
      }
    </>
  )
}

export default Tag;