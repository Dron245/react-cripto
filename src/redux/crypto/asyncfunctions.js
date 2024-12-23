import { createAsyncThunk } from "@reduxjs/toolkit";
import { options } from "../../components/api";

export const fetchCrypto = createAsyncThunk(
	"crypto/cryptoStatus",
	async () => {
		console.log(133);
		const  resp  = await fetch('https://openapiv1.coinstats.app/coins', options)
		const { result } = await resp.json();
		const crypto = await result;
		return crypto;
	}
);