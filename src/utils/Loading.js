import "./LoadingStyle.css";

const Loading = () => {
	return (
		<>
			<div className="container">
				<div className="row mt-4">
					<div className="loading-spinner">
						<div className="d-flexs justify-content-center">
							<div className="spinner-border"></div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Loading;
