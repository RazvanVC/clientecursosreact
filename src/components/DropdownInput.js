import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const DropdownInput = props => {

    const options = props.options.map(option => {
        return <MenuItem key={option.value} value={option.value} disabled={option.disabled} >{option.label}</MenuItem>
    })

    return <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
            <InputLabel id="tipo">Tipo</InputLabel>
            <Select
                labelId="tipo"
                id="tipo"
                label={props.label}
                placeholder={props.hint}
                onChange={props.onChange}
                defaultValue={props.defaultValue}
            >
                {options}
            </Select>
        </FormControl>
        <br />
		<br />
    </Box>
};

export default DropdownInput;