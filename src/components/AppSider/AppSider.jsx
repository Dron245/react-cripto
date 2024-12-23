import React, { useContext } from 'react';
import { Layout, Card, Statistic, List, Typography, Tag } from 'antd';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { capitalizeFirstLetter } from '../../utils';
import CryptoContext from '../../CryptoContext';
import { useSelector, useDispatch } from 'react-redux'
import { addItem } from '../../redux/cart/slice';
import { cartSelector } from '../../redux/cart/selectors';

const AppSider = () => {
	const { assets } = useSelector(cartSelector);
	console.log(assets);
	return (
		
			<Layout.Sider width='25%' style={{paddingTop:'1rem'}}>
			{assets.map((asset) => (
				<Card key={asset.id} style={{ marginBottom: '1rem' }}>
					<Statistic
						title={capitalizeFirstLetter(asset.id)}
						value={asset.totalAmount}
						precision={2}
						valueStyle={{ color: asset.grow ? '#3f8600' : '#cf1322' }}
						prefix={asset.grow ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
						suffix='$'
					/>

					<List
						size='small'
						dataSource={[
							{ title: 'Доход', value: asset.totalProfit, dolar: true, withColor: true },
							{ title: 'куплено', value: asset.amount },
							{ title: 'за сколько?', value: asset.price, dolar: true },
							{ title: 'актуальная цена', value: asset.trade, dolar: true },
						]}
						renderItem={(item) => (
							<List.Item>
								<span>{item.title}</span>
								{item.withColor && (
									<Tag style={{marginLeft:'auto'}} color={asset.grow ? 'lime' : 'red'}>{asset.percent} %</Tag>
								)}
								<span>
									{item.withColor && (
										<Typography.Text type={asset.grow ? 'success' : 'danger'}>
											{item.value.toFixed(2)} $
										</Typography.Text>
									)}
									{!item.withColor && item.dolar && item.value.toFixed(2) + ' $'}
									{!item.withColor && !item.dolar && item.value.toFixed(2)}
								</span>
							</List.Item>
						)}
					/>
				</Card>
			))}
		</Layout.Sider>
		
	
	);
};

export default AppSider;
