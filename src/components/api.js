import { cryptoAssets } from "../data";
// export default function fethdata() {
// 	const options = {
// 		method: 'GET',
// 		headers: {
// 			accept: 'application/json',
// 			'X-API-KEY': 'SlH1TeRxGk4RUQFZFmuywvQ6FIjZkUKnAuRcQMJ1W+4=',
// 		},
// 	};

// 	fetch('https://openapiv1.coinstats.app/coins', options)
// 		.then((res) => res.json())
// 		.then((res) => console.log(res))
// 		.catch((err) => console.error(err));
// }

async function fethData() {
	const qwe = await fetch('../data.js')
	// const asd = await qwe.json()
	console.log(qwe);
	
}

fethData()
export function fetchAssets() {
	return new Promise((resolve, reject) => {
		// const qwe = fetch('https://dummyjson.com/posts?limit=4')
		// console.log(qwe);

		// if (qwe.ok) {
		// 	resolve('rtyrtyrty')
		// }
		setTimeout(() => {
			resolve(cryptoAssets);
			reject("fgfgfg");
		}, 1000);
	});
}

const promiise = new Promise(function (resolve, reject) {
	const asd = true;
	if (asd) {
		resolve("asdasdasd");
	} else {
		reject("123123123");
	}
	// const qwe = fetch("https://dummyjson.com/posts?limit=4")
	// 	.then((res) => res.json())
	// 	.then((res) => (
	// 		console.log(res.posts)
			
	// 	))
	// 	.catch(() => console.log("err"));
	
});
export const options = {
	method: "GET",
	headers: {
		accept: "application/json",
		"X-API-KEY": "SlH1TeRxGk4RUQFZFmuywvQ6FIjZkUKnAuRcQMJ1W+4=",
	},
};
