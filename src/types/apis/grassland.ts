export interface grasslandInfo {
	grassId: number; // 草场ID
	area: number; // 草场面积
	type: string; // 草场类型
	yield: number; // 草场产量
	year: number; // 年份
	month: number; // 月份
}

export interface grasslandInfoPut extends grasslandInfo {
	id: number; // 草场ID
}
