import React from "react";
import { Link } from "react-router-dom";
import "./FooterStyle.css";

const FooterComponent = () => {
	return (
		<section className="footer text-lg-start">
			{/* Section: Social media */}
			<div className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
				{/* Left */}
				<div className="me-5 d-none d-lg-block">
					<span>LET'S STAY CONNECTED</span>
				</div>
				{/* Left */}
				{/* Right */}
				<div>
					<Link to="#" className="me-4 text-reset">
						<i className="fa fa-facebook-f" />
					</Link>
					<Link to="#" className="me-4 text-reset">
						<i className="fa fa-twitter" />
					</Link>

					<Link
						to="https://www.linkedin.com/in/mahmoudaosman/"
						className="me-4 text-reset"
					>
						<i className="fa fa-linkedin" />
					</Link>
					<Link to="/#" className="me-4 text-reset">
						<i className="fa fa-github" />
					</Link>
				</div>
				{/* Right */}
			</div>
			{/* Section: Social media */}
			{/* Section: Links  */}
			<div>
				<div className="container text-center text-md-start mt-5">
					{/* Grid row */}
					<div className="row mt-3">
						{/* Grid column */}
						<div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
							<img
								src="/images/risenow-logo.png"
								className="logo img-fluid"
								alt="logo"
								style={{ width: 100, objectFit: "cover" }}
							/>

							<p>
								RISENOW: Your go-to for top-notch IT services and support. From
								software solutions to hardware maintenance, we've got you
								covered.
							</p>
						</div>
						{/* Grid column */}
						{/* Grid column */}
						<div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
							{/* Links */}
							<h6 className="text-uppercase fw-bold mb-4">Company</h6>
							<p>
								<Link to="#" className="text-reset">
									How it works
								</Link>
							</p>
							<p>
								<Link to="#" className="text-reset">
									About us
								</Link>
							</p>
							<p>
								<Link to="#" className="text-reset">
									Careers
								</Link>
							</p>
							<p>
								<Link to="#" className="text-reset">
									News
								</Link>
							</p>
						</div>
						{/* Grid column */}
						{/* Grid column */}
						<div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
							{/* Links */}
							<h6 className="text-uppercase fw-bold mb-4">Help & Resources</h6>
							<p>
								<Link to="#" className="text-reset">
									FAQ
								</Link>
							</p>
							<p>
								<Link to="#" className="text-reset">
									Terms and conditions
								</Link>
							</p>
							<p>
								<Link to="#" className="text-reset">
									Privacy policy
								</Link>
							</p>
							<p>
								<Link to="#" className="text-reset">
									Security
								</Link>
							</p>

							<p>
								<Link to="#" className="text-reset">
									Contact us
								</Link>
							</p>
						</div>
						{/* Grid column */}
						{/* Grid column */}
						<div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
							{/* Links */}
							<h6 className="text-uppercase fw-bold mb-4">Contact</h6>
							<p>
								<i className="fa fa-home me-3" /> Minnesota, MN 55408, US
							</p>
							<p>
								<i className="fa fa-envelope me-3" />
								risenow@suport.com
							</p>
							<p>
								<i className="fa fa-phone me-3" /> + 01 234 567 88
							</p>
							<p>
								<i className="fa fa-print me-3" /> + 01 234 567 89
							</p>
						</div>
						{/* Grid column */}
					</div>
					{/* Grid row */}
				</div>
			</div>
			{/* Section: Links  */}
			{/* Copyright */}
			<div className="copyright text-center p-4">
				&copy; Copyright. {new Date().getFullYear()}. RiseNow, INC. All rights
				reserved. &nbsp; Designed & developed by{" "}
				<Link
					to="http://www.mahmoudosman.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					Mahmoud Osman
				</Link>
			</div>
			{/* Copyright */}
		</section>
	);
};

export default FooterComponent;
