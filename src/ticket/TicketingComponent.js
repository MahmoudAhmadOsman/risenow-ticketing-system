import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import IncidentService from "../service/IncidentService";
import { useNavigate } from "react-router-dom";
import Loading from "../utils/Loading";
import "./IncidentStyle.css";

const TicketingComponent = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const navigate = useNavigate();

	const [formData, setFormData] = useState({
		incidentNumber: "",
		caller: "",
		category: "Incident",
		subCategory: "Other",
		serviceOffering: "",
		configuration: "",
		channel: "--None--",
		state: "--New--",
		impact: "Low",
		urgency: "Low",
		assignmentGroup: "IT E-Low",
		assignedTo: "IT E-Low",
		description: "",
	});

	const {
		incidentNumber,
		caller,
		category,
		subCategory,
		serviceOffering,
		configuration,
		channel,
		state,
		impact,
		urgency,
		assignmentGroup,
		assignedTo,
		description,
	} = formData;

	useEffect(() => {
		const randomIncidentNumber = Math.floor(Math.random() * 10000000000);
		setFormData((prevFormData) => ({
			...prevFormData,
			incidentNumber: randomIncidentNumber.toString(),
		}));
	}, []);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevFormData) => ({
			...prevFormData,
			createdAt: new Date().toISOString(),
			[name]: value,
		}));
	};

	const handleIncidentForm = async (e) => {
		e.preventDefault();
		console.log("Form Data:", formData);

		if (
			incidentNumber === "" ||
			caller === "" ||
			category === "" ||
			subCategory === "" ||
			serviceOffering === "" ||
			configuration === "" ||
			channel === "" ||
			state === "" ||
			impact.toString().toUpperCase() === "" ||
			urgency.toString().toUpperCase() === "" ||
			assignmentGroup === "" ||
			assignedTo === "" ||
			description === ""
		) {
			setError(true);
			Swal.fire("Please fill all the fields");
		} else {
			setLoading(true);
			await IncidentService.saveIncident(formData)
				.then((res) => {
					setFormData(res.data);

					Swal.fire({
						position: "top-center",
						icon: "success",
						title: "Success",
						text: "New incident reported! successfully!",
						showConfirmButton: false,
						timer: 2500,
					});
					navigate("/incidents/all-incidents");
				})
				.catch((err) => {
					setError(true);
					Swal.fire({
						icon: "error",
						title: "Oops...",
						text: `${error.message} occured while submitting incident form!!`,
						footer: '<a href="/">Why do I have this issue?</a>',
					});
					console.log(error.message);
				});
		}
	};

	return (
		<section className="incident">
			<div className="container py-2">
				{loading ? (
					<div> {<Loading />} </div>
				) : (
					<>
						<h1 className="text-uppercase"> Report Incident</h1> <hr />
						<form onSubmit={handleIncidentForm}>
							<div className="row mx-auto">
								<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
									<div className="input-group mb-3">
										<label
											htmlFor="incidentNumber"
											className="input-group-text"
											id="basic-addon1"
										>
											Number
										</label>
										<input
											type="text"
											placeholder="INC"
											className="form-control form-control-lg"
											aria-describedby="basic-addon1"
											name="incidentNumber"
											value={formData.incidentNumber}
											onChange={handleChange}
										/>
									</div>
									{/* Caller */}

									<div className="input-group mb-3">
										<label
											htmlFor="caller"
											className="input-group-text"
											id="basic-addon12"
										>
											Caller
										</label>
										<input
											type="text"
											aria-describedby="basic-addon2"
											placeholder="Caller name"
											className="form-control form-control-lg"
											required
											name="caller"
											value={formData.caller}
											onChange={handleChange}
										/>
										<div className="bg-secondary p-2 text-white">
											<i className="ri-search-line"></i>
										</div>
									</div>

									{/* Category */}

									<div className="input-group mb-3">
										<label
											htmlFor="category"
											className="input-group-text"
											id="basic-addon3"
										>
											Category
										</label>
										<select
											className="form-select form-select-lg"
											id="category"
											aria-describedby="basic-addon3"
											name="category"
											value={formData.category}
											onChange={handleChange}
										>
											<option disabled>--Select one --</option>
											<option value="Incident">Incident</option>
											<option value="Inquiry/Help">Inquiry/Help</option>
											<option value="Other">Other</option>
										</select>
									</div>

									{/* Subcategory */}

									<div className="input-group mb-3">
										<label
											htmlFor="subCategory"
											className="input-group-text"
											id="basic-addon4"
										>
											Subcategory
										</label>

										<select
											className="form-select form-select-lg"
											aria-describedby="basic-addon4"
											id="subcategory"
											name="subcategory"
											value={formData.subCategory}
											onChange={handleChange}
										>
											<option disabled>--Select one --</option>
											<option value="New Incident">New Incident</option>
											<option value="Unsolved Incident">
												Unsolved Incident
											</option>{" "}
											<option value="--None--">None</option>
										</select>
									</div>

									{/* Service offeing */}

									<div className="input-group mb-3">
										<label
											htmlFor="serviceOffering"
											className="input-group-text"
											id="basic-addon5"
										>
											Service Offering
										</label>
										<input
											type="text"
											placeholder="Service offering"
											aria-describedby="basic-addon5"
											className="form-control form-control-lg"
											name="serviceOffering"
											value={formData.serviceOffering}
											onChange={handleChange}
										/>
									</div>

									{/* Service offeing */}

									<div className="input-group mb-3">
										<label
											htmlFor="configuration"
											className="input-group-text"
											id="basic-addon6"
										>
											Configuration item
										</label>
										<input
											type="text"
											placeholder="configuration"
											aria-describedby="basic-addon6"
											className="form-control form-control-lg"
											name="configuration"
											value={formData.configuration}
											onChange={handleChange}
										/>
									</div>
								</div>
								<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
									{/* Channel */}

									<div className="input-group mb-3">
										<label
											htmlFor="channel"
											className="input-group-text"
											id="basic-addon7"
										>
											Channel
										</label>
										<select
											className="form-select form-select-lg"
											aria-describedby="basic-addon7"
											name="channel"
											value={formData.channel}
											onChange={handleChange}
										>
											<option disabled>--Select one --</option>
											<option value="None">None</option>
											<option value="Incident">Incident</option>
											<option value="Inquiry/Help">Inquiry/Help</option>{" "}
										</select>
									</div>

									{/* State */}

									<div className="input-group mb-3">
										<label
											htmlFor="state"
											className="input-group-text"
											id="basic-addon8"
										>
											State
										</label>
										<select
											className="form-select form-select-lg"
											aria-describedby="basic-addon8"
											name="state"
											value={formData.state}
											onChange={handleChange}
										>
											<option disabled>--Select one --</option>

											<option value="--New--">New</option>
											<option value="Previous Incident">
												Previous Incident
											</option>
											<option value="Solved Incident">Solved Incident</option>
											<option value="Reopened Incident">Reopen Incident</option>
											<option value="Unsolved Incident">
												Unsolved Incident
											</option>
										</select>
									</div>

									{/* Impact */}

									<div className="input-group mb-3">
										<label
											htmlFor="impact"
											className="input-group-text"
											id="basic-addon9"
										>
											Impact
										</label>

										<select
											className="form-select form-select-lg"
											aria-describedby="basic-addon9"
											id="impact"
											name="impact"
											value={formData.impact}
											onChange={handleChange}
										>
											<option disabled>--Select one --</option>
											<option value="Low">1. Low </option>
											<option value="High">2. High </option>
											<option value="Severe">3. Severe </option>
										</select>
									</div>

									{/* Urgency */}

									<div className="input-group mb-3">
										<label
											htmlFor="urgency"
											className="input-group-text"
											id="basic-addon10"
										>
											Urgency
										</label>
										<select
											className="form-select form-select-lg"
											aria-describedby="basic-addon10"
											name="urgency"
											value={formData.urgency}
											onChange={handleChange}
										>
											<option disabled>--Select one --</option>

											<option value="Low">1. Low</option>
											<option value="High">2. High </option>
											<option value="Priority">3. Priority</option>
										</select>
									</div>

									{/* Assignment group */}

									<div className="input-group mb-3">
										<label
											htmlFor="assignmentGroup"
											className="input-group-text"
											id="basic-addon11"
										>
											Assignment Group
										</label>
										<select
											className="form-select form-select-lg"
											aria-describedby="basic-addon11"
											name="assignmentGroup"
											value={formData.assignmentGroup}
											onCanPlay={handleChange}
										>
											<option disabled>--Select one --</option>

											<option value="IT E-Level">1. IT E-Level</option>
											<option value="IT M-Level">2. IT M-Level </option>
											<option value="IT H-Level">3. IT H-Level</option>
										</select>
									</div>

									{/* Assigned  to */}

									<div className="input-group mb-3">
										<label
											htmlFor="assignedTo"
											className="input-group-text"
											id="basic-addon12"
										>
											Assigned to
										</label>
										<select
											className="form-select form-select-lg"
											aria-describedby="basic-addon12"
											name="assignedTo"
											value={formData.assignedTo}
											onChange={handleChange}
										>
											<option disabled>--Select one --</option>

											<option value="IT E-Level">1. IT E-Level</option>
											<option value="IT M-Level">2. IT M-Level</option>
											<option value="H-Level">3. IT H-Level</option>
										</select>
									</div>
								</div>
							</div>
							{/* Submit */}
							<div className="row mt-3 mb-4">
								<div className="col-md-12">
									{/* Short description */}
									<label htmlFor="description" className="form-label">
										Short Description
									</label>
									<textarea
										className="form-control form-control-lg mb-2"
										placeholder="INC description"
										name="description"
										value={formData.description}
										onChange={handleChange}
										rows="5"
									></textarea>
									<button
										type="submit"
										className="btn btn-outline-light btn-lg fw-bold mb-4 mt-2"
											disabled={loading ||
										                    !incidentNumber ||
										                    !caller ||
										                    !category ||
										                    !subCategory ||
										                    !serviceOffering ||
										                    !configuration ||
										                    !channel ||
										                    !state ||
										                    !impact ||
										                    !urgency ||
										                    !assignmentGroup ||
										                    !assignedTo ||
										                    !description
										                }
									>
										{!error && loading ? (
											<>
												<span
													className="spinner-border spinner-border-sm me-3"
													role="status"
													aria-hidden="true"
													style={{ width: "1.5rem", height: "1.5rem" }}
												></span>
												<small
													className="text-muted"
													style={{ fontSize: "12px" }}
												>
													Please wait...
												</small>
											</>
										) : (
											<div>SUBMIT</div>
										)}
									</button>
								</div>
							</div>
						</form>
					</>
				)}
			</div>
		</section>
	);
};

export default TicketingComponent;
