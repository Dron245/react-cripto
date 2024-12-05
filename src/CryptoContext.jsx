import React, { createContext, useEffect, useState } from 'react';
import { fetchAssets, options } from './components/api';
import { percentage } from './utils';
const CryptoContext = createContext({
	loading: false,
	assets: [], 
	crypto: [],
});

export const CryptoContextProvider = ({children}) => {
	const [loading, setLoading] = useState(false); // загрузка
	const [assets, setAssets] = useState([]); // какие валюты купил
	const [crypto, setCrypto] = useState([]); //база из CRIPTO API
	useEffect(() => {
		async function preload() {
			try {
				setLoading(true);
				const cryptoAssets = await fetchAssets();
				const resp = await fetch('https://openapiv1.coinstats.app/coins', options);
				const { result } = await resp.json();
				// const { result } = await fakeFetchCrypto();
				
				setAssets(
					cryptoAssets.map((asset) => {
						const coin = crypto.find((c) => c.id === asset.id);
						return {
							grow: asset.price < coin.price, //доход
							percent: percentage(asset.price, coin.price), //доход в процентах
							trade: coin.price, // нынешний курс монеты
							totalAmount: asset.amount * coin.price, //количество денег в данный момент
							totalProfit: asset.amount * coin.price - asset.amount * asset.price, // доход в дныый момент
							...asset,
						};
					})
				);
				setCrypto(result);
				setLoading(false);
			} catch (error) {
				console.log(`ошибка: ${error}`);
			}
		}

		preload();
	}, []);

	return (
		
		<CryptoContext.Provider value={{ loading, crypto, assets }}>
			{children}
		</CryptoContext.Provider>
	);
};

// export default AppContext
export default CryptoContext;
