import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import _s from './index.module.scss';
import API from '@/apis';
import { Man } from '@/components/cards';
import Title from '@/components/title';
import Pages from '@/components/pagination';
import ScrollView from '@/components/scrollview';
import c from 'classnames';


const ROUTER_PATH = process.env.REACT_APP_ROUTER;

const GroupTeam = () => {
  const [data, setData] = useState<TAPI.TNewsList>();
  const [searchParams, setSearchParams] = useSearchParams();
  const [curPage, setCurPage] = useState(1);

  useEffect(() => {
    const page = Number(searchParams.get('page')) || 1;
    setCurPage(page);
    API.getList({ newsId: 28, pageNo: page, pageSize: 16, }, setData);
  }, [searchParams]);

  const pageChange = (page: number) => {
    setSearchParams({ page: page.toString() });
  };


  return (
    <ScrollView>
      <Title name='专家团队' border />
      <div className={c(_s.flex_2, _s.border)}>
        {
          data?.records.map(({id, imgs, titles, remarks, describes}) => {
            return <Man key={id} img={imgs} name={titles} title={remarks} link={`${ROUTER_PATH}/group/${id}`} text={describes} />
          })
        }
      </div>
      {
        data && data.total > 16 ? <Pages current={curPage} total={data.total} pageSize={6} onChange={pageChange} /> : null
      }
    </ScrollView>
  )
}

export default GroupTeam;