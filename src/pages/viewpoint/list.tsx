import { useEffect, useCallback, useState, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import API from '@/apis';
import Banner from '@/components/banner';
import Title from '@/components/title';
import { Text } from '@/components/cards';
import Pages from '@/components/pagination';
import _s from './index.module.scss';
import Tag from './tag';


const ROUTER_PATH = process.env.REACT_APP_ROUTER;
const ViewList = ({mini} : {mini: boolean;}) => {
  const mainRef = useRef<HTMLDivElement>(null);
  const [data, setData] = useState<TAPI.TNewsList>();
  const [tag, setTag] = useState<number>(0);
  const [subTag, setSubTag] = useState<number>(10);
  const [searchParams, setSearchParams] = useSearchParams();
  const [curPage, setCurPage] = useState(1);

  const handleSetData = useCallback((page: number, tag: number, subTag: number) => {
    API.getDataList({ newsId: 26, pageNo: page, pageSize: 10, tags: tag === 0 ? '' : tag, subTag: subTag === 10 ? '' : subTag }).then((res) => {
      setData(res.result);
      if (mainRef.current && searchParams.get('page')) mainRef.current.scrollIntoView({ behavior: 'smooth' });
    });
  }, [searchParams, mainRef]);

  useEffect(() => {
    const page = Number(searchParams.get('page')) || 1;
    const tag = Number(searchParams.get('tag')) || 0;
    const subTag = Number(searchParams.get('subTag')) || 10;
    setCurPage(page);
    setTag(tag);
    setSubTag(subTag);
    handleSetData(page, tag, subTag);
  }, [searchParams]);


  const handleClick = (tag: number, subTag: number) => {
    setTag(tag);
    setSubTag(subTag);
    setSearchParams({ tag: tag.toString(), subTag: subTag.toString(), page: '1'});
  };

  const pageChange = (page: number) => {
    setSearchParams({ page: page.toString() });
  };

  return (
    <>
      <Banner name='观点和经验' />
      <section className={_s.main} ref={mainRef}>
        <Title name={'学术研讨'} tags={
          <Tag
            click={handleClick}
            mini={mini} 
            current={tag}
            subCurrent={subTag}
          />
        } border />
        <div className={_s.flex_1}>
          { data && data?.records?.length > 0 ? 
            data.records.map(({id, titles, tags, createTime}) => {
              return <Text
                key={id}
                time={createTime.split(' ')[0]}
                type={tags}
                link={`${ROUTER_PATH}/viewpoint/${id}/${tag === 1 && subTag !== 10 ? `${subTag}/` : ''}`}
                text={titles}
              />
            }) : <div className={_s.noData}>暂无相关内容</div>
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