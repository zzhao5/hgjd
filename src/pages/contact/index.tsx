import c from 'classnames';
import _s from './index.module.scss';
import Banner from '@/components/banner';
import { Map, APILoader, Marker, ToolBarControl} from '@uiw/react-amap';


const Contact = () => {
  return (
    <>
      <Banner name='联系我们' />
      <section className={c(_s.main, _s.contact)}>
        <div className={_s.card}>
          <p><span>地　址：</span>上海市南京西路580号仲益大厦B座723</p>
          <p><span>电　话：</span>021-52666106</p>
          <p><span>邮　箱：</span>lul@ipjianding.com</p>
          <p><span>联系人：</span>陆女士</p>
          <p><span>网　址：</span>www.ipjianding.com</p>
        </div>
      </section>
      <section className={c(_s.main, _s.map)}>
        <div className={_s.mapDiv}>
          <APILoader akey="decfe3d4a94d70f7d48469c56b463a7a">
            <Map
              dragEnable={true}
              zoom={15}
              center={[121.46591,31.231381]}
              viewMode='2D'
            >
              <Marker visiable={true} title="仲益大厦B座" position={[121.46591,31.231381]} />
            </Map>
          </APILoader>
        </div>
      </section>
    </>
  )
}

export default Contact;