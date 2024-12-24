import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/cart/slice';
import {percentage} from '../utils';
import {
	Select,
	Space,
	Form,
	DatePicker,
	Input,
	InputNumber,
	Button,
	Divider,
	Result,
} from 'antd';
import CoinInfo from './../components/CriptoInfo';
import { cartSelector } from '../redux/cart/selectors';
import { selectorCryptoData } from '../redux/crypto/selectors';

const validateMessages = {
	required: '${label} это обязательное поле!',
	types: {
		number: '${label} должент быть номером!',
	},
	number: {
		range: '${label} не может быть быть меньше ${min}',
	},
};
const FormAssets = ({ close }) => {
	const { crypto, status } = useSelector(selectorCryptoData);
	const dispatch = useDispatch();
	const [coin, setcoin] = useState(null);
	const [form] = Form.useForm();
	const [result, setResult] = useState(false);
	const coinMake = useRef();
	function criptoselect(value) {
		setcoin(crypto.find((c) => c.id === value));
	}
	function handleAmountChange(value) {
		const amount = form.getFieldValue('price');
		// console.log(value, amount);
		form.setFieldValue('total', value * amount);
	}
	function handlePriceChange(value) {
		const amount = form.getFieldValue('amount');
		// console.log(value, amount);
		form.setFieldValue('total', (value * amount).toFixed(2));
	}
	function onFinish(value) {
		console.log(value);
		const newAsset = {
			id: coin.id,
			amount: value.amount,
			price: value.price,
			date: value.date?.$d ?? new Date(),

			grow: value.price < coin.price, //доход
			percent: percentage(value.price, coin.price), //доход в процентах
			trade: coin.price, // нынешний курс монеты
			totalAmount: value.amount * coin.price, //количество денег в данный момент
			totalProfit:
			value.amount * coin.price -
			value.amount * value.price, // доход в дныый момент
			name: coin.name,
		};
		coinMake.current = newAsset;
		setResult(true);
		dispatch(addItem(newAsset))
	}

	if (result) {
		return (
			<Result
				status='success'
				title='Криптовалюта добавлена'
				subTitle={`Добавлена валюта ${coin.name} в колличестве ${coinMake.current.amount} по цене ${coinMake.current.price} $`}
				extra={[
					<Button onClick={close} type='primary' key='console'>
						Закрыть
					</Button>,
				]}
			/>
		);
	}

	if (!coin) {
		return (
			<Select
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
			<CoinInfo coin={coin} prew setcoin={setcoin} />
			<Divider />
			<Form
				clearOnDestroy
				form={form}
				name='wrap'
				labelCol={{ flex: '110px' }}
				labelAlign='left'
				labelWrap
				initialValues={{
					price: +coin.price.toFixed(2),
				}}
				onFinish={onFinish}
				style={{
					maxWidth: 600,
				}}
				validateMessages={validateMessages}
			>
				<Form.Item
					label='Колличество'
					name='amount'
					rules={[
						{
							required: true,
							type: 'number',
							min: 0,
							max: 9999999999,
						},
					]}
				>
					<InputNumber onChange={handleAmountChange} style={{ width: '200px' }} />
				</Form.Item>

				<Form.Item label='Цена' name='price'>
					<InputNumber  onChange={handlePriceChange} style={{ width: '200px' }} />
				</Form.Item>

				<Form.Item label='Дата и время' name='date'>
					<DatePicker
						placeholder='Выберите дату и время'
						style={{ width: '200px' }}
						showTime
					/>
				</Form.Item>

				<Form.Item label='Total' name='total'>
					<Input style={{ width: '200px' }} disabled />
				</Form.Item>

				<Form.Item>
					<Button type='primary' htmlType='submit'>
						Добавить
					</Button>
				</Form.Item>
			</Form>
		</>
	);
};

export default FormAssets;
