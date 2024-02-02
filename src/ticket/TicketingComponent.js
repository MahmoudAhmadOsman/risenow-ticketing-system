import React from "react";
import Swal from "sweetalert2";

const TicketingComponent = () => {
	const handleIncidentForm = (e) => {
		e.preventDefault();
		Swal.fire("Working on it. Check back later!!!");
	};

	return (
		<section className="incident">
			<div className="container bg-light p-4">
				<h1 className="text-success text-uppercase">Incident Report </h1> <hr />
				<form onSubmit={handleIncidentForm}>
					<div className="row mx-auto">
						<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
							<div className="input-group mb-3">
								<label
									htmlFor="number"
									className="input-group-text"
									id="basic-addon1"
								>
									Number
								</label>
								<input
									type="text"
									placeholder="INC"
									className="form-control form-control-lg"
									id="number"
									aria-describedby="basic-addon1"
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
									placeholder="Caller"
									className="form-control form-control-lg"
									id="caller"
									aria-describedby="basic-addon2"
								/>
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
								>
									<option value="">Inquiry/Help</option>
									<option value="">Incident</option>
									<option value="">Other</option>
								</select>
							</div>

							{/* Subcategory */}

							<div className="input-group mb-3">
								<label
									htmlFor="subcategory"
									className="input-group-text"
									id="basic-addon4"
								>
									Subcategory
								</label>

								<select
									className="form-select form-select-lg"
									aria-describedby="basic-addon4"
									id="subcategory"
								>
									<option value="">New Incident</option>
									<option value="">Unsolved Incident</option>
									<option value="" selected>
										--None--
									</option>
								</select>
							</div>

							{/* Service offeing */}

							<div className="input-group mb-3">
								<label
									htmlFor="serviceOffering"
									className="input-group-text"
									id="basic-addon5"
								>
									Service offering
								</label>
								<input
									type="text"
									placeholder="Service offering"
									className="form-control form-control-lg"
									id="serviceOffering"
									aria-describedby="basic-addon5"
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
									className="form-control form-control-lg"
									id="configuration"
									aria-describedby="basic-addon6"
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
									id="channel"
								>
									<option value="">Inquiry/Help</option>
									<option value="">Incident</option>
									<option value="" selected>
										--None--
									</option>
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
									id="state"
								>
									<option value="">Previous</option>
									<option value="">Solved</option>
									<option value="">Reopened</option>
									<option value="">Unsolved</option>
									<option value="" selected>
										--New--
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
								>
									<option value="" selected>
										1. Low{" "}
									</option>
									<option value="">2. High </option>
									<option value="">3. Priority</option>
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
									id="urgency"
								>
									<option value="" selected>
										1. Low{" "}
									</option>
									<option value="">2. High </option>
									<option value="">3. Priority</option>
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
									id="assignmentGroup"
									aria-describedby="basic-addon11"
								>
									<option value="" selected>
										1. IT E-Level
									</option>
									<option value="">2. IT M-Level </option>
									<option value="">3. IT H-Level</option>
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
									id="assignedTo"
								>
									<option value="" selected>
										1. IT E-Level - John Doe
									</option>
									<option value="">2. IT M-Level - Sarah Smith</option>
									<option value="">3. IT H-Level - John Smith</option>
								</select>
							</div>
						</div>
					</div>
					{/* Submit */}
					<div className="row mt-3 mb-4">
						<div className="col-md-12">
							{/* Short description */}
							<label htmlFor="shortDescription" className="form-label">
								Short Description
							</label>
							<textarea
								className="form-control form-control-lg mb-2"
								id="shortDescription"
								rows="3"
								placeholder="INC description"
							></textarea>
							<button type="submit" className="btn btn-secondary btn-md">
								SUBMIT
							</button>
						</div>
					</div>
				</form>
			</div>
		</section>
	);
};

export default TicketingComponent;
