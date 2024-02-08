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
						<div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1">
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
						<div className="col-lg-6 order-1 order-lg-2 hero-img">
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
			{/* Start of modern solutions*/}
			<section className="modern-solution bg-light mb-4">
				<div className="container">
					<div className="row ">
						<div className="col-md-6 mt-3">
							<small className="fst-italic text-muted">Solution</small>
							<h1>We offer modern solutions for growing your business</h1>
							<p className="lead">
								Provide robust IT services and foster productivity-enhancing
								experiences for your teams. Accelerate issue resolution and
								innovation through AI and machine learning, all seamlessly
								integrated within a unified cloud platform.
							</p>
						</div>
						<div className="col-md-6">
							<img
								className="img-fluid"
								src="images/solution-arc.png"
								alt="solutions"
							/>
						</div>
					</div>
				</div>
			</section>
			{/* End of modern solutions*/}

			{/* Start of feature apps */}
			<section className="feature-apps mt-4">
				<div className="container">
					<small className="fst-italic text-muted">Do more with IT</small>
					<h1 className="mb-4">Do more with IT Service Management</h1>

					<div className="row text-lg-start text-sm-center mt-4">
						<div className="col-xl-4 text-center">
							<img
								src="images/features-3.png"
								className="img-fluid p-4"
								alt="feature app img"
							/>
						</div>
						<div className="col-xl-8 ">
							<div className="row  gy-4">
								<div className="col-md-6 ">
									<i
										className="fa fa-line-chart d-inline p-2 bg-dark text-white img-thumbnail"
										aria-hidden="true"
									></i>

									<div>
										<h4 className="mt-3">Now Assist </h4>
										<p>
											Accelerate productivity with generative AI experiences on
											the Now Platform.
										</p>
									</div>
								</div>
								<div className="col-md-6 icon-box">
									<i className="ri-stack-line p-2 bg-dark text-white img-thumbnail" />
									<div>
										<h4 className="mt-3">Configuration Management Database</h4>
										<p>
											Track the dependencies and relationships of supported IT
											services to maintain continuity.
										</p>
									</div>
								</div>
								<div className="col-md-6 icon-box ">
									<i className="ri-brush-4-line p-2 bg-dark text-white img-thumbnail" />
									<div>
										<h4 className="mt-3">Knowledge Management</h4>
										<p>
											mprove business efficiency with easy knowledge sharing and
											collaboration.
										</p>
									</div>
								</div>
								<div className="col-md-6 icon-box ">
									<i className="ri-magic-line p-2 bg-dark text-white img-thumbnail" />
									<div>
										<h4 className="mt-3">Document Intelligence</h4>
										<p>
											Automate data extraction from documents, integrating
											seamlessly into workflows for enhanced efficiency.
										</p>
									</div>
								</div>
								<div className="col-md-6 icon-box ">
									<i className="ri-command-line p-2 bg-dark text-white img-thumbnail" />
									<div>
										<h4 className="mt-3">Incident Management</h4>
										<p>
											Restore services faster with intelligent routing and
											built-in collaboration.
										</p>
									</div>
								</div>
								<div className="col-md-6 icon-box ">
									<i className="ri-radar-line p-2 bg-dark text-white img-thumbnail" />
									<div>
										<h4 className="mt-3">Service Operations Workspace</h4>
										<p>
											Manage incidents proactively with clear visibility when
											services are at risk.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<hr />
			{/* End of feature apps */}

			{/* Start with us */}
			<section className="start-with-us">
				<div className="container-fluid mt-4">
					<div className="row">
						<div className="col-md-6 ">
							<img
								className="img-fluid  p-3"
								src="images/start-with-us.png"
								alt="start with us"
							/>
						</div>
						<div className="col-md-6 p-4">
							<h1>See how we help the world work better</h1>
							<p className="lead">
								See how we help the world work better by fostering innovation,
								empowering communities, and driving positive change. Through our
								commitment to excellence and collaboration, we tackle complex
								challenges head-on, pioneering solutions that enhance
								efficiency, sustainability, and inclusivity. From cutting-edge
								technology to sustainable practices, we're dedicated to shaping
								a brighter future for generations to come. Join us in our
								mission to create a world where every individual and
								organization can thrive, making progress together towards a more
								equitable and prosperous global community.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* End with with us */}

			{/* Start of try us out */}
			<section className="try-us mt-3">
				<div
					className="container-fluid bg-success try-us-container"
					style={{ height: "100px" }}
				>
					<div className="row"></div>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-md-6">
							<div className="card">
								<div className="card-body text-center">
									<img
										src="images/icons/play.png"
										className="card-img-top icons"
										alt="icon"
									/>

									<h1>Try us out</h1>
									<p>
										See how the Now Platform uses AI and automation to make work
										better for everyone
									</p>
									<button className="btn btn-outline-primary">
										Watch Demo
									</button>
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<div className="card">
								<div className="card-body text-center">
									<img
										src="images/icons/video-call.png"
										className="card-img-top icons"
										alt="icon"
									/>

									<h1>Connect with an expert</h1>
									<p>
										Whether you need to streamline a process or develop apps
										fast, we're here to help.
									</p>
									<button className="btn btn-outline-primary">
										Contact Us
									</button>
								</div>
							</div>
						</div>{" "}
					</div>
				</div>
			</section>
			{/* End of try us out */}
		</>
	);
};

export default LangdingPage;
