import React, { useEffect, useState } from 'react';
import { Layout, Card, Statistic, List, Typography, Spin } from 'antd';
import { ArrowDownOutlined, ArrowUpOutlined, LoadingOutlined } from '@ant-design/icons';
// import { cryptoAssets } from '../../data';
import { fetchAssets, fakeFetchCrypto, options } from '../api';
import { percentage } from '../../utils';
const siderStyle = {
	padding: '1rem',
};

const data = [
	'Racing car sprays burning fuel into crowd.',
	'Japanese princess to wed commoner.',
	'Australian walks 100km after outback crash.',
	'Man charged over missing wedding girl.',
	'Los Angeles battles huge wildfires.',
];
const AppSider = () => {
	const [loading, setLoading] = useState(false);
	const [assets, setAssets] = useState([]);
	const [coins, setCoins] = useState([]);
	console.log(assets);

	useEffect(() => {
		async function preload() {
			try {
				setLoading(true);
				const cryptoAssets = await fetchAssets();
				console.log(cryptoAssets);
				const resp = await fetch('https://openapiv1.coinstats.app/coins', options);
				const { result } = await resp.json();
				// const {result} = await fakeFetchCrypto();
				setCoins(result);
				setAssets(
					cryptoAssets.map((asset) => {
						const coin = coins.find((c) => c.id === asset.id);
						return {
							grow: asset.price < coin.price,
							totalAmount: asset.amount * asset.price,
							totalProfit: asset.amount * coin.price - asset.amount * asset.price,
							percent: percentage(asset.price, coin.price),
							...asset,
						};
					})
				);

				setLoading(false);
			} catch (error) {
				console.log(`ошибка: ${error}`);
			}
		}

		preload();
	}, []);

	return loading ? (
		<Spin indicator={<LoadingOutlined spin />} fullscreen size='large' />
	) : (
		<Layout.Sider width='25%' style={siderStyle}>
			{
				assets.map(asset=>(
					<Card key={asset.id} style={{ marginBottom: '1rem' }} title='Default size card'>
				<Statistic
					title={asset.id}
					value={11.28}
					precision={2}
					valueStyle={{ color: '#3f8600' }}
					prefix={<ArrowUpOutlined />}
					suffix='%'
				/>
				<List
					size='small'
					dataSource={data}
					renderItem={(item) => (
						<List.Item>
							<Typography.Text mark>[ITEM]</Typography.Text> {item}
						</List.Item>
					)}
				/>
			</Card>
				))
			}
			{/* <Card style={{ marginBottom: '1rem' }} title='Default size card'>
				<Statistic
					title='Active'
					value={11.28}
					precision={2}
					valueStyle={{ color: '#3f8600' }}
					prefix={<ArrowUpOutlined />}
					suffix='%'
				/>
				<List
					size='small'
					dataSource={data}
					renderItem={(item) => (
						<List.Item>
							<Typography.Text mark>[ITEM]</Typography.Text> {item}
						</List.Item>
					)}
				/>
			</Card>
			<Card>
				<Statistic
					title='Idle'
					value={9.3}
					precision={2}
					valueStyle={{ color: '#cf1322' }}
					prefix={<ArrowDownOutlined />}
					suffix='%'
				/>
			</Card> */}
		</Layout.Sider>
	);
};

export default AppSider;
