import React from 'react';
import { Flex, Typography, Button } from 'antd';
const CriptoInfo = ({ coin, symbol, prew, setcoin }) => {
	return (
		<Flex style={{alignItems:'center'}}>
			<img style={{ width: '40px', marginRight: '20px' }} src={coin.icon} />
			<Typography.Paragraph style={{ marginBottom: '0px' }}>
				<Typography.Title style={{ marginBottom: '0px' }} level={2}>
					{symbol && <span>({coin.symbol})</span>} {coin.name}
				</Typography.Title>
			</Typography.Paragraph>
			{prew && <Button style={{marginLeft:'auto'}} onClick={() => setcoin(false)}> Выбрать другую крипту</Button>}
		</Flex>
	);
};

export default CriptoInfo;
