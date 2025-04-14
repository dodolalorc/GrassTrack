import service from "@/api/server/service";
import { userLoginByPswdRes } from "@/types/apis/user";

export const userLoginByPswd = (data: userLoginByPswdRes) => service.post("/login/login", data);