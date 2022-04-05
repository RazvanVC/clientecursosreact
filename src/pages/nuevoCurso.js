import React, { useState } from "react";
import theme from "theme";
import { Theme, Text, Hr, Section, Button } from "@quarkly/widgets";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import * as Components from "components";
import axios from "axios";

export default (() => {

	const [nombre, setNombre] = useState();
	const [categoria, setCategoria] = useState();
	const [duracion, setDuracion] = useState();
	const [precio, setPrecio] = useState();
	const [profesor, setProfesor] = useState();

	const options = [
		{ value: "0", label: "Categoria...", disabled: true },
		{ value: "1", label: "Frontend", disabled: false },
		{ value: "2", label: "Backend", disabled: false },
		{ value: "3", label: "Fullstack", disabled: false },
		{ value: "4", label: "Otros", disabled: false },
	]

	function onChangeName(e) {
		const { value } = e.target;
		setNombre(value);
	}

	function onChangeDuracion(e) {
		const { value } = e.target;
		setDuracion(value);
	}

	function onChangePrecio(e) {
		const { value } = e.target;
		setPrecio(value);
	}

	function onChangeProfesor(e) {
		const { value } = e.target;
		setProfesor(value);
	}

	function onChangeCategoria(e) {
		const { value } = e.target;
		setCategoria(options[value].label);
	}

	function onSubmit(e) {
		console.log(nombre);
		console.log(categoria);
		console.log(duracion);
		console.log(precio);
		console.log(profesor);

		if (nombre !== undefined && categoria !== undefined /*&& categoria!== "Categoria..."*/ && duracion !== undefined && precio !== undefined && profesor !== undefined) {
			axios.request({
				method: "post",
				url: "http://localhost:8080/cursos",
				data: {
					"idCurso": 10000,
					"nombre": nombre,
					"duracion": parseInt(duracion),
					"profesor": profesor,
					"precio": parseFloat(precio),
					"categoria": categoria
				}, 
				withCredentials: false
			})
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});
		} else {
			alert("Faltan campos por rellenar");
		}
	}

	return <Theme theme={theme}>
			<GlobalQuarklyPageStyles pageUrl={"nuevo-curso"} />
			<Section>
				<Text margin="0px 0px 0px 0px" text-align="left" font="50px sans-serif">
					Nuevo Curso
				</Text>
				<Hr
					min-height="2px"
					min-width="100%"
					margin="0px 0px 0px 0px"
					height="2px"
					max-height="2px"
					background="#9b9b9b"
					padding="0px 0px 0 0px"
				/>
			</Section>

			<Section>

				<Components.TextInput
					label="Nombre"
					hint="Escribe el nombre del curso"
					onChange={onChangeName}
					inputMode="text"
					required = {true}
				/>
				<Components.TextInput
					label="Duración"
					hint="Escribe la duración del curso"
					onChange={onChangeDuracion}
					inputMode="number"
					required = {true}
				/>
				<Components.TextInput
					label="Profesor"
					hint="Escribe el profesor del curso"
					onChange={onChangeProfesor}
					inputMode="text"
					required = {true}
				/>
				<Components.TextInput
					label="Precio"
					hint="Escribe el precio del curso"
					onChange={onChangePrecio}
					inputMode="number"
					required = {true}
				/>
				<Components.DropdownInput
					label="Categoria"
					hint="Escribe la categoria del curso"
					onChange={onChangeCategoria}
					options={options}
					defaultValue={options[0].value}
					required = {true}
				/>
				<Button
					min-height="min-content"
					min-width="min-content"
					max-width="max-content"
					margin="30px 0px 0px 0px"
					background="#383e3e"
					onClick={() => {
						onSubmit();
					}}
				>
					Guardar
				</Button>
				<Hr
					min-height="2px"
					min-width="100%"
					margin="10px 0px 10px 0px"
					max-height="2px"
					height="2px"
					background="#9b9b9b"
					padding="0px 0px 0 0px"
				/>
				<Button
					min-height="min-content"
					min-width="min-content"
					max-width="max-content"
					margin="0px 0px 0px 0px"
					href="/index"
					onClick={() => {
						window.location.href = "/index";
					}}
				>
					Ir al Inicio
				</Button>
			</Section>
	</Theme>;
});