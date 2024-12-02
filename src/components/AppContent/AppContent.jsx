import React from 'react';
import { Layout } from 'antd';
const { Header, Sider, Content } = Layout;
const contentStyle = {
	textAlign: 'center',
	minHeight: 'calc(100vh - 64px)',
	lineHeight: '120px',
	color: '#fff',
	backgroundColor: '#001529',
};
const AppContent = () => {
  return (
	 <Content style={contentStyle}>Content</Content>
  )
}

export default AppContent