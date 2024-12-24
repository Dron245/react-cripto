import React, { useState, useEffect, useRef } from 'react';
import { Layout, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import AppHeader from './AppHeader/AppHeader';
import AppContent from './AppContent/AppContent';
import AppSider from './AppSider/AppSider';
import { fetchCrypto } from '../redux/crypto/asyncfunctions';
import { useSelector, useDispatch } from 'react-redux';
import { cartSelector } from '../redux/cart/selectors';
const AppLayout = () => {
	const [loading, setLoading] = useState(false); // загрузка
	const { assets } = useSelector(cartSelector);
	const dispatch = useDispatch();
	function getCrypto() {
		dispatch(fetchCrypto());
	}
	const ismounted = useRef(false);
	useEffect(() => {
		setLoading(true);
		getCrypto();
		setLoading(false);
	}, []);
	useEffect(() => {
		if (ismounted.current) {
			const json = JSON.stringify(assets);
			localStorage.setItem('Cart', json);
		}
		ismounted.current = true;
	}, [assets]);
	
	return (
		<>
			{loading ? (
				<Spin indicator={<LoadingOutlined spin />} fullscreen size='large' />
			) : (
				<Layout>
					<AppHeader />
					<Layout
						style={{ backgroundColor: '#001529', paddingInline: '1rem', gap: '1rem' }}
					>
						<AppSider />
						<AppContent />
					</Layout>
				</Layout>
			)}
		</>
	);
};

export default AppLayout;
