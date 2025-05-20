export const checkDevice = () => {
	if (window.innerWidth < 768) {
		return "mobile";
	} else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
		return "tablet";
	} else {
		return "desktop";
	}
};
