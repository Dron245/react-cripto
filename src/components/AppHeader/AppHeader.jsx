import React, { useEffect, useState } from 'react';
import { Select, Space, Modal, Button, Drawer } from 'antd';
import { useContext } from 'react';
import CryptoContext from '../../CryptoContext';
import './appHeader.css';
import CoinModalInfo from '../CoinModalInfo';

const AppHeader = () => {
	const { crypto } = useContext(CryptoContext);
	const [openSelect, setOpenSelect] = useState(false);
	const [modal, setModal] = useState(false);
	const [coinSelect, setCoinSelect] = useState(null);
	const [drawerOpen, setDrawerOpen] = useState(false);

	useEffect(() => {
		const openSelectkey = (event) => {
			event.target === '/';
			setOpenSelect((prev) => !prev);
		};
		document.addEventListener('keypress', openSelectkey);

		return () => {
			document.removeEventListener('keypress', openSelectkey);
		};
	}, []);

	const modalText = (value) => {
		console.log(value);
		setCoinSelect(crypto.find((coin) => coin.id === value));
		setModal(true);
	};

	return (
		<div className='header'>
			<Select
				open={openSelect}
				onClick={() => setOpenSelect((prev) => !prev)}
				style={{ width: '200px' }}
				value='Нажмите /'
				options={crypto.map((coin) => {
					return {
						icon: coin.icon,
						label: coin.name,
						value: coin.id,
					};
				})}
				optionRender={(option) => (
					<Space>
						<img
							style={{ width: '20px' }}
							src={option.data.icon}
							alt={option.data.value}
						/>
						<span>{option.data.label}</span>
					</Space>
				)}
				onSelect={modalText}
			/>
			<Button type='primary' onClick={() => setDrawerOpen(false)}>
				Open
			</Button>
			<Drawer
				title='Basic Drawer'
				width={600}
				onClose={() => setDrawerOpen(false)}
				open={drawerOpen}
			>
				<p>Some contents...</p>
				<p>Some contents...</p>
				<p>Some contents...</p>
			</Drawer>
			<Modal
				open={modal}
				
				// onOk={handleOk}
				onCancel={() => setModal(false)}
				footer={null}
			>
				<CoinModalInfo coin={coinSelect}/>
			</Modal>
		</div>
	);
};

export default AppHeader;
