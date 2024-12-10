import React from 'react';
import { Flex, Typography } from 'antd';
const CriptoInfo = ({ coin, symbol }) => {
	return (
		<Flex>
			<img style={{ width: '40px', marginRight: '20px' }} src={coin.icon} />
			<Typography.Paragraph style={{ marginBottom: '0px' }}>
				<Typography.Title style={{ marginBottom: '0px' }} level={2}>
					{symbol && <span>({coin.symbol})</span>} {coin.name}
				</Typography.Title>
			</Typography.Paragraph>
		</Flex>
	);
};

export default CriptoInfo;
