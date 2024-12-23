import { configureStore } from '@reduxjs/toolkit';
import cart from './cart/slice';

export const store = configureStore({
	reducer: {
		cart,
	},
});