import type { UserInfo } from "@/types/userInfo";
import { defineStore } from "pinia";

export const useUserProfileStore = defineStore("userProfile", {
	state: () => {
		return {
			userInfo: {} as UserInfo,
		};
	},
	getters: {
		getUserInfo: (state) => {
			return state.userInfo;
		},
	},
	actions: {
		setUserInfo(userInfo: UserInfo) {
			this.userInfo = userInfo;
		},
	},
	persist: true,
});
