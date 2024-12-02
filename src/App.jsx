import { Layout } from 'antd';
import AppHeader from './components/AppHeader/AppHeader';
import AppContent from './components/AppContent/AppContent';
import AppSider from './components/AppSider/AppSider';

export default function App() {
	return (
		<Layout>
			<AppHeader />
			<Layout>
				<AppSider/>
				<AppContent/>
			</Layout>
		</Layout>
	);
}
