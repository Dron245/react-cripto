import React, { useContext } from 'react';
import { Layout, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import AppHeader from './AppHeader/AppHeader';
import AppContent from './AppContent/AppContent';
import AppSider from './AppSider/AppSider';
import CryptoContext from '../CryptoContext';

const AppLayout = () => {
	const { loading } = useContext(CryptoContext);
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
