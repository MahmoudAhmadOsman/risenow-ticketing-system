import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import IncidentService from "../service/IncidentService";

const IncidentDetails = () => {
	const [incident, setIncident] = useState({
		incidentNumber: "",
		caller: "",
		category: "",
		subCategory: "",
		serviceOffering: "",
		configuration: "",
		channel: "",
		state: "",
		impact: "",
		urgency: "",
		assignmentGroup: "",
		assignedTo: "",
		description: "",
	});
	const { id } = useParams();

	const getIncidentDetails = async () => {
		await IncidentService.getIncidentById(id)
			.then((res) => {
				setIncident(res.data);
			})
			.catch((error) => {
				console.log(error);
			});
	};
	// }

	useEffect(() => {
		getIncidentDetails();
	}, []);

	return (
		<section className="incident-details">
			<div className="container bg-light">
				<h1>Incident Details</h1> <hr />
				<div className="row">
					<div className="col-md-8">
						<div className="card mb-4">
							<div className="card-header">
								<b> Incident Number: </b>
								{incident.incidentNumber}
							</div>
							<div className="card-body">
								<table className="table table-bordered">
									<tbody>
										<tr>
											<td>Caller</td>
											<td>{incident.caller}</td>
										</tr>
										<tr>
											<td>Category</td>
											<td>{incident.category}</td>
										</tr>
										<tr>
											<td>SubCategory</td>
											<td>{incident.subCategory}</td>
										</tr>
										<tr>
											<td>Service Offering</td>
											<td>{incident.serviceOffering}</td>
										</tr>

										<tr>
											<td>Configuration</td>
											<td>{incident.configuration}</td>
										</tr>
										<tr>
											<td>Channel</td>
											<td>{incident.channel}</td>
										</tr>
										<tr>
											<td>State</td>
											<td className="text-danger">{incident.state}</td>
										</tr>
										<tr>
											<td>Impact</td>
											<td>{incident.impact}</td>
										</tr>
										<tr>
											<td>Urgency</td>
											<td>{incident.urgency}</td>
										</tr>
										{/* <tr>
											<td>Assignment Group</td>
											<td>{incident.assignmentGroup}</td>
										</tr> */}
										{/* <tr>
											<td>Assigned to</td>
											<td>{incident.assignedTo}</td>
										</tr> */}
										<tr>
											<td>Description</td>
											<td>{incident.description}</td>
										</tr>
									</tbody>
								</table>
							</div>
							<div className="card-footer">
								<Link
									to="/incidents/all-incidents"
									className="btn btn-secondary btn-sm px-2"
								>
									<i className="fa fa-chevron-left"></i> &nbsp; Back
								</Link>
							</div>
						</div>
					</div>
					<div className="col-md-4 alert alert-warning">
						<div className="bg-warning p-3">
							<h2>Assignment Group:</h2>
							<div className="btn btn-dark btn-sm">
								{incident.assignmentGroup}
							</div>
						</div>
						<hr />
						<div className="bg-warning p-3">
							<h2>Assigned to:</h2>
							<div className="btn btn-outline-dark btn-sm">
								{incident.assignedTo}
							</div>
						</div>
						<hr />
						<hr />

						{/* select */}
						<form>
							<h3 className="text-center mt-4">Update incident status</h3>
							<select
								className="form-select form-select-lg bg-warning"
								name=""
								id=""
							>
								<option disabled>-- select one --</option>
								<option value="Work In Progress" select>
									Work In Progress
								</option>{" "}
								<option value="Completed">Completed</option>
								<option value="Closed Incident	">Closed Incident </option>
								<option value="Parts on Order">Parts on Order</option>
								<option value="On Hold">On Hold</option>
								<option value="Forwarded">Forwarded</option>
								<option value="Declined">Declined</option>
							</select>
							<button className="btn btn-success btn-sm mt-3">UPDATE</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default IncidentDetails;
