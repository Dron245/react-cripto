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
export function fetchAssets() {
	return new Promise((resolve, reject) => {
		// const qwe = fetch('https://dummyjson.com/posts?limit=4')
		// if (qwe.ok) {
		// 	resolve(qwe)
		// 	const asd = qwe.json()
		// 	console.log(qwe);
		// } 
	  setTimeout(() => {
		 resolve(cryptoAssets)
	  }, 1000)
	})
 }

export const options = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		'X-API-KEY': 'SlH1TeRxGk4RUQFZFmuywvQ6FIjZkUKnAuRcQMJ1W+4=',
	},
};
