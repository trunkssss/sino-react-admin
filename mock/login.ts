/*
 * @Author: wangzhijian
 * @Date: 2022-04-17 22:07:35
 * @LastEditTime: 2022-04-20 14:46:48
 */
import { Response, Request } from 'express';
export default {
  'POST /sino-auth/oauth/token': (req: Request, res: Response) => { 
    setTimeout(() => {
      const data = {
        code: 0,
        msg: '',
        data: { token: 1} 
      }
      // res.send(new Error('no connected'));
    }, 1000);
   },
  // '/login/a11': { a: 1234 },
  // '/api/users/:userId': { a: 1 },
  // '/api/b': (req: Request, res: Response) => {
  //   res.end(JSON.stringify({ b: 1 }));
  // },
}
