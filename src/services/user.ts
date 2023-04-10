import { request } from './request';

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

export const searchUser = async (
  query: string,
  page: number,
  perPage: number
) => {
  return await request({
    method: 'get',
    url: `/search/users?q=${query}&page=${page}&per_page=${perPage}`,
  });
};
