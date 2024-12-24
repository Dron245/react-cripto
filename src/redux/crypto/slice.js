import { createSlice } from "@reduxjs/toolkit";
import { fetchCrypto } from "./asyncfunctions";

const initialState = {
	crypto: [],
	status: 'load',
};

export const crypto = createSlice({
	name: 'crypto',
	initialState,
	reducers: {
		setCrypto(state, action) {
			state.crypto = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchCrypto.pending, (state) => {
			state.status = 'load';
			state.crypto = [];
		});
		builder.addCase(fetchCrypto.fulfilled, (state, action) => {
			state.status = 'success';
			state.crypto = action.payload;
		});
		builder.addCase(fetchCrypto.rejected, (state) => {
			state.status = 'error';
			state.crypto = [];
		});
	},
});

export const { setCrypto } = crypto.actions;
export default crypto.reducer;