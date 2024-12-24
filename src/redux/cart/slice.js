import { createSlice } from '@reduxjs/toolkit';
import { cryptoDataLS } from '../../utils';

const { assets } = cryptoDataLS();
const initialState = {
	assets,
};

export const cart = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem(state, action) {
			state.assets.push(action.payload);
		},
	},
});

export const { addItem } = cart.actions;
export default cart.reducer;
