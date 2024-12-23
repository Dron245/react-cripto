import { createSlice } from '@reduxjs/toolkit';
import { cryptoDataLS, percentage } from '../../utils';
// import { fetchAssets } from '../../components/api';
// const resp = await fetch('https://openapiv1.coinstats.app/coins', options);
// const { result } = await resp.json();
// export const crypto = result;
// console.log(crypto);
const { assets } = cryptoDataLS();
const initialState = {
	assets,
};
export const cart = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem(state, action) {
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

	// extraReducers: (builder) => {
	// 	builder.addCase(fetchAssets.pending, (state) => {
	// 		state.status = 'load';
	// 		state.items = [];
	// 	});
	// 	builder.addCase(fetchAssets.fulfilled, (state, action) => {
	// 		state.status = 'success';
	// 		state.items = action.payload;
	// 	});
	// 	builder.addCase(fetchAssets.rejected, (state) => {
	// 		state.status = 'error';
	// 		// alert('ошибка в получении пицц');
	// 		state.items = [];
	// 	});
	// },
});

export const { addItem } = cart.actions;
export default cart.reducer;
