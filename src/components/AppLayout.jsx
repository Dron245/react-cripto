import React, { useContext, useEffect } from 'react';
import { Layout, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import AppHeader from './AppHeader/AppHeader';
import AppContent from './AppContent/AppContent';
import AppSider from './AppSider/AppSider';
import CryptoContext from '../CryptoContext';
import { useDispatch } from 'react-redux';
import { fetchCrypto } from '../redux/crypto/asyncfunctions';

const dispatch = useDispatch();

const AppLayout = () => {
	function getCrypto() {
		// const url = 'https://66853f80b3f57b06dd4bf714.mockapi.io/pizzas';
		dispatch(fetchCrypto());
	}
	const { loading } = useContext(CryptoContext);
	useEffect(() => {
	  getCrypto()
	}, [])
	
	if (loading) {
		<Spin indicator={<LoadingOutlined spin />} fullscreen size='large' />;
	}
	return (
		<Layout>
			<AppHeader />
			<Layout style={{backgroundColor:'#001529', paddingInline:'1rem', gap:'1rem'}}>
				<AppSider />
				<AppContent />
			</Layout>
		</Layout>
	);
};

export default AppLayout;
