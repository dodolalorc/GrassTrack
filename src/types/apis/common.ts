export interface CommonResp {
  code: number // 响应码
  msg: string // 响应信息
  data: unknown // 响应数据
  [key: string]: unknown // 其他数据
}
