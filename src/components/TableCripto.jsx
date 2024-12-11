import React, { useContext } from 'react';
import { Table } from 'antd';
import CryptoContext from '../CryptoContext';
const TableCripto = () => {
	const { assets } = useContext(CryptoContext);
	const columns = [
		{
			title: 'Криптовалюта',
			dataIndex: 'name',
			showSorterTooltip: {
				target: 'full-header',
			},
			//   filters: [
			// 	 {
			// 		text: 'Joe',
			// 		value: 'Joe',
			// 	 },
			// 	 {
			// 		text: 'Jim',
			// 		value: 'Jim',
			// 	 },
			// 	 {
			// 		text: 'Submenu',
			// 		value: 'Submenu',
			// 		children: [
			// 		  {
			// 			 text: 'Green',
			// 			 value: 'Green',
			// 		  },
			// 		  {
			// 			 text: 'Black',
			// 			 value: 'Black',
			// 		  },
			// 		],
			// 	 },
			//   ],
			// specify the condition of filtering result
			// here is that finding the name started with `value`
			//   onFilter: (value, record) => record.name.indexOf(value) === 0,
			sorter: (a, b) => a.name.localeCompare(b.name),
			// sortDirections: ['descend'],
		},
		{
			title: 'Колличество',
			dataIndex: 'amount',
			// defaultSortOrder: 'descend',
			sorter: (a, b) => a.amount - b.amount,
		},
		{
			title: 'сумма',
			dataIndex: 'totalAmount',
			sorter: (a, b) => +(a.totalAmount.slice(0,-1)) - +(b.totalAmount.slice(0,-1)),
			//   filters: [
			// 	 {
			// 		text: 'London',
			// 		value: 'London',
			// 	 },
			// 	 {
			// 		text: 'New York',
			// 		value: 'New York',
			// 	 },
			//   ],
			//   onFilter: (value, record) => record.address.indexOf(value) === 0,
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
		<div style={{ marginTop: '20px' , width:'100%'}}>
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
