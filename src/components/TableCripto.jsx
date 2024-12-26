import React from 'react';
import { Table } from 'antd';
import {useSelector} from "react-redux";
import { cartSelector } from '../redux/cart/selectors';

const TableCripto = () => {
	const { assets } =useSelector(cartSelector);
	const columns = [
		{
			title: 'Криптовалюта',
			dataIndex: 'name',
			showSorterTooltip: {
				target: 'full-header',
			},
		sorter: (a, b) => a.name.localeCompare(b.name),
			// sortDirections: ['descend'],
		},
		{
			title: 'Колличество',
			dataIndex: 'amount',
			sorter: (a, b) => a.amount - b.amount,
		},
		{
			title: 'сумма',
			dataIndex: 'totalAmount',
			sorter: (a, b) => +(a.totalAmount.slice(0,-1)) - +(b.totalAmount.slice(0,-1)),
			},
		{
			title: 'заработано',
			dataIndex: 'totalProfit',
			sorter: (a, b) => +(a.totalProfit.slice(0,-1)) - +(b.totalProfit.slice(0,-1)),
			},
	];
	const data = assets.map((asset) => ({
		key: asset.id,
		name: asset.name,
		amount: asset.amount,
		totalAmount: asset.totalAmount.toFixed(2) + '$',
		totalProfit:asset.totalProfit.toFixed(2) +'$',
	}));
	const onChange = ( filters, sorter, extra) => {
		console.log('params', filters, sorter, extra);
	};
	return (
		<div style={{ marginTop: '20px' }}>
			<Table
				pagination={false}
				columns={columns}
				dataSource={data}
				onChange={onChange}
				showSorterTooltip={{
					target: 'sorter-icon',
				}}
			/>
		</div>
	);
};

export default TableCripto;
