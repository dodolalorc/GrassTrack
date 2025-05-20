export interface AnimalTypeInfo {
	id: number; // 动物类型id
	name: string; // 动物类型名称
	type: string; // 动物类型
	max: number; // 动物数量
	min: number; // 动物数量
	goal: number; // 动物目标数量
	need: number; // 动物需求数量
}

export interface AnimalInfo {
	id: number; // 动物id
	species: string; // 动物种类
	quantity: number; // 动物数量
	year: number; // 动物年份
	month: number; // 动物月份
	farmId?: number; // 牧户id
	typeId: number; // 动物类型id
}
