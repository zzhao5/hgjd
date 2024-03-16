import axios from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL;

/**
 * 获取网站信息
 */
const getSiteInfo = async () => {
  try {
    const res = await axios.get(`${baseURL}hanguang-community/site/index/siteInfo`,);
    return res.data;
  } catch {
    return {
      "success": true,
      "message": "获取成功",
      "code": 200,
      "result": {
          "menuList": [
              {
                  "id": "16",
                  "createBy": null,
                  "createTime": null,
                  "delFlag": null,
                  "updateBy": null,
                  "updateTime": null,
                  "titles": "首页",
                  "urls": "/",
                  "contents": null,
                  "isNews": null,
                  "isLeaf": null,
                  "parentId": null,
                  "sortNo": null,
                  "status": null,
                  "mlist": []
              },
              {
                  "id": "17",
                  "createBy": null,
                  "createTime": null,
                  "delFlag": null,
                  "updateBy": null,
                  "updateTime": null,
                  "titles": "关于我们",
                  "urls": "/about/",
                  "contents": null,
                  "isNews": null,
                  "isLeaf": null,
                  "parentId": null,
                  "sortNo": null,
                  "status": null,
                  "mlist": []
              },
              {
                  "id": "18",
                  "createBy": null,
                  "createTime": null,
                  "delFlag": null,
                  "updateBy": null,
                  "updateTime": null,
                  "titles": "服务内容",
                  "urls": "/service/",
                  "contents": null,
                  "isNews": null,
                  "isLeaf": null,
                  "parentId": null,
                  "sortNo": null,
                  "status": null,
                  "mlist": [
                      {
                          "id": "23",
                          "createBy": null,
                          "createTime": null,
                          "delFlag": null,
                          "updateBy": null,
                          "updateTime": null,
                          "titles": "咨询服务",
                          "urls": "/service/consultation/",
                          "contents": null,
                          "isNews": null,
                          "isLeaf": null,
                          "parentId": null,
                          "sortNo": null,
                          "status": null,
                          "mlist": []
                      },
                      {
                          "id": "24",
                          "createBy": null,
                          "createTime": null,
                          "delFlag": null,
                          "updateBy": null,
                          "updateTime": null,
                          "titles": "诉讼支持服务",
                          "urls": "/service/lawsuit/",
                          "contents": null,
                          "isNews": null,
                          "isLeaf": null,
                          "parentId": null,
                          "sortNo": null,
                          "status": null,
                          "mlist": []
                      },
                      {
                          "id": "22",
                          "createBy": null,
                          "createTime": null,
                          "delFlag": null,
                          "updateBy": null,
                          "updateTime": null,
                          "titles": "鉴定服务",
                          "urls": "/service/appraisal/",
                          "contents": null,
                          "isNews": null,
                          "isLeaf": null,
                          "parentId": null,
                          "sortNo": null,
                          "status": null,
                          "mlist": []
                      }
                  ]
              },
              {
                  "id": "19",
                  "createBy": null,
                  "createTime": null,
                  "delFlag": null,
                  "updateBy": null,
                  "updateTime": null,
                  "titles": "观点和经验",
                  "urls": "/viewpoint/",
                  "contents": null,
                  "isNews": null,
                  "isLeaf": null,
                  "parentId": null,
                  "sortNo": null,
                  "status": null,
                  "mlist": []
              },
              {
                  "id": "20",
                  "createBy": null,
                  "createTime": null,
                  "delFlag": null,
                  "updateBy": null,
                  "updateTime": null,
                  "titles": "专家和合作机构",
                  "urls": "/group/",
                  "contents": null,
                  "isNews": null,
                  "isLeaf": null,
                  "parentId": null,
                  "sortNo": null,
                  "status": null,
                  "mlist": [
                      {
                          "id": "27",
                          "createBy": null,
                          "createTime": null,
                          "delFlag": null,
                          "updateBy": null,
                          "updateTime": null,
                          "titles": "典型专家",
                          "urls": "/group/typical/",
                          "contents": null,
                          "isNews": null,
                          "isLeaf": null,
                          "parentId": null,
                          "sortNo": null,
                          "status": null,
                          "mlist": []
                      },
                      {
                          "id": "28",
                          "createBy": null,
                          "createTime": null,
                          "delFlag": null,
                          "updateBy": null,
                          "updateTime": null,
                          "titles": "专家团队",
                          "urls": "/group/team/",
                          "contents": null,
                          "isNews": null,
                          "isLeaf": null,
                          "parentId": null,
                          "sortNo": null,
                          "status": null,
                          "mlist": []
                      },
                      {
                          "id": "29",
                          "createBy": null,
                          "createTime": null,
                          "delFlag": null,
                          "updateBy": null,
                          "updateTime": null,
                          "titles": "合作机构",
                          "urls": "/group/institution/",
                          "contents": null,
                          "isNews": null,
                          "isLeaf": null,
                          "parentId": null,
                          "sortNo": null,
                          "status": null,
                          "mlist": []
                      }
                  ]
              },
              {
                  "id": "21",
                  "createBy": null,
                  "createTime": null,
                  "delFlag": null,
                  "updateBy": null,
                  "updateTime": null,
                  "titles": "联系我们",
                  "urls": "/contact/",
                  "contents": null,
                  "isNews": null,
                  "isLeaf": null,
                  "parentId": null,
                  "sortNo": null,
                  "status": null,
                  "mlist": []
              }
          ],
          "picList": [],
          "siteInfo": {
              "id": "1",
              "createBy": null,
              "createTime": null,
              "delFlag": 0,
              "updateBy": "admin",
              "updateTime": "2023-11-27 23:46:26",
              "siteName": "汉光官网",
              "siteLogo": "temp/WIN_20221219_11_24_12_Pro_1701099982915.jpg",
              "brandLogo": "temp/WIN_20221219_11_24_12_Pro_1701099984691.jpg",
              "qrCode": null,
              "icp": "沪ICP备05053582号-5 ",
              "ga": "111",
              "email": "lul@iprjianding.com",
              "tels": "021-52666106 ",
              "address": "上海市静安区南京西路580号仲益大厦B座723-725",
              "copyrightInformation": "版权所有 Copyright © 2003 汉之光华 All Rights Reserved. ",
              "seoTitles": "汉之光华鉴定官网",
              "seoKey": "鉴定、汉光鉴定、汉之光华鉴定、汉之光华",
              "seoDescription": "汉之光华鉴定官网",
              "friendlyLinks": ""
          }
      },
      "timestamp": 1701256003501
    }
  }
};

const getDataList = async (params: TAPI.TGetNewsList) => {
  const res = await axios.get(`${baseURL}hanguang-community/site/index/newsList`, { params });
  sessionStorage.setItem(JSON.stringify(params), JSON.stringify(res.data));
  return res.data;
}

// 加入缓存的 getDataList，如果有缓存则直接使用缓存，否则请求数据
const getList = (opt: TAPI.TGetNewsList, setData: Function) => {
    const sessionData = sessionStorage.getItem(JSON.stringify(opt));
    if (sessionData) {
      setData(JSON.parse(sessionData).result);
    } else {
      getDataList(opt).then((res) => {
        setData(res.result);
      });
    }
  }

const getDataInfo = async (params: TAPI.TGetNewsInfo) => {
  const res = await axios.get(`${baseURL}hanguang-community/site/index/queryNewsById`, { params });
  return res.data;
}

const API = {
  getSiteInfo,
  getDataList,
  getList,
  getDataInfo,
};
  
export default API;