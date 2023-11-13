import c from 'classnames';
import _s from './index.module.scss';
import Title from '../../components/title';

const Main = () => {
  return (
    <>
      <section className={_s.banner}>
        {/* <h1>汉之光华知识产权鉴定服务平台</h1>
        <h6>huanziguanghua intellectual properly appraial service platform</h6>
        <ul>
          <li><i className={c(_s.icon, _s.icon_diamond)}></i><div><p>专业</p><p>professional</p></div></li>
          <li><i className={c(_s.icon, _s.icon_tianping)}></i><div><p>公正</p><p>notary</p></div></li>
          <li><i className={c(_s.icon, _s.icon_internet)}></i><div><p>科学</p><p>science</p></div></li>
        </ul> */}
        <h1 className={_s.main}>专业、公正、科学</h1>
        <h3 className={_s.main}>知识产权证据服务</h3>
      </section>
      <section className={_s.best}>
        <div className={_s.main}>
          <div className={_s.img}>
            <img src="https://t7.baidu.com/it/u=27018761,936335273&fm=193&f=GIF" alt="" />
          </div>
          <div className={_s.text}>
            <h6>为什么选择我们？</h6>
            <p>专业的知识产权鉴定团队，为您提供专业的知识产权鉴定服务专业的知识产权鉴定团队，为您提供专业的知识产权鉴定服务</p>
          </div>
        </div>
      </section>
      <section className={c(_s.news, _s.main)}>
        <Title name="新闻动态" more="/news/" />
        <ul>
          {
            [1, 2, 3, 4, 5, 6].map((item, index) => {
              return (
                <li key={index}>
                  <a href="">
                    <p className={_s.type}>新闻分类</p>
                    <p className={_s.text}>
                      专业的知识产权鉴定团队，为您提供专业的知识产权鉴定服务专业的知识产权鉴定团队，为您提供专业的知识产权鉴定服务
                    </p>
                    <p className={_s.time}>
                      2023-11-10
                    </p>
                  </a>
                </li>
              )
            })
          }
        </ul>
      </section>
      <section className={c(_s.img_list, _s.main)}>
        <Title name="汉光资质" more='/about/' />
        <ul>
          {
            [1, 2, 3].map((item, index) => {
              return (
                <li key={index}>
                  <a href=""><img src="https://t7.baidu.com/it/u=27018761,936335273&fm=193&f=GIF" alt="" /></a>
                  <p className={_s.name}><a href="">法院的问题</a></p>
                  <p><a href="">专业的知识产权鉴定团队，为您提供专业的知识产权鉴定服务专业的知识产权鉴定团队，为您提供专业的知识产权鉴定服务</a></p>
                </li>
              )
            })
          }
        </ul>
      </section>
      <section className={c(_s.text_list, _s.main)}>
        <Title name="汉光研究" more='/about/' border />
        <ul>
          {
            [1, 2, 3].map((item, index) => {
              return (
                <li key={index}>
                  <p className={c(_s.title)}>
                    <span className={_s.name}>汉光研究</span>
                    <span>2023-11-10</span>
                  </p>
                  <p className={_s.text}>
                    专业的知识产权鉴定团队，为您提供专业的知识产权鉴定服务专业的知识产权鉴定团队，为您提供专业的知识产权鉴定服务
                  </p>
                </li>
              )
            })
          }
        </ul>
      </section>
    </>
  )
}

export default Main;