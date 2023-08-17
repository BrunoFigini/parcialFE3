import { useState } from "react";
import Card from "./Card";

const Form = () => {
	const [estudiante, setEstudiante] = useState({
		nombre: "",
		apellido: "",
	});

	const [show, setShow] = useState(false);
	const [error, setError] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (
			estudiante.nombre.trim().length > 3 &&
			estudiante.apellido.length >= 6
		) {
			setShow(true);
			setError(false);
			console.log(show);
		} else {
			setShow(false);
			setError(true);
		}
	};

	const handleChange = (e) =>
		setEstudiante({ ...estudiante, nombre: e.target.value });
	console.log(estudiante);
	return (
		<form onSubmit={handleSubmit} Card={Card}>
			<label>Nombre: </label>
			<input type="text" onChange={handleChange} />
			<label>Apellido: </label>
			<input
				type="text"
				onChange={(e) =>
					setEstudiante({ ...estudiante, apellido: e.target.value })
				}
			/>
			<button>Registrarse</button>

			{error && <h6>Por favor chequea que la información sea correcta</h6>}

			{show && (
				<>
					<Card
						nombre={estudiante.nombre}
						apellido={estudiante.apellido}
					/>
				</>
			)}
		</form>
	);
};

export default Form;
