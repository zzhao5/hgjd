import _s from './index.module.scss';
import API from '@/apis';
import { useEffect, useState } from 'react';
import { Man, Image } from '@/components/cards';
import Title from '@/components/title';
import c from 'classnames';


const ROUTER_PATH = process.env.REACT_APP_ROUTER;

const Group = () => {
  const [typical, setTypical] = useState<TAPI.TNewsItem>();
  const [team, setTeam] = useState<TAPI.TNewsItem[]>();
  const [institution, setInstitution] = useState<TAPI.TNewsItem[]>();

  useEffect(() => {
    const getData = async () => {
      const result =  await Promise.all([
        API.getDataInfo({ id: 35, }),
        API.getDataList({ newsId: 28, pageNo: 1, pageSize: 6, }),
        API.getDataList({ newsId: 29, pageNo: 1, pageSize: 8, }),
      ]);
      return result;
    };
    getData().then((res) => {
      setTypical(res[0].result.info);
      setTeam(res[1].result.records);
      setInstitution(res[2].result.records);
    });
  }, []);

  return (
    <div className={_s.wrap}>
      <section className={_s.main}>
        <div className={_s.text}>
          依托上海市雄厚的科学资源、门类齐全的技术实力以及完整的产业链基础，建立有丰富的专家资源库和检测资源库。现有入库专家200名，合作的检测、检验机构和国家重点实验室五十多家，覆盖上海交通大学、复旦大学、同济大学、华东师范大学、上海大学等985,211的高校，涵盖机械、电子、化工、生物、软件、芯片等多个技术类别。
        </div>
      </section>
      {
        typical ? 
        <section className={c(_s.main)}>
          <Title name='典型专家' border />
          <div>
            <Man img={typical.imgs} name={typical.titles} title={typical.remarks} link={`${ROUTER_PATH}/group/typical/`} text={typical.describes} />
          </div>
        </section> : null
      }
      {
        team ? 
        <section className={_s.main}>
          <Title name='专家团队' border more={`${ROUTER_PATH}/group/team/`} />
          <div className={c(_s.flex_2, _s.border)}>
            {
              team.map(({id, imgs, titles, describes, remarks}) => {
                return <Man key={id} img={imgs} name={titles} title={remarks} link={`${ROUTER_PATH}/group/${id}/`} text={describes} />
              })
            }
          </div>
        </section> : null
      }
      {
        institution ? 
        <section className={_s.main}>
          <Title name='合作机构' border more={'institution'} />
          <div className={_s.flex_4}>
            {
              institution.map(({id, imgs, titles}) => {
                return <Image key={id} className={'borderMode'} proportion={40} img={imgs} text={titles} />
              })
            }
          </div>
        </section> : null
      }
    </div>
  )
}

export default Group;