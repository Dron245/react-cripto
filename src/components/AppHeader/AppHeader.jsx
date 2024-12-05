import React, { useEffect, useState } from "react";
import { Select, Space } from "antd";
import { useContext } from "react";
import CryptoContext from "../../CryptoContext";

const headerStyle = {
	color: "#fff",
	height: 64,
	paddingInline: 48,
	lineHeight: "64px",
	backgroundColor: "#4096ff",
};
const handleChange = (value) => {
	console.log(`selected ${value}`);
};

const AppHeader = () => {
	const { crypto } = useContext(CryptoContext);
	const [openSelect, setOpenSelect] = useState(false);
	function openSelectkey(event) {
		event.target === "/";
		console.log(123);

		setOpenSelect((prev) => !prev);
	}
	useEffect(() => {
		document.addEventListener("keydown", openSelectkey);

		return () => {
			document.removeEventListener("keydown", openSelectkey);
		};
	}, []);

	return (
		<div style={headerStyle}>
			<Select
				open={openSelect}
				onClick={() => setOpenSelect((prev) => !prev)}
				style={{ width: "200px" }}
				placeholder="Нажмите /"
				onChange={handleChange}
				options={crypto.map((coin) => {
					return {
						label: coin.name,
						value: coin.icon,
					};
				})}
				optionRender={(option) => (
					<Space>
						<img style={{ width: "20px" }} src={option.data.value} />
						<span>{option.data.label}</span>
					</Space>
				)}
			/>
		</div>
	);
};

export default AppHeader;
