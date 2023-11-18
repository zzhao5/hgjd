import axios from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL;
/**
 * 获取网站信息
 */
const getSiteInfo = async () => {
    const res = await axios.get(`${baseURL}hanguang-community/site/index/siteInfo`,);
    return res.data;
  };

  
export default {
  getSiteInfo,
};