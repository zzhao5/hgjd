import { useEffect, useCallback, useState } from 'react';
import c from 'classnames';
import API from '@/apis';
import Banner from '@/components/banner';
import Title from '@/components/title';
import { Text } from '@/components/cards';
import Pages from '@/components/pagination';
import _s from './index.module.scss';
import Tag from './tag';

const ROUTER_PATH = process.env.REACT_APP_ROUTER;
const ViewList = ({mini} : {mini: boolean;}) => {
  const [data, setData] = useState<TAPI.TNewsList>();
  const [tag, setTag] = useState<string | number>('');
  const [subTag, setSubTag] = useState<string | number>('');
  const [curPage, setCurPage] = useState(1);

  useEffect(() => {
    API.getDataList({ newsId: 26, pageNo: 1, pageSize: 10, }).then((res) => {
      setData(res.result);
    });
  }, []);

  const handleClick = (tag: string | number, subTags: string | number) => {
    setTag(tag);
    setSubTag(subTags);
    API.getDataList({ newsId: 26, pageNo: 1, pageSize: 10, tags: tag, subTag: subTags }).then((res) => {
      setData(res.result);
    });
  };

  useEffect(() => {
    setCurPage(1);
  }, [tag]);

  const pageChange = useCallback((page: number) => {
    setCurPage(page);
    API.getDataList({
      newsId: 26,
      pageNo: page,
      pageSize: 10,
      tags: tag,
      subTag: subTag
    }).then((res) => {
      setData(res.result);
      window.scrollTo(0, 0);
    });
  }, [tag, subTag]);

  return (
    <>
      <Banner name='观点和经验' />
      <section className={_s.main}>
        <Title name={'学术研讨'} tags={<Tag click={handleClick} mini={mini} />} border />
        <div className={_s.flex_1}>
          { data ? 
            data.records.map(({id, titles, tags, createTime}) => {
              return <Text
                key={id}
                time={createTime.split(' ')[0]}
                type={tags}
                link={`${ROUTER_PATH}/viewpoint/${id}/`}
                text={titles}
              />
            }) : null
          }
        </div>
        {
          data && data.total > 10 ? <Pages current={curPage} total={data?.total} pageSize={10} onChange={pageChange} /> : null
        }
      </section>
    </>
  )
}

export default ViewList;