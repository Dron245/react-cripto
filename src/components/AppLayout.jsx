import React, { useContext, useEffect } from 'react';
import { Layout, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import AppHeader from './AppHeader/AppHeader';
import AppContent from './AppContent/AppContent';
import AppSider from './AppSider/AppSider';
import CryptoContext from '../CryptoContext';
import { fetchCrypto } from '../redux/crypto/asyncfunctions';
// import { useAppDispatch } from '../redux/store';
import { useDispatch } from 'react-redux';

const AppLayout = () => {
	const dispatch = useDispatch();
	function getCrypto() {
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
