import { render, screen } from "@testing-library/react";
import LandingPage from "../landing/LandingPage";

test("it check if 2 buttons are on landing pages", () => {
	//1. render the landing component
	render(<LandingPage />);
	//2. find the element
	const watchDemoButton = screen.getByText("Watch Demo");
	const contactUsButton = screen.getByText("Contact Us");

	//3. Assert that both buttons are present on the page
	expect(watchDemoButton).toBeInTheDocument();
	expect(contactUsButton).toBeInTheDocument();
});
