import c from 'classnames';
import Pagination from 'rc-pagination';
import _s from './index.module.scss';
import Title from '../../components/title';
import API from '../../apis';
import { News, ImgText, Text } from '../../components/cards';
import { useEffect, useState } from 'react';

const Main = ({ data }: { data: {key: string}[] }) => {
  useEffect(() => {
    
  }, []);


  return (
    <>
      <section className={_s.banner}>
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
        <Title name="最新消息" more="/news/" />
        <div className={_s.flex_3}>
          {
            [1, 2, 3, 4, 5, 6].map((item, index) => {
              return (
                <News
                  link={''}
                  key={index}
                  className={index % 2 === 0 ? _s.even : _s.odd}
                  type={'新闻分类'} 
                  time={'2023-11-10'}
                  text={'专业的知识产权鉴定团队，为您提供专业的知识产权鉴定服务专业的知识产权鉴定团队，为您提供专业的知识产权鉴定服务'}
                />
              )
            })
          }
        </div>
      </section>
      <section className={c(_s.img_list, _s.main)}>
        <Title name="汉光资质" more='/about/' />
        <div className={c(_s.flex_3, _s.img_content)}>
          {
            [1, 2, 3].map((item, index) => {
              return (
                <ImgText
                  key={index}
                  link={''}
                  img={'https://t7.baidu.com/it/u=27018761,936335273&fm=193&f=GIF'}
                  title={'汉光资质'}
                  text={'专业的知识产权鉴定团队，为您提供专业的知识产权鉴定服务专业的知识产权鉴定团队，为您提供专业的知识产权鉴定服务'}
                 />
              )
            })
          }
        </div>
      </section>
      <section className={c(_s.text_list, _s.main)}>
        <Title name="汉光研究" more='/about/' border />
        <div>
          {
            [1, 2, 3].map((item, index) => {
              return (
                <Text
                  link={''}
                  key={index}
                  title={'汉光研究'}
                  time={'2023-11-10'}
                  text={'专业的知识产权鉴定团队，为您提供专业的知识产权鉴定服务专业的知识产权鉴定团队，为您提供专业的知识产权鉴定服务'}
                />
              )
            })
          }
        </div>
      </section>
    </>
  )
}

export default Main;