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
   * 最新消息
   */
  type TNews = {
    id: number | string;
    titles: string;
    imgs: string;
    describes: string;
    tags: string;
    contents: string;
    createTime: s
  }

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
    [key: string] : {
      titles: string;
      id: number | string;
      urls: string;
      records: TAPI.TNewsItem[];
    }
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
   * 专家
   */
  type TGroupPeopel = {
    id: number | string;
    img: string;
    name: string;
    title: string;
    link: string;
    content: string;
  }


  /**
   * 消息组件
   */
  type TGetNewsList = {
    newsId: number | string;
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
    records: TNewsItem[];
  };

  type TNewsItem = {
    id: number | string;
    menuId: number | string;
    menuName: string;
    titles: string;
    imgs?: string;
    describes: string;
    tags?: string;
    contents: string;
    video?: string;
    createTime: string;
    remarks?: string;
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
