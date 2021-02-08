import request from '../utils/request';

export async function search(param?: any) {
  return request('/api/search', param);
}
