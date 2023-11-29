// @ts-ignore
/* eslint-disable */

declare namespace TAPI {
  /**
   * 导航菜单列表
   */
  type TMenuItem = {
    titles: string;
    urls: string;
    id: number | string;
    mlist: TMenuItem[];
  };
  /**
   * 网站信息，主要作用于脚文件
   */
  type TWebInfo = {
    id: number | string;
    email: string;
    tels: string;
    address: string;
    copyrightInformation: string;
    icp: string;
    seoTitles: string;
    seoKey: string;
    seoDescription: string;
  };
  /**
   * 首页大图
   */
  type TBannerInfo = {
    id: number | string;
    pctureUrl: string;
    pctureName: string;
    openUrl: string;
  };

  /**
   * 服务内容
   */
  type TServiceData = {
    type: string;
    title: string;
    data: {
      id: number | string;
      title: string;
      content: string;
    }[];
  };

  /**
   * 观点与经验
   */
  type TViewPoint = {
    id: number | string;
    title: string;
    content: string;
    video: string;
  }
  type TViewList = {
    id: number | string;
    title: string;
    content: string;
  }


  /**
   * 消息组件
   */
  type TGetNewsList = {
    newsId: number;
    pageNo?: number;
    /** 每页条数 */
    pageSize?: number;
  };

  type TGetNewsInfo = {
    id?: number | string;
  };

  type TNewsList = {
    total: number;
    size: number;
    current: number;
    pages: number;
    records: TNewsListItem[];
    orders: any[];
  };

  type TNewsListItem = {
    id: number | string;
    title: string;
    link: string;
  };

  /**
   * 翻页组件
   */
  type TPagination = {
    onChange: (page: number, pageSize: number) => void;
    current?: number;
    total: number;
    pageSize: number;
  };
}
