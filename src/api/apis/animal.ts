import service from "@/api/server/service";
import type { AnimalTypeInfo, AnimalInfo } from "@/types/AnimalInfo";

export const AnimalType = () => service.get("/animal/type");
export const AnimalInfoList = () => service.get("/animal/info");
export const AnimalInfoAdd = (data: AnimalInfo) =>
	service.post("/animal/info", data);
export const AnimalInfoUpdate = (data: AnimalInfo) =>
	service.put("/animal/info", data);
export const AnimalInfoDel = (ids: number[]) =>
	service.delete("/animal/info", { data: { ids } });
