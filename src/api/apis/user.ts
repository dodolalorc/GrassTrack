import service from "@/api/server/service";
import { userLoginByPswdRes, userRegisterRes } from "@/types/apis/user";
import { UserInfo } from "@/types/userInfo";

export const userRegister = (data: userRegisterRes) => service.post("/login/register", data);

export const userLoginByPswd = (data: userLoginByPswdRes) => service.post("/login/login", data);

export const userUpdateProfile = (data: UserInfo) => service.put("/farm/info", data);