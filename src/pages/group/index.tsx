import React, { useCallback } from 'react';
import c from 'classnames';
import _s from './index.module.scss';
import API from '@/apis';
import { useEffect, useMemo, useState } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import Banner from '@/components/banner';
import Title from '@/components/title';
import IconRight from '@/components/icon_right';


const Group = () => {
  const { type } = useParams<{ type: string;}>();
  const [data, setData] = useState<TAPI.TServiceData[]>();

  useEffect(() => {
    // API.getNewsInfo({
    //   type,
    // }).then((res) => {
    //   setData(res.data);
    // });
    setData([{
      type: 'appraisal',
      title: '汉光鉴定服务',
      data: [
        {id: 1, title: '鉴定服务鉴定服务鉴定服务', content: '汉光鉴定服务汉光鉴定服务汉光鉴定服务汉光鉴定服务,汉光鉴定服务汉光鉴定服务,汉光鉴定服务汉光鉴定服务汉光鉴定服务'}
      ],
    }])
  }, []);


  return (
    <>
      <Banner name='观点和经验' />
    </>
  )
}

export default Group;