import React, { useContext } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import CryptoContext from '../CryptoContext';



const Chart = () => {
	const {assets}= useContext(CryptoContext)
	ChartJS.register(ArcElement, Tooltip, Legend);
 const data = {
	labels: assets.map(asset=>asset.name),
	datasets: [
		{
			label: '$',
			data: assets.map(asset=>asset.totalAmount.toFixed(2)),
			backgroundColor: [
				'rgba(255, 99, 132)',
				'rgba(54, 162, 235)',
				'rgba(255, 206, 86)',
				'rgba(75, 192, 192)',
				'rgba(153, 102, 255)',
				'rgba(255, 159, 64)',
			],
			
		},
	],
};
	return (
		<div style={{width:'500px', marginInline:'auto'}}>
			<Doughnut  data={data} />
		</div>
	);
};

export default Chart;
