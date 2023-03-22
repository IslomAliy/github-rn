import {request} from './request';

export const getUser = async (username: string) => {
  console.log('calling');
  return await request({
    method: 'get',
    url: `/users/${username}`,
  });
};
