export interface UserInfo {
  avatar?: string; // 头像
  name: string;
  username: string; // 电话号码
  province: string; // 省份
  area: string; // 地区
  town: string; // 镇
  village: string;  // 村
  size: number | string;  // 家庭人口数
}