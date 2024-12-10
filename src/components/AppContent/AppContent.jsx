import React, { useContext } from 'react';
import { Layout } from 'antd';
import CryptoContext from '../../CryptoContext';
import { Typography } from 'antd';

import './appContent.css'

const AppContent = () => {
	const { assets } = useContext(CryptoContext);
	console.log(assets);
	return (
		<Layout.Content className='content' >
			<Typography.Title style={{color:'#fff'}} level={3}>
				{assets
				.map((asset) => asset.totalAmount)
				.reduce((acc, v)=>(acc+=v), 0)
				.toFixed(2)} $
			</Typography.Title>
		</Layout.Content>
	); 
};

export default AppContent;
