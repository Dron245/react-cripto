import { createSlice } from '@reduxjs/toolkit';
import { cryptoDataLS, percentage } from '../../utils';
import { fetchCrypto, qwe } from '../crypto/asyncfunctions';
import { options } from '../../components/api';
// import {}
import { fetchAssets } from '../../components/api';
// const resp = await fetch('https://openapiv1.coinstats.app/coins', options);
// const { result } = await resp.json();
// export const crypto = result;
const { assets } = cryptoDataLS();
const initialState = {
	assets,
};
const zxc = qwe()
console.log(zxc);

// console.log(crypto);
// const crypto = await dispath(fetchCrypto()).unwrap()
export const cart = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem(state, action) {
			const crypto = fetchCrypto()
			console.log(crypto);
			
			const coin = crypto.find((c) => c.id === action.payload.id);
			state.assets.push({
				...action.payload,
				grow: action.payload.price < coin.price, //доход
				percent: percentage(action.payload.price, coin.price), //доход в процентах
				trade: coin.price, // нынешний курс монеты
				totalAmount: action.payload.amount * coin.price, //количество денег в данный момент
				totalProfit:
					action.payload.amount * coin.price -
					action.payload.amount * action.payload.price, // доход в дныый момент
				name: coin.name,
			});
		},
	},
});

export const { addItem } = cart.actions;
export default cart.reducer;
