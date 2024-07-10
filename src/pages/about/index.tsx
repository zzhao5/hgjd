import c from 'classnames';
import _s from './index.module.scss';
import Banner from '@/components/banner';
import pic1 from './images/pic_1.jpg';
import pic2 from './images/pic_2.jpg';
import pic3 from './images/pic_3.jpg';

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
        <div className={_s.img}><img src={pic1} alt='上海汉光知识产权数据科技有限公司成立' /></div>
        <Text year='2005年' text='上海汉光知识产权数据科技有限公司成立' />
      </section>
      <section className={c(_s.type2, _s.main)}>
        <div className={_s.img}><img src={pic3} alt='上海汉光知识产权数据科技有限公司获得行政许可开展知识产权司法鉴定工作' /></div>
        <div className={_s.textBox}>
          <Text year='2011年' text='上海汉光知识产权数据科技有限公司获得行政许可开展知识产权司法鉴定工作' />
          <Text year='2019年' text='上海汉光知识产权数据科技有限公司入选 “人民法院对外委托专业机构专业人员信息平台”，类别“知识产权”和“科技咨询”，执业范围：全国' />
          <Text year='2022年' text='上海汉光知识产权数据科技有限公司获得中国知识产权研究会知识产权鉴定专委会颁发的“鉴定机构登记入库证书”，登记号3103' />
          <Text year='2023年12月' text='上海汉光知识产权数据科技有限公司成为上海首届鉴定专委会会员单位。' />
        </div>
      </section>
      <section className={c(_s.type3, _s.main)}>
        <Text year='2024年1月' text='上海汉光入选国家知识产权局组织的知识产权鉴定机构名录库。' />
        <div className={_s.img}><img src={pic2} alt='上海汉光入选国家知识产权局组织的知识产权鉴定机构名录库。' /></div>
      </section>
    </>
  )
}

export default About;