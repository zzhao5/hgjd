import _s from './index.module.scss';
import API from '@/apis';
import { useEffect, useState } from 'react';
import Banner from '@/components/banner';
import Title from '@/components/title';
import { Image, Text } from '@/components/cards';

const ROUTER_PATH = process.env.REACT_APP_ROUTER;
const ViewPoint = () => {
  const [data, setData] = useState<{total: number; records: TAPI.TNewsItem[]}>();
  const [list, setList] = useState<TAPI.TNewsItem[]>();

  useEffect(() => {
    const getData = async () => {
      const result =  await Promise.all([
        API.getDataList({ newsId: 25, pageNo: 1, pageSize: 2, }),
        API.getDataList({ newsId: 26, pageNo: 1, pageSize: 6, }),
      ]);
      return result;
    };
    getData().then((res) => {
      setData(res[0].result);
      setList(res[1].result.records);
    });
  }, []);


  return (
    <>
      <section className={_s.main}>
        <Title name={'视频案例'} more={data && data.total > 2 ? `${ROUTER_PATH}/viewpoint/case/` : undefined} />
        <div className={_s.flex_2}>
          {
            data?.records.map(({id, titles, describes, imgs}) => {
              return <Image
                key={id}
                img={imgs}
                proportion={56}
                link={`${ROUTER_PATH}/viewpoint/${id}/`}
                title={titles}
                text={describes}
              />
            })
          }
        </div>
      </section>
      <section className={_s.main}>
          <Title name={'学术研讨'} more={`${ROUTER_PATH}/viewpoint/science/`} border />
          <div className={_s.flex_1}>
            {
              list?.map(({id, titles, tags, createTime}) => {
                return <Text
                  key={id}
                  time={createTime.split(' ')[0]}
                  type={tags}
                  link={`${ROUTER_PATH}/viewpoint/${id}/`}
                  text={titles}
                />
              })
            }
          </div>
      </section>
    </>
  )
}

export default ViewPoint;