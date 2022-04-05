import React from "react";
import theme from "theme";
import { Theme, Text, Box, Button, Section } from "@quarkly/widgets";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { TCCourses } from "components";
import axios from "axios";
export default (() => {

	

	function onClickDelete (idCurso) {
		
		axios.delete(`http://localhost:8080/cursos/`+idCurso)
		.then(res => {
			axios.get(`http://localhost:8080/cursos`)
			.then(res => {
				window.sessionStorage.setItem("courseData", JSON.stringify(res.data));
			})
			window.location.reload()
		}).catch(err => {
			console.log(err)
		})

	}

	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"listado-de-cursos"} />
		
		<Section>
			<Text
				margin="0px 0px 0px 0px"
				text-align="left"
				font="50px sans-serif"
				background="#c8c8c8"
				padding="0px 0px 0px 10px"
				border-width="1px"
				border-style="solid"
				border-color="#9b9b9b"
			>
				Listado de todos los cursos {window.sessionStorage.getItem("filter")}
			</Text>
			<Box
				min-width="100px"
				min-height="100px"
				padding="10px 10px 10px 10px"
				border-style="solid"
				border-width="1px"
				border-color="#9b9b9b"
			>
				<Text margin="0px 0px 0px 0px">
					<TCCourses courseData={window.sessionStorage.getItem("courseData")} onClickDelete={onClickDelete} />
				</Text>
			</Box>
			<Button min-width="fit-content" max-width="fit-content" margin="20px 0px 0px 0px" onClick={
				() => {
					window.location.href = "/index";
				}
			}>
				Ir a Inicio
			</Button>
			<Button min-width="fit-content" max-width="fit-content" margin="20px 0px 0px 0px" onClick={
				() => {
					window.location.href = window.sessionStorage.getItem("lastPage");
				}
			}>
				Volver
			</Button>
		</Section>
		<Section />
		
	</Theme>;
});