import service from "@/api/server/service";

export const AnimalType = () => service.get("/animal/type");