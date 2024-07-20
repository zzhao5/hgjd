import { useEffect, useState } from 'react';
import _s from './index.module.scss';
import API from '@/apis';
import { Image } from '@/components/cards';
import Title from '@/components/title';
import ScrollView from '@/components/scrollview';

const GroupInstitution = () => {
  const [data, setData] = useState<TAPI.TNewsList>();

  useEffect(() => {
    API.getList({ newsId: 29, pageNo: 1, pageSize: 100, }, setData);
  }, []);

  return (
    <ScrollView>
      <Title name='合作机构' border/>
      <div className={_s.flex_4}>
        {
          data?.records.map(({id, imgs, titles}) => {
            return <Image key={id} className={'borderMode'} proportion={40} img={imgs} text={titles} />
          })
        }
      </div>
    </ScrollView>
  )
}

export default GroupInstitution;