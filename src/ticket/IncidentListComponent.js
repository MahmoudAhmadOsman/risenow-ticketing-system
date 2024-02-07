import React, { useEffect, useState } from "react";
import IncidentService from "../service/IncidentService";
import Loading from "../utils/Loading";

const IncidentListComponent = () => {
	const [incidents, setIncidents] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	const fetchIncidents = async () => {
		await IncidentService.getAllIncidents()
			.then((incidents) => {
				setIncidents(incidents.data);
				setLoading(false);
			})
			.catch((error) => {
				setError(error);
				setLoading(false);
				console.log(error);
			});
	};

	useEffect(() => {
		fetchIncidents();
	}, []);

	return (
		<section className="all-incidents">
			<div className="container">
				{error && (
					<div className="alert alert-danger">Error: {error.message}</div>
				)}
				{loading ? (
					<h1>
						<Loading />
					</h1>
				) : (
					<>
						{incidents.length <= 0 && (
							<div className="alert alert-danger text-center">
								<h4>No incidents found!!</h4>
							</div>
						)}
						<div className="row">
							<div className="col-md-1 bg-warning vh-100"></div>
							<div className="col-md-11">
								<h1 className="text-uppercase ">Incident Reporting</h1> <hr />
								{/* Table */}
								<div className="table-responsive">
									<table
										className="table table-striped table-bordered table-sm"
										style={{ fontSize: "13px" }}
									>
										<thead>
											<tr>
												<th>Incident Date</th>
												<th>Incident #</th>
												<th>Caller</th>
												<th>Category</th>
												<th>Subcategory</th>
												<th>Service Offering</th>
												<th>Configuration</th>
												<th>Channel</th>
												<th>State</th>
												<th>Impact</th>
												<th>Urgency</th>
												<th>Assignment Group</th>
												<th>Assigned To</th>
												<th>Description</th>
											</tr>
										</thead>
										<tbody>
											{incidents.map((incident, index) => (
												<tr key={index}>
													<td>
														<td className="text-danger bg-light">
															{new Date(incident.date).toLocaleString("en-US", {
																year: "numeric",
																month: "2-digit",
																day: "2-digit",
															})}
														</td>
													</td>
													<td>INC-{incident.incidentNumber}</td>
													<td>{incident.caller}</td>
													<td>{incident.category}</td>
													<td>{incident.subCategory}</td>
													<td>{incident.serviceOffering}</td>
													<td>{incident.configuration}</td>
													<td>{incident.channel}</td>
													<td>{incident.state}</td>
													<td className="text-uppercase">
														{incident.impact === "High" ? (
															<span className="btn btn-warning btn-sm">
																{incident.urgency}
															</span>
														) : incident.impact === "Low" ? (
															<span className="btn btn-primary btn-sm">
																{incident.impact}
															</span>
														) : incident.impact === "Severe" ? (
															<span className="btn btn-danger btn-sm">
																{incident.impact}
															</span>
														) : (
															incident.impact
														)}
													</td>
													<td className="text-uppercase">
														{incident.urgency === "High" ? (
															<span className="btn btn-warning btn-sm">
																{incident.urgency}
															</span>
														) : incident.urgency === "Low" ? (
															<span className="btn btn-info btn-sm">
																{incident.urgency}
															</span>
														) : incident.urgency === "Priority" ? (
															<span className="btn btn-danger btn-sm">
																{incident.urgency}
															</span>
														) : (
															incident.urgency
														)}
													</td>
													<td>{incident.assignmentGroup}</td>
													<td>{incident.assignedTo}</td>
													<td>
														<p>{incident.description}</p>
													</td>
												</tr>
											))}
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</>
				)}
			</div>
		</section>
	);
};

export default IncidentListComponent;
