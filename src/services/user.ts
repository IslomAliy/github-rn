import {request} from './request';

export const getUser = async (username: string) => {
  return await request({
    method: 'get',
    url: `/users/${username}`,
  });
};

export const getUserRepos = async (username: string) => {
  return await request({
    method: 'get',
    url: `/users/${username}/repos`,
  });
};
