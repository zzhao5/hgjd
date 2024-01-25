import c from 'classnames';
import _s from './index.module.scss';
import Banner from '@/components/banner';
import pic1 from './images/pic_1.jpeg';
import pic2 from './images/pic_2.jpeg';
import pic3 from './images/pic_3.jpeg';

const Text = ({ year, text }: { year?: string; text: string; }) => {
  return (
    <div className={_s.text}>
      {
        year ? <p className={_s.year}>{year}</p> : null
      }
      <p className={_s.content}>{text}</p>
    </div>
  )
}


const About = () => {

  return (
    <>
      <Banner name='关于我们' />
      <section className={c(_s.type1, _s.main)}>
        <div className={_s.img}><img src={pic1} /></div>
        <Text year='2005年' text='上海汉光知识产权数据科技有限公司成立' />
      </section>
      <section className={c(_s.type2, _s.main)}>
        <div className={_s.img}><img src={pic3} /></div>
        <div className={_s.textBox}>
          <Text year='2011年' text='上海汉光知识产权数据科技有限公司获得行政许可开展知识产权司法鉴定工作' />
          <Text year='2019年' text='上海汉光知识产权数据科技有限公司入选 “人民法院对外委托专业机构专业人员信息平台”，类别“知识产权”和“科技咨询”，执业范围：全国' />
          <Text year='2022年' text='上海汉光知识产权数据科技有限公司获得中国知识产权研究会知识产权鉴定专委会颁发的“鉴定机构登记入库证书”，登记号3103' />
        </div>
      </section>
      <section className={c(_s.type3, _s.main)}>
        <Text text='擅长领域：专利和商业秘密，截至目前累计完成案件量百余件，部分参与案件为省（市）和全国行业知识产权当年十大或者经典案例' />
        <div className={_s.img}><img src={pic2} /></div>
      </section>
    </>
  )
}

export default About;