// @ts-ignore
/* eslint-disable */

declare namespace TAPI {
  /**
   * 导航菜单列表
   */
  type TMenuList = {
    titles: string;
    urls: string;
    id: number | string;
    mlist: TMenuList;
  }[];
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
  }
  type TBannerInfo = {
    id: number | string;
    pctureUrl: string;
    pctureName: string;
    openUrl: string;
  }
  /**
   * 获取新闻列表
   */
  type TGetNewsList = {
    newsId: number;
    pageNo?: number;
    /** 每页条数 */
    pageSize?: number;
  };

  type TGetNewsInfo = {
    id?: number | string;
  }

  type TNewsList = {
    total: number;
    size: number;
    current: number;
    pages: number;
    records: TNewsListItem[];
    orders: any[];
  }

  type TNewsListItem = {
    id: number | string;
    title: string;
    link: string;
  }

  type TPagination = {
    onChange: (page: number, pageSize: number) => void;
    current?: number;
    total: number;
    pageSize: number;
  }
}
