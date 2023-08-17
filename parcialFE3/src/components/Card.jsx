import React from "react";

const Card = ({ nombre, apellido }) => {
	return (
		<div>
			<h4>
				Bienvenido {nombre} {apellido}!
			</h4>
		</div>
	);
};

export default Card;
