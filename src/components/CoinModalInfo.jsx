import React from "react";
import { Space, Typography, Flex, Divider, Tag } from "antd";
import CoinInfo from "./../components/CriptoInfo";
const CoinModalInfo = ({ coin }) => {
	console.log(coin);
	return (
		<div>
			<CoinInfo coin={coin} symbol/>
			<Divider />
			<Flex gap={20}>
				<Typography.Paragraph strong>
					час:{" "}
					<Tag style={{ color: `${coin.priceChange1h > 0 ? "green" : "red"}` }}>
						{coin.priceChange1h}
					</Tag>
				</Typography.Paragraph>
				<Typography.Paragraph strong>
					день:{" "}
					<Tag style={{ color: `${coin.priceChange1d > 0 ? "green" : "red"}` }}>
						{coin.priceChange1d}
					</Tag>
				</Typography.Paragraph>
				<Typography.Paragraph strong>
					неделя:{" "}
					<Tag style={{ color: `${coin.priceChange1d > 0 ? "green" : "red"}` }}>
						{coin.priceChange1d}
					</Tag>
				</Typography.Paragraph>
				<Typography.Paragraph strong>
					неделя:{" "}
					<Tag style={{ color: `${coin.priceChange1w > 0 ? "green" : "red"}` }}>
						{coin.priceChange1w}
					</Tag>
				</Typography.Paragraph>
			</Flex>
			<Typography.Paragraph strong>Цена: {coin.price.toFixed(2)} $</Typography.Paragraph>
			{coin.id !== "bitcoin" && (
				<Typography.Paragraph strong>
					Цена по отншению к Биткоину: {coin.priceBtc}
				</Typography.Paragraph>
			)}
			<Typography.Paragraph strong>
				Рыночная стоимость: {coin.marketCap} $
			</Typography.Paragraph>
			{coin.contractAddress && (
				<Typography.Paragraph strong>Адрес: {coin.contractAddress} $</Typography.Paragraph>
			)}
		</div>
	);
};

export default CoinModalInfo;
