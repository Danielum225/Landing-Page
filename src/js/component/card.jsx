import PropTypes from "prop-types";
import React from "react";

const Card = (props) => {
	return (
		<div class="card">
			<img
				src={props.imageUrl}
				class="card-img-top"
				alt="imagen de las card"
			/>
			<div class="card-body">
				<h5 class="card-title">{props.title}</h5>
				<p class="card-text">{props.description}</p>
				<a href="#" class="btn btn-primary">
					{props.button_text}
				</a>
			</div>
		</div>
	);
};

Card.propTypes = {
	imageUrl: PropTypes.string,
	title: PropTypes.string,
	description: PropTypes.string,
	button_text: PropTypes.string,
};

export default Card;
