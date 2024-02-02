import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
	return (
		<section className="navigation">
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark text-uppercase">
				<div className="container-fluid">
					<Link className="navbar-brand" to="/">
						RiseNow
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarScroll"
						aria-controls="navbarScroll"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon" />
					</button>
					<div className="collapse navbar-collapse" id="navbarScroll">
						<ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll">
							<li className="nav-item">
								<Link className="nav-link active" aria-current="page" to="/">
									Home
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="#">
									About
								</Link>
							</li>

							<li className="nav-item">
								<Link className="nav-link" to="/incidents/ticketing">
									Ticket
								</Link>
							</li>

							<li className="nav-item">
								<Link className="nav-link" to="/incidents/all-incidents">
									Incidents
								</Link>
							</li>

							<>
								<li className="nav-item dropdown">
									<Link
										className="nav-link dropdown-toggle"
										to="#"
										id="navbarDropdown"
										role="button"
										data-bs-toggle="dropdown"
										aria-expanded="false"
									>
										Services
									</Link>
									<ul
										className="dropdown-menu"
										aria-labelledby="navbarDropdown"
									>
										<li>
											<Link className="dropdown-item" to="#">
												Knowledge Base
											</Link>
										</li>
									</ul>
								</li>
							</>

							<li className="nav-item">
								<Link className="nav-link" to="#">
									Contact Us
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</section>
	);
};

export default Navigation;
