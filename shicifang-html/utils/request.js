import axios from 'axios'
import {getUser} from '@/utils/auth'
// 创建axios实例
const service = axios.create({
    baseURL: 'http://192.168.60.134:7300/mock/5d5bc0b592a91910a9cd950c', // api的base_url
    timeout: 30000, // 请求超时时间
    headers: { 'Authorization':  "Bearer "+getUser().token }
  })
export default service