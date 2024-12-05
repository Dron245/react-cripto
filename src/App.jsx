import { CryptoContextProvider } from './CryptoContext';
import AppLayout from './components/AppLayout';

export default function App() {
	return (
		<CryptoContextProvider>
			<AppLayout />
		</CryptoContextProvider> 
	);
}
