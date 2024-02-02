import HomeComponent from "./home/HomeComponent";
import Navigation from "./navigation/Navigation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./utils/NotFound";

function App() {
	return (
		<div className="app">
			<BrowserRouter>
				<Navigation />
				<Routes>
					<Route path="/" element={<HomeComponent />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
