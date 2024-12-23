import { configureStore } from '@reduxjs/toolkit';
import cart from './cart/slice';
import crypto from './crypto/slice';
// import { useDispatch } from 'react-redux';
export const store = configureStore({
	reducer: {
		crypto,
		cart,
	},
});

// export const useAppDispatch = useDispatch