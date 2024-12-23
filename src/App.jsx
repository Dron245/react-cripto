import { CryptoContextProvider } from "./CryptoContext";
import AppLayout from "./components/AppLayout";
import { Provider } from "react-redux";
import { store } from "./redux/store";
export default function App() {
	return (
		<Provider store={store}>
			<CryptoContextProvider>
				<AppLayout />
			</CryptoContextProvider>
		</Provider>
	);
}
