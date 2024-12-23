import { createAsyncThunk } from "@reduxjs/toolkit";
import { options } from "../../components/api";

export const fetchCrypto = createAsyncThunk(
	"crypto/cryptoStatus",
	async () => {
		const  resp  = await fetch('https://openapiv1.coinstats.app/coins', options)
		const { result } = await resp.json();
		const crypto = result;
		return crypto;
	}
);