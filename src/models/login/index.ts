/*
 * @Author: wangzhijian
 * @Date: 2022-04-19 22:22:50
 * @LastEditTime: 2022-04-19 22:24:21
 */
export interface LoginParams {
  username: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}

export interface LoginError {
  error: string;
}
