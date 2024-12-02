import React from 'react';
import { Layout } from 'antd';
const { Header, Sider, Content } = Layout;
const headerStyle = {
	textAlign: 'center',
	color: '#fff',
	height: 64,
	paddingInline: 48,
	lineHeight: '64px',
	backgroundColor: '#4096ff',
 };
const AppHeader = () => {
  return (
	 <div style={headerStyle}>Header</div>
  )
}

export default AppHeader