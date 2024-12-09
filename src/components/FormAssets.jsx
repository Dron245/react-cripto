import React, { useContext, useState } from 'react';
import CryptoContext from '../CryptoContext';
import {Select,Space,Flex,Typography,Form,DatePicker,Input,InputNumber,
	Button,
	Divider,
} from 'antd';
const validateMessages = {
		required: '${label} это обязательное поле!',
		types: {
			number: '${label} должент быть номером!',
		},
		number: {
			range: '${label} не может быть быть меньше ${min}',
		},
	};
const FormAssets = () => {
	const { crypto } = useContext(CryptoContext);
	const [coin, setcoin] = useState(null);
	
	function criptoselect(value) {
		setcoin(crypto.find((c) => c.id === value));
	}
	if (!coin) {
		return (
			<Select
				// open={openSelect}
				// onClick={() => setOpenSelect((prev) => !prev)}
				style={{ width: '100%' }}
				onSelect={criptoselect}
				placeholder='Выберите монету'
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
			/>
		);
	}
	return (
		<>
			<Flex>
				<img style={{ width: '40px', marginRight: '20px' }} src={coin.icon} />
				<Typography.Paragraph style={{ marginBottom: '0px' }}>
					<Typography.Title style={{ marginBottom: '0px' }} level={2}>
						{coin.symbol} {coin.name}
					</Typography.Title>
				</Typography.Paragraph>
			</Flex>
			<Divider />
			<Form
				name='wrap'labelCol={{ flex: '110px' }}labelAlign='left'
				labelWrap
				style={{
					maxWidth: 600,
				 }}
				validateMessages= { validateMessages }
			>
				<Form.Item
					label='Колличество'
					name='amaunt'
					rules={[
						{
							required: true,
							type:'number',
							min: 0,
							max:9999999999,
						},
					]}
				>
					<InputNumber style={{ width: '200px' }} />
				</Form.Item>

				<Form.Item label='Цена' name='price'>
					<InputNumber style={{ width: '200px' }} disabled />
				</Form.Item>

				<Form.Item label='Дата и время' name='date'>
					<DatePicker placeholder='Выберите дату и время'
						style={{ width: '200px' }} showTime />
				</Form.Item>

				<Form.Item label='Total' name='total'>
					<Input style={{ width: '200px' }} disabled />
				</Form.Item>

				<Form.Item >
					<Button type='primary' htmlType='submit'>
						Добавить
					</Button>
				</Form.Item>
			</Form>
		</>
	);
};

export default FormAssets;
