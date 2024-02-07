import axios from "axios";

const BASE_URL = "https://stapes-api.onrender.com/incidents";

class IncidentService {
	getAllIncidents() {
		return axios.get(BASE_URL);
	}
	saveIncident(incidentData) {
		return axios.post(BASE_URL, incidentData);
	}

	getIncidentById(id) {
		return axios.get(`${BASE_URL}/${id}`);
	}

	patchIncident(id, incidentData) {
		return axios.patch(`${BASE_URL}/${id}`, incidentData);
	}

	deleteIncident(id) {
		return axios.delete(`${BASE_URL}/${id}`);
	}
}
export default new IncidentService();
