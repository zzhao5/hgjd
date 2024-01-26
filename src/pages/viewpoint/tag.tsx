import { useCallback, useState, Fragment } from 'react';
import c from 'classnames';
import _s from './index.module.scss';

const TAG_LIST = ['全部', '商业秘密', '专利', '著作权', '其他'];

const Tag = ({click} : {click: Function;}) => {
  const [active, setActive] = useState(0);
  const handleClick = useCallback((index: number) => () => {
    setActive(index);
    const tagName = index === 0 ? '' : TAG_LIST[index];
    click(tagName);
  }, []);

  return (
    <div className={_s.tags}>
      {
        TAG_LIST.map((item, index) => {
          return <Fragment key={index}>
            {
              index === 0 ? null : <i className={_s.interval}></i>
            }
            <span className={c(_s.item, active === index ? _s.active : null )} onClick={handleClick(index)}>{item}</span>
          </Fragment>
        })
      }
    </div>
  )
}

export default Tag;