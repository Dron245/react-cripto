import React from 'react';
import { Layout } from 'antd';
import { Typography } from 'antd';
import Chart from '../Chart';
import TableCripto from '../TableCripto';
import './appContent.css'
import { cartSelector } from '../../redux/cart/selectors';
import {useSelector} from "react-redux";
const AppContent = () => {
	const { assets } =useSelector(cartSelector);
	return (
		<Layout.Content style={{width:'100%'}} className='content' >
			<Typography.Title style={{color:'#fff', width:'max-content'}} level={3}>
				Портфель: {''}
				{assets
				.map((asset) => asset.totalAmount)
				.reduce((acc, v)=>(acc+=v), 0)
				.toFixed(2)} $
			</Typography.Title>
			<Chart/>
			<TableCripto/>
		</Layout.Content>
	); 
};

export default AppContent;
