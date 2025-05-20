import service from "@/api/server/service";

export const grasslandInfoList = () => service.get("/grassland/info");