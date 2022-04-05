import React, { useState } from "react";
import theme from "theme";
import { Theme, Text, Hr, Section, Button } from "@quarkly/widgets";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import * as Components from "components";
import axios from "axios";


export default (() => {

	const [nombre, setNombre] = useState();
	const [categoria, setCategoria] = useState();
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

	function onChangeProfesor(e) {
		const { value } = e.target;
		console.log(value);
		setProfesor(value);
	}

	function onChangeCategoria(e) {
		const { value } = e.target;
		setCategoria(options[value].label);
	}

	function searchNombre() {
		axios.get("http://localhost:8080/cursos/nombre/"+nombre).then(res => {
			window.location.href = "/listado-de-cursos";
			window.sessionStorage.setItem("filter", "filtrados por nombre");
			window.sessionStorage.setItem("lastPage", "/busqueda-de-cursos");
			window.sessionStorage.setItem("courseData", JSON.stringify(res.data));
		});
	}

	function searchCategoria() {
		axios.get("http://localhost:8080/cursos/categoria/"+categoria).then(res => {
			window.location.href = "/listado-de-cursos";
			window.sessionStorage.setItem("filter", "filtrados por nombre");
			window.sessionStorage.setItem("lastPage", "/busqueda-de-cursos");
			window.sessionStorage.setItem("courseData", JSON.stringify(res.data));
		});
	}

	function searchProfesor() {
		axios.get("http://localhost:8080/cursos/profesor/"+profesor).then(res => {
			window.location.href = "/listado-de-cursos";
			window.sessionStorage.setItem("filter", "filtrados por nombre");
			window.sessionStorage.setItem("lastPage", "/busqueda-de-cursos");
			window.sessionStorage.setItem("courseData", JSON.stringify(res.data));
		});
	}


	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"busqueda-de-cursos"} />
		<Section>
			<Text margin="0px 0px 0px 0px" text-align="left" font="50px sans-serif">
				Búsqueda de Cursos
			</Text>
			<Hr
				min-width="100%"
				margin="10px 0px 10px 0px"
				color="#b3a0a0"
				background="#9b9b9b"
				max-height="2px"
				height="2px"
				padding="0px 0px 0px 0px"
				min-height="2px"
			/>
		</Section>
		<Section>
			<Components.TextInput
				label="Nombre"
				hint="Escribe el nombre del curso"
				onChange={onChangeName}
				inputMode="text"
				required={false}
			/>
			<Button max-width="fit-content" onClick={searchNombre}>
				Buscar por Nombre
			</Button>
			<Hr
				min-width="100%"
				margin="10px 0px 10px 0px"
				color="#b3a0a0"
				background="#9b9b9b"
				max-height="2px"
				height="2px"
				padding="0px 0px 0px 0px"
				min-height="2px"
			/>
			<br />
			<Components.DropdownInput
				label="Categoria"
				hint="Escribe la categoria del curso"
				onChange={onChangeCategoria}
				options={options}
				defaultValue={options[0].value}
				required={true}
			/>
			<Button max-width="fit-content" onClick={searchCategoria}>
				Buscar por Categoria
			</Button>
			<Hr
				min-width="100%"
				margin="10px 0px 10px 0px"
				color="#b3a0a0"
				background="#9b9b9b"
				max-height="2px"
				height="2px"
				padding="0px 0px 0px 0px"
				min-height="2px"
			/>
			<br />
			<Components.TextInput
				label="Profesor"
				hint="Escribe el profesor del curso"
				onChange={onChangeProfesor}
				inputMode="text"
				required={true}
			/>
			<Button max-width="fit-content" onClick={searchProfesor}>
				Buscar por Profesor
			</Button>
			<Hr
				min-width="100%"
				margin="10px 0px 10px 0px"
				color="#b3a0a0"
				background="#9b9b9b"
				max-height="2px"
				height="2px"
				padding="0px 0px 0px 0px"
				min-height="2px"
			/>
			<Button max-width="fit-content" href="/index" onClick={
				() => {
					window.location.href = "/index";
				}
			}>
				Ir a Inicio
			</Button>
		</Section>
	</Theme>;
});