import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';


const HTCResults = props => { 

    const rows = JSON.parse(props.courseData);

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>ID curso</TableCell>
                        <TableCell align="left">Nombre</TableCell>
                        <TableCell align="left">Duracion</TableCell>
                        <TableCell align="left">Profesor</TableCell>
                        <TableCell align="left">Precio</TableCell>
                        <TableCell align="left">Categoria</TableCell>
                        <TableCell align="center">Acciones</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.idCurso}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.idCurso}
                            </TableCell>
                            <TableCell align="left">{row.nombre}</TableCell>
                            <TableCell align="left">{row.duracion}</TableCell>
                            <TableCell align="left">{row.profesor}</TableCell>
                            <TableCell align="left">{row.precio}</TableCell>
                            <TableCell align="left">{row.categoria}</TableCell>
                            <TableCell align="center">
                                <IconButton name={row.idCurso} aria-label="delete" onClick={() => props.onClickDelete(row.idCurso)}>
                                    <DeleteIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))/*
                    rows.map((row) => (
                        <TableRow
                          key={row.name}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell component="th" scope="row">
                            {row.name}
                          </TableCell>
                          <TableCell align="right">{row.calories}</TableCell>
                          <TableCell align="right">{row.fat}</TableCell>
                          <TableCell align="right">{row.carbs}</TableCell>
                          <TableCell align="right">{row.protein}</TableCell>
                        </TableRow>
                      ))*/
                    }
                </TableBody>
            </Table>
        </TableContainer>

    );
};

export default HTCResults;