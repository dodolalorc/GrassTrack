import service from "@/api/server/service";
import { userLoginByPswdRes, userRegisterRes } from "@/types/apis/user";
import { UserInfo } from "@/types/userInfo";

// 用户注册
export const userRegister = (data: userRegisterRes) => service.post("/login/register", data);
// 用户登录 通过密码登录
export const userLoginByPswd = (data: userLoginByPswdRes) => service.post("/login/login", data);
// 用户登出
export const userLogout = () => service.get("/login/logout");
// 更新用户信息
export const userUpdateProfile = (data: UserInfo) => service.put("/farm/info", data);
// 获取用户信息
export const userGetProfile = () => service.get("/farm/info");