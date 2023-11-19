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
   * 
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
  /**
   * 获取新闻列表
   */
  type getNewsList = {
    /** 页码 */
    page?: number;
    /** 每页条数 */
    size?: number;
  };
}
