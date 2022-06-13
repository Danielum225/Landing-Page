import PropTypes from "prop-types";
import React from "react";

const NavBar = (props) => {
	return (
		<nav className="navbar navbar-expand-lg bg-black">
			<div className="container-fluid">
				<a className="navbar-brand text-white ms-4" href="#">
					{props.title_a}
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className="collapse navbar-collapse"
					id="navbarNavAltMarkup">
					<div className="navbar-nav position-absolute top-0 end-0 mt-2 me-5">
						<a
							className="nav-link text-white"
							aria-current="page"
							href="#">
							{props.title_b}
						</a>
						<a className="nav-link disabled" href="#">
							{props.title_c}
						</a>
						<a className="nav-link disabled" href="#">
							{props.title_d}
						</a>
						<a className="nav-link disabled">{props.title_e}</a>
					</div>
				</div>
			</div>
		</nav>
	);
};

NavBar.propTypes = {
	title_a: PropTypes.string,
	title_b: PropTypes.string,
	title_c: PropTypes.string,
	title_d: PropTypes.string,
	title_e: PropTypes.string,
};

export default NavBar;
