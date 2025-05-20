export interface UserInfo {
	id?: number; // 用户id
	userId?: string; // 用户id
	avatar?: string; // 头像
	name: string;
	phone?: string; // 电话号码
	username?: string; // 电话号码
	province: string; // 省份
	area: string; // 地区
	town: string; // 镇
	village: string; // 村
	size: number | string; // 家庭人口数
}
