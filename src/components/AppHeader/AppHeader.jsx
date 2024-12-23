import React, { useEffect, useState } from 'react';
import { Select, Space, Modal, Button, Drawer } from 'antd';
import { useContext } from 'react';
import CryptoContext from '../../CryptoContext';
import { useSelector } from 'react-redux';

import './appHeader.css';
import CoinModalInfo from '../CoinModalInfo';
import FormAssets from '../FormAssets';
import { selectorCryptoData } from '../../redux/crypto/selectors';
// import { crypto } from '../../redux/cart/slice';

const AppHeader = () => {
	// const { crypto } = useContext(CryptoContext);
	const { crypto, status } = useSelector(selectorCryptoData);
	const [openSelect, setOpenSelect] = useState(false);
	const [modal, setModal] = useState(false);
	const [coinSelect, setCoinSelect] = useState(null);
	const [drawerOpen, setDrawerOpen] = useState(false);
	useEffect(() => {
		const openSelectkey = (event) => {
			if (event.key === '/') {
				setOpenSelect((prev) => !prev);
			}
			
		};
		document.addEventListener('keypress', openSelectkey);

		return () => {
			document.removeEventListener('keypress', openSelectkey);
		};
	}, []);

	const modalText = (value) => {
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
			<Button type='primary' onClick={() => setDrawerOpen(true)}>
				Open
			</Button>
			<Drawer
				destroyOnClose
				title='Выберите криптовалюту'
				width={600}
				onClose={() => setDrawerOpen(false)}
				open={drawerOpen}
			>
				<FormAssets close={()=>setDrawerOpen(false)}/>
			</Drawer>
			<Modal
				open={modal}
				onCancel={() => setModal(false)}
				footer={null}
			>
				<CoinModalInfo coin={coinSelect}/>
			</Modal>
		</div>
	);
};

export default AppHeader;
