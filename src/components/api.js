import { cryptoAssets, cryptoData } from "../data";
export function fetchAssets() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(cryptoAssets);
		}, 500);
	});
}
// export function fakeFetchCrypto() {
// 	return new Promise((resolve) => {
// 	  setTimeout(() => {
// 		 resolve(cryptoData)
// 	  }, 500)
// 	})
//  }
export const options = {
	method: "GET",
	headers: {
		accept: "application/json",
		"X-API-KEY": "SlH1TeRxGk4RUQFZFmuywvQ6FIjZkUKnAuRcQMJ1W+4=",
	},
};
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

// async function fethData() {
// 	const qwe = await fetch('../data.js')
// 	const asd = await qwe.json()
// 	console.log(qwe);
	
// }

// fethData()

// const promise = new Promise(function (resolve, reject) {
	// const asd = true;
	// if (asd) {
	// 	resolve("asdasdasd");
	// } else {
	// 	reject("123123123");
	// }
	// const qwe = fetch("https://dummyjson.com/posts?limit=4")
	// 	.then((res) => res.json())
	// 	.then((res) => (
	// 		console.log(res)
			
	// 	))
	// 	.catch((error) => console.error(error));
	
// });

