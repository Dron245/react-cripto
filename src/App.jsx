import AppLayout from "./components/AppLayout";
import { Provider } from "react-redux";
import { store } from "./redux/store";
export default function App() {
	return (
		<Provider store={store}>
				<AppLayout />
		</Provider>
	);
}
