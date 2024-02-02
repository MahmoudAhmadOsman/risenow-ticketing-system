import React, { useState } from "react";
import "./RentalStyle.css";
const RentalsComponent = () => {
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());
	const formattedStartDate = startDate.toLocaleDateString("en-US", {
		month: "short",
		day: "2-digit",
		hour: "2-digit",
		minute: "2-digit",
		hour12: true,
	});

	const formattedendDate = endDate.toLocaleDateString("en-US", {
		month: "short",
		day: "2-digit",
		hour: "2-digit",
		minute: "2-digit",
		hour12: true,
	});
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		if (name === "startDate") {
			setStartDate(value);
		} else if (name === "endDate") {
			setEndDate(value);
		}
	};
	const data = [
		{
			id: 1,
			name: "Travel just got easier!",
			url: "https://tb-static.uber.com/prod/rider-product-car-rental/assets/rtb_desktop/travel_easy.svg",
			description:
				"Rent a car for a weekend getaway or even a month - whatever you need, from top rental brand.",
		},
		{
			id: 2,
			name: "Travel just got easier!",
			url: "https://tb-static.uber.com/prod/rider-product-car-rental/assets/rtb_desktop/rental_made_easy.png",
			description:
				"Rent a car for a weekend getaway or even a month - whatever you need, from top rental brand.",
		},
		{
			id: 3,
			name: "Travel just got easier!",
			url: "https://tb-static.uber.com/prod/rider-product-car-rental/assets/rtb_desktop/flexible_booking.png",
			description:
				"Rent a car for a weekend getaway or even a month - whatever you need, from top rental brand.",
		},
	];

	return (
		<section className="rentals mt-3">
			<div className="container">
				<div className="d-flex">
					<div className="find-rentals">
						<div className="row" style={{ marginRight: "5px" }}>
							<div className="col">
								<div className="card">
									<div className="card-body">
										<form>
											<h4>Find rentals near</h4>
											<div className="d-flex">
												<button className="btn btn-light">
													Different return location
												</button>
												<select
													className="form-select ms-1"
													style={{ width: "120px", height: "40px" }}
												>
													<option value="">Age: 30+</option>
													<option value="">Age: 40+</option>
													<option value="">Age: 50+</option>
													<option value="">Age: 50+</option>
												</select>
											</div>

											<div className="input-group mb-3">
												<span className="input-group-text" id="basic-addon1">
													<i className="fa fa-compass" aria-hidden="true"></i>
												</span>
												<input
													type="text"
													className="form-control"
													placeholder="Enter location"
													aria-label="location"
													aria-describedby="basic-addon1"
												/>
											</div>
											<div className="input-group mb-3">
												<span className="input-group-text" id="basic-addon2">
													<i className="fa fa-calendar" aria-hidden="true"></i>
												</span>
												<input
													type="date"
													className="form-control location"
													value={formattedStartDate}
													onChange={handleInputChange}
													aria-describedby="basic-addon2"
												/>
												<input
													type="date"
													className="form-control location"
													value={formattedendDate}
													onChange={handleInputChange}
													aria-describedby="basic-addon2"
												/>

												{/* <input
													type="text"
													className="form-control location"
													placeholder={startDate - endDate}
													aria-label="location"
													aria-describedby="basic-addon2"
													name="startDate"
													value={formattedStartDate}
													onChange={handleInputChange}
												/> */}
											</div>

											<button
												className="btn btn-dark btn-lg btn-block mt-3"
												style={{ width: "100%" }}
											>
												SEARCH
											</button>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="right-col">
						<div className="row">
							{data.map((item) => (
								<div className="col-lg-4 cl-md-6 col-sm-12 col-xs-12 mb-4 d-none d-md-block">
									<div className="card" key={item.id}>
										<img
											src={item.url}
											className="card-img-top"
											alt={item.name}
										/>

										<div className="card-body">
											<h3>{item.name}</h3>
											<p>{item.description}</p>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>

				{/* <div className="row">
					<div className="col-lg-4">
				
					</div>
					{data.map((item) => (
						<div className="col-lg-4">
							<div className="card">
								<img src={item.url} className="card-img-top" alt={item.name} />

								<div className="card-body">
									<h3>{item.name}</h3>
									<p>{item.description}</p>
								</div>
							</div>
						</div>
					))}
				</div> */}
			</div>
		</section>
	);
};

export default RentalsComponent;
