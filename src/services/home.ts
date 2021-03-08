import request from '../utils/request';

export async function search(params?: any) {
  return request('https://v0.yiketianqi.com/api?version=v61&appid=69653638&appsecret=SZh9RQY8&ip=222.64.111.97', {
    method: 'POST',
  });
}
