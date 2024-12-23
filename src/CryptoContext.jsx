import React, { createContext, useEffect, useState, useRef } from 'react';
import { fetchAssets, options } from './components/api';
import { percentage } from './utils';
const CryptoContext = createContext({});
import { useDispatch, useSelector } from "react-redux";
import { cartSelector } from './redux/cart/selectors';
export const CryptoContextProvider = ({ children }) => {
	const [loading, setLoading] = useState(false); // загрузка
	// const [assets, setAssets] = useState([]); // какие валюты купил
	const [crypto, setCrypto] = useState([]); //база из CRIPTO API
	const ismounted = useRef(false);
	const { assets } = useSelector(cartSelector);
	function buyAssets(assets, baseCrypto) {
		return assets.map((asset) => {
			const coin = baseCrypto.find((c) => c.id === asset.id);
			return {
				grow: asset.price < coin.price, //доход
				percent: percentage(asset.price, coin.price), //доход в процентах
				trade: coin.price, // нынешний курс монеты
				totalAmount: asset.amount * coin.price, //количество денег в данный момент
				totalProfit: asset.amount * coin.price - asset.amount * asset.price, // доход в дныый момент
				name: coin.name,
				...asset,
			};
		});
	}
	useEffect(() => {
		 function preload() {
			// try {
				setLoading(true);
				// const cryptoAssets = await fetchAssets();

				// const resp = await fetch('https://openapiv1.coinstats.app/coins', options);
				// const { result } = await resp.json();
				// const { result } = await fakeFetchCrypto();
				// console.log(cryptoAssets, result);
				// setAssets(buyAssets(cryptoAssets, result));
				// setCrypto(result);
				setLoading(false);
			// } catch (error) {
				// console.log(`ошибка: ${error}`);
			// }
		}
		preload();
	}, []);
	useEffect(() => {
		if ((ismounted.current)) {
			const json = JSON.stringify(assets);
			localStorage.setItem("Cart", json);
		}
		ismounted.current = true;
	}
	 ,[assets]);
	// function addAsset(newAsset) {
	// 	setAssets((prew) => buyAssets([...prew, newAsset], crypto));
	// }
	return (
		<CryptoContext.Provider value={{ loading }}>
			{children}
		</CryptoContext.Provider>
	);
};

export default CryptoContext;
