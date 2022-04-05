import React from "react";
import Index from "pages/index";
import ListadoDeCursos from "pages/listadoDeCursos";
import NuevoCurso from "pages/nuevoCurso";
import BusquedaDeCursos from "pages/busquedaDeCursos";
import Page404 from "pages/page404";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle(`
    body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
    }
`);

export default () => (
    <Router>
        <GlobalStyles />
        <Switch>
        			<Route exact path='/' component={Index}/>
			<Route exact path='/index' component={Index}/>
			<Route exact path='/listado-de-cursos' component={ListadoDeCursos}/>
			<Route exact path='/nuevo-curso' component={NuevoCurso}/>
			<Route exact path='/busqueda-de-cursos' component={BusquedaDeCursos}/>
			<Route component={Page404}/>
        </Switch>
    </Router>
);
