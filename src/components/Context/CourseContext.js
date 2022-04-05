import React from "react";

const CourseContext = React.createContext({
    nombre: "", 
    categoria: "",
    duracion: "",
    precio : "",
    profesor: "",
    
    setNombre: () => {},
    setCategoria: () => {},
    setDuracion: () => {},
    setPrecio: () => {},
    setProfesor: () => {},
});

export default CourseContext;