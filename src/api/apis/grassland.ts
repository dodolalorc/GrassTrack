import service from '@/api/server/service'
import type { grasslandInfo, grasslandInfoPut } from '@/types/apis/grassland'

export const grasslandInfoList = () => service.get('/grassland/info')
export const grasslandInfoAdd = (data: grasslandInfo) => service.post('/grassland/info', data)
export const grasslandInfoUpdate = (data: grasslandInfoPut) => service.put('/grassland/info', data)
export const grasslandInfoDelete = (ids: number[]) =>
  service.delete('/grassland/info', { data: ids })
