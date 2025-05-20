/*
 * 设置token、profile等信息
 */

import { userGetProfile } from "@/api/apis/user";
import { useAccessTokenStore } from "@/store/accessToken";
import { useUserProfileStore } from "@/store/userProfile";
export const setUserBasicInfo = (token: string, name: string) => {
	// 设置token
	const accessTokenStore = useAccessTokenStore();
	accessTokenStore.setAccessToken(token);
	accessTokenStore.setName(name);
	// 设置用户信息
	userGetProfile()
		.then((response) => {
			console.log(response);
			const res = response.data;
			if (res.code === 0) {
				const userInfo = res.data;
				// 设置用户信息
				useUserProfileStore().setUserInfo(userInfo);
			}
		})
		.catch((err) => {});
};
