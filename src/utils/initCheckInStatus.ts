/*
 * 设置token、profile等信息
 */

import { useAccessTokenStore } from '@/store/accessToken';
export const setUserBasicInfo = (token: string, name: string) => {
  const accessTokenStore = useAccessTokenStore();
  accessTokenStore.setAccessToken(token);
  accessTokenStore.setName(name);
}