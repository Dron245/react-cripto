import React, { useEffect } from "react";
import { Layout, Card, Statistic, List, Typography } from "antd";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
// import { cryptoAssets } from '../../data';
import { fetchAssets, options } from "../api";
const siderStyle = {
	padding: "1rem",
	backgroundColor: "#fff",
};

const data = [
	"Racing car sprays burning fuel into crowd.",
	"Japanese princess to wed commoner.",
	"Australian walks 100km after outback crash.",
	"Man charged over missing wedding girl.",
	"Los Angeles battles huge wildfires.",
];

const AppSider = () => {
	useEffect(() => {
		async function preload() {
			const resp = await fetch("https://openapiv1.coinstats.app/coins", options);
			const data = await resp.json();
			// console.log(data);
			const assets = await fetchAssets();
			// console.log(assets);
		}
		preload();
	}, []);

	return (
		<Layout.Sider width="25%" style={siderStyle}>
			<Card style={{ marginBottom: "1rem" }} title="Default size card">
				<Statistic
					title="Active"
					value={11.28}
					precision={2}
					valueStyle={{ color: "#3f8600" }}
					prefix={<ArrowUpOutlined />}
					suffix="%"
				/>
				<List
					size="small"
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
					title="Idle"
					value={9.3}
					precision={2}
					valueStyle={{ color: "#cf1322" }}
					prefix={<ArrowDownOutlined />}
					suffix="%"
				/>
			</Card>
		</Layout.Sider>
	);
};

export default AppSider;
