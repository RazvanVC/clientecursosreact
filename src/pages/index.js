import React from "react";
import theme from "theme";
import { Theme, Text, Section, Icon, Button, Structure } from "@quarkly/widgets";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import {Override } from "@quarkly/components";
import { MdList, MdModeEdit, MdSearch } from "react-icons/md";
export default (() => {

	const [data, setData] = React.useState([]);
	const [fetched, setFetched] = React.useState(false);

	async function fetchData() {

			const response = await fetch("http://localhost:8080/cursos");
			const json = await response.json();
			setData(json);
			setFetched(true);
			console.log(json);
	
	}

	window.onload = function () {
		if (!fetched) {
			fetchData();
		}
	}

	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Section>
			<Text margin="0px 0px 0px 0px" text-align="center" font="70px sans-serif">
				Gestion de Cursos
			</Text>
		</Section>
		<Section>
			<Structure>
				<Override slot="Content">
					<Override slot="cell-0">
						<Icon category="md" icon={MdList} size="64px" />
						<Text margin="0px 0px 0px 0px" max-width="100%" font="32px sans-serif">
							Listado Cursos
						</Text>
						<Button
							background="rgba(0, 119, 204, 0)"
							border-width="1px"
							border-style="solid"
							border-color="#000000"
							color="#000000"
							font="normal 300 16px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
							margin="10px 5% 10px 5%"
							max-width="100%"
							min-width="90%"
							href="/listado-de-cursos"
							onClick={() => {
								window.location.href = "/listado-de-cursos";
								window.sessionStorage.setItem("courseData", JSON.stringify(data));
								window.sessionStorage.setItem("lastPage", "/index");
							}}
						>
							Listado de Cursos
						</Button>
					</Override>
					<Override slot="cell-1">
						<Icon category="md" icon={MdModeEdit} size="64px" />
						<Text margin="0px 0px 0px 0px" max-width="100%" font="32px sans-serif">
							Nuevo Curso
						</Text>
						<Button
							background="rgba(0, 119, 204, 0)"
							border-width="1px"
							border-style="solid"
							border-color="#000000"
							color="#000000"
							font="normal 300 16px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
							margin="10px 5% 10px 5%"
							max-width="100%"
							min-width="90%"
							href="/nuevo-curso"
							onClick={() => {
								window.location.href = "/nuevo-curso";
							}}
						>
							Nuevo Curso
						</Button>
					</Override>
					<Override slot="cell-2">
						<Icon category="md" icon={MdSearch} size="64px" />
						<Text margin="0px 0px 0px 0px" max-width="100%" font="32px sans-serif">
							Buscar Curso
						</Text>
						<Button
							background="rgba(0, 119, 204, 0)"
							border-width="1px"
							border-style="solid"
							border-color="#000000"
							color="#000000"
							font="normal 300 16px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
							margin="10px 5% 10px 5%"
							max-width="100%"
							min-width="90%"
							href="/busqueda-de-cursos"
							onClick={() => {
								window.location.href = "/busqueda-de-cursos";
							}}
						>
							Buscar Cursos
						</Button>
					</Override>
				</Override>
			</Structure>
		</Section>
	</Theme>;
});