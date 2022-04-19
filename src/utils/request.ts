/*
 * @Author: wangzhijian
 * @Date: 2021-05-22 22:13:58
 * @LastEditTime: 2022-04-19 22:15:46
 */
import { extend, ResponseInterceptor } from 'umi-request';

// import { clientId, whiteUrls, clientSecret, INVALID_TOKEN, PATH_LOGIN, INVALID_STATISTIC_API_CODE } from '@/const';
// import { getToken, removeToken } from './auth';
// import { Base64 } from 'js-base64';

/**
 * 异常处理程序
 */
// const errorHandler = (
//   error /* {name, data, response, request, type, Message} */
// ) => {
//   console.log(error);
//   if (error.response) {
//     // The request was made and the server responded with a status code
//     // that falls out of the range of 2xx
//   } else {
//     // The request was made but no response was received or error occurs when setting up the request.
//   }
//   throw error; // If throw. The error will continue to be thrown.
// };

/**
 * 配置request请求时的默认参数
 */
const request = extend({
  // prefix: process.env.BASE_API,
//   errorHandler, // 默认错误处理
  credentials: 'omit', // 默认请求是否带上cookie
  timeout: 10000,
});

// 拦截器先于中间件执行
// request.interceptors.request.use((url, options) => {
//   let draft = { url, options };
//   const isNeedClientId = whiteUrls.includes(url); // 登录接口需要ClientId, 以此判断是否为登录接口
//   draft = {
//     url,
//     options: {
//       ...options,
//       headers: {
//         Authorization: isNeedClientId
//           ? `Basic ${Base64.encode(`${clientId}:${clientSecret}`)}`
//           : '',
//         'Sino-Auth': !isNeedClientId ? getToken() : undefined,
//       },
//     },
//   };

//   return draft;
// });


request.interceptors.response.use(async (response: Response): Promise<Response> => {
  const res = await response.clone().json();
  console.log('res', res);
  const { code, data, msg } = res;
  
  return [code === 0, data, msg] as unknown as Response;
});

export default request;
