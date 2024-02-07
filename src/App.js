import HomeComponent from "./home/HomeComponent";
import Navigation from "./navigation/Navigation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./utils/NotFound";
import TicketingComponent from "./ticket/TicketingComponent";
import IncidentListComponent from "./ticket/IncidentListComponent";

function App() {
	return (
		<div className="app">
			<BrowserRouter>
				<Navigation />
				<Routes>
					<Route
						path="/incidents/all-incidents"
						element={<IncidentListComponent />}
					/>
					<Route
						path="/incidents/ticket/new-incident"
						element={<TicketingComponent />}
					/>
					<Route path="/" element={<HomeComponent />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
