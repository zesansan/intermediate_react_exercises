import React from "react";
import { Link } from "react-router-dom";
import "./Color.css";

const Color = props => {
	const { color } = props;
	return (
		<div className="Color" style={{ backgroundColor: color.hex }}>
			<p>this is {color.color}.</p>
			<p>isn't it beautiful?</p>
			<p>
				<Link to="/colors">back</Link>
			</p>
		</div>
	);
};

export default Color;
