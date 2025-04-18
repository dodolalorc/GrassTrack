export interface CommonResp {
  code: number; // 响应码
  msg: string; // 响应信息
  data: any; // 响应数据
  [key: string]: any; // 其他数据
}