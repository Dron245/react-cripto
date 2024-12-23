export function percentage(a, b) {
	return +(100 * Math.abs((a - b) / ((a + b) / 2))).toFixed(2);
}

export function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

export const cryptoDataLS = () => {
	const json = localStorage.getItem("Cart");
	const assets = JSON.parse(json) || [];
	const data = {
		assets: assets,
	};
	return data;
};