import React from "react";
import { useOverrides } from "@quarkly/components";
import { Box } from "@quarkly/widgets";
import TextField from '@mui/material/TextField';

const defaultProps = {
	"min-width": "100%",
	"flex": "0 0 auto"
};
const overrides = {
	"text": {
		"kind": "Text",
		"props": {
			"margin": "0px 0px 0px 0px",
			"children": "Some text"
		}
	},
	"input": {
		"kind": "Input",
		"props": {
			"display": "block",
			"placeholder-color": "LightGray",
			"background": "white",
			"min-width": "100%"
		}
	}
};

const Input = props => {
	const {
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		<TextField 
			id="outlined-basic" 
			label={props.label} 
			variant="outlined" 
			fullWidth 
			placeholder={props.hint} 
			inputProps={{
				type: props.inputMode,				
			}}
			required={props.required}
		/>
		<br />
		<br />
	</Box>;
};

export default Input;