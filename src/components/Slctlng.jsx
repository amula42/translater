import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';

const Slctlng = ({options,form,want}) => {
    return (
        <>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-label">{form}</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
                onChange={want}
                >
                {
                    options.map((lng) => {
                        const { code, name } = lng;
                        return(
                            <MenuItem key={code} value={ code }>{name}</MenuItem>
                        )
                    })
                }
                </Select>
                <FormHelperText>Select Language</FormHelperText>
            </FormControl>
        </>
    )
}

export default Slctlng
