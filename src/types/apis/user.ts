import type { UserInfo } from "../userInfo";
export interface userLoginByPswdRes {
	password: string;
}

export interface userLoginByPswdResponse {
	code: number;
	msg: string;
	data: {
		name: string;
		token: string;
	};
}

export interface userRegisterRes extends userLoginByPswdRes, UserInfo { }
