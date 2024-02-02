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
							<label htmlFor="number" className="form-label">
								Number
							</label>
							<input
								type="text"
								placeholder="INC"
								className="form-control form-control-lg"
								id="number"
							/>

							<label htmlFor="caller" className="form-label">
								Caller
							</label>
							<input
								type="text"
								placeholder="Caller"
								className="form-control form-control-lg"
								id="caller"
							/>
							{/* Category */}
							<label htmlFor="category" className="form-label">
								Category
							</label>
							<select className="form-select form-select-lg" id="category">
								<option value="">Inquiry/Help</option>
								<option value="">Incident</option>
								<option value="">Other</option>
							</select>
							{/* Subcategory */}
							<label htmlFor="subcategory" className="form-label">
								Subcategory
							</label>
							<select className="form-select form-select-lg" id="subcategory">
								<option value="">New Incident</option>
								<option value="">Unsolved Incident</option>
								<option value="" selected>
									--None--
								</option>
							</select>
							{/* Service offeing */}
							<label htmlFor="serviceOffering" className="form-label">
								Service offering
							</label>
							<input
								type="text"
								placeholder="Service offering"
								className="form-control form-control-lg"
								id="serviceOffering"
							/>
							{/* Service offeing */}
							<label htmlFor="configuration" className="form-label">
								Configuration item
							</label>
							<input
								type="text"
								placeholder="configuration"
								className="form-control form-control-lg"
								id="configuration"
							/>
						</div>
						<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
							{/* Channel */}
							<label htmlFor="channel" className="form-label">
								Channel
							</label>
							<select className="form-select form-select-lg" id="channel">
								<option value="">Inquiry/Help</option>
								<option value="">Incident</option>
								<option value="" selected>
									--None--
								</option>
							</select>

							{/* State */}
							<label htmlFor="state" className="form-label">
								State
							</label>
							<select className="form-select form-select-lg" id="state">
								<option value="">Previous</option>
								<option value="">Solved</option>
								<option value="">Reopened</option>
								<option value="">Unsolved</option>
								<option value="" selected>
									--New--
								</option>
							</select>
							{/* Impact */}
							<label htmlFor="impact" className="form-label">
								Impact
							</label>
							<select className="form-select form-select-lg" id="impact">
								<option value="" selected>
									1. Low{" "}
								</option>
								<option value="">2. High </option>
								<option value="">3. Priority</option>
							</select>
							{/* Urgency */}
							<label htmlFor="urgency" className="form-label">
								Urgency
							</label>
							<select className="form-select form-select-lg" id="urgency">
								<option value="" selected>
									1. Low{" "}
								</option>
								<option value="">2. High </option>
								<option value="">3. Priority</option>
							</select>
							{/* Assignment group */}
							<label htmlFor="assignmentGroup" className="form-label">
								Assignment Group
							</label>
							<select
								className="form-select form-select-lg"
								id="assignmentGroup"
							>
								<option value="" selected>
									1. IT E-Level
								</option>
								<option value="">2. IT M-Level </option>
								<option value="">3. IT H-Level</option>
							</select>
							{/* Assigned  to */}
							<label htmlFor="assignedTo" className="form-label">
								Assigned to
							</label>
							<select className="form-select form-select-lg" id="assignedTo">
								<option value="" selected>
									1. IT E-Level - John Doe
								</option>
								<option value="">2. IT M-Level - Sarah Smith</option>
								<option value="">3. IT H-Level - John Smith</option>
							</select>
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
