// @ts-ignore
/* eslint-disable */

declare namespace TAPI {
  type TpMenuList = {
    titles: string;
    urls: string;
    id: number | string;
    mlist: TpMenuList;
  }[];
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
