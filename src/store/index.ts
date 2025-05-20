import { defineStore } from "pinia";

export const useStore = defineStore("main", {
	state: () => {
		return {
			someState: "你好 pinia",
		};
	},
	persist: true,
});
