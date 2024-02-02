import React from "react";
import "./LandingStyle.css";
import { Link } from "react-router-dom";

const LangdingPage = () => {
	return (
		<>
			{/* ======= Hero Section ======= */}
			<section id="hero" className="d-flex align-items-center">
				<div className="container">
					<div className="row">
						<div
							className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
							data-aos="fade-up"
							data-aos-delay={200}
						>
							<h1>Better Solutions For Your Business</h1>
							<h2>
								Streamline processes with automated, intuitive solutions. Obtain
								answers, approvals, and insights precisely when they are
								crucial.
							</h2>
							<div className="d-flex justify-content-center justify-content-lg-start">
								<a href="#about" className="btn-get-started scrollto">
									Get Started
								</a>
								<Link to="#" className="glightbox btn-watch-video">
									<i class="fa fa-stop-circle" aria-hidden="true"></i>

									<span>Explore Demo</span>
								</Link>
							</div>
						</div>
						<div
							className="col-lg-6 order-1 order-lg-2 hero-img"
							data-aos="zoom-in"
							data-aos-delay={200}
						>
							<img
								src="images/hero-img.png"
								className="img-fluid animated"
								alt=""
							/>
						</div>
					</div>
				</div>
			</section>
			{/* End Hero */}
		</>
	);
};

export default LangdingPage;
