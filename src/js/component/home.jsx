import React from "react";
import Navbar from "./navbar.jsx";
import Card from "./card.jsx";
import Jumbotron from "./jumbotron.jsx";
import Footer from "./footer.jsx";

const Home = () => {
	return (
		<>
			<Navbar
				title_a="Start Bootstrap"
				title_b="Home"
				title_c="About"
				title_d="Services"
				title_e="Contact"
			/>
			<div className="container">
				<div>
					<Jumbotron />
				</div>
				<div className="row">
					<div className="col-12 col-md-3 my-4">
						<Card
							title="Card Title"
							description="Lorem Ipsum is simply dummy text of the printing and typesetting industry, very happy dummy."
							imageUrl="https://edgewoodreit.com/wp-content/uploads/2018/01/500x325-300x195.png"
							button_text="Find out more!"
						/>
					</div>
					<div className="col-12 col-md-3 my-4">
						<Card
							title="Card Title"
							description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley mountain."
							imageUrl="https://edgewoodreit.com/wp-content/uploads/2018/01/500x325-300x195.png"
							button_text="Find out more!"
						/>
					</div>
					<div className="col-12 col-md-3 my-4">
						<Card
							title="Card Title"
							description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
							imageUrl="https://edgewoodreit.com/wp-content/uploads/2018/01/500x325-300x195.png"
							button_text="Find out more!"
						/>
					</div>
					<div className="col-12 col-md-3 my-4">
						<Card
							title="Card Title"
							description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour."
							imageUrl="https://edgewoodreit.com/wp-content/uploads/2018/01/500x325-300x195.png"
							button_text="Find out more!"
						/>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Home;
