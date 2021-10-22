import React from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize';

const Inputtext = ({output,setInput}) => {

    const changeInput = (e) => {
        setInput(e.target.value);
    }

    return (
        <>
            <TextareaAutosize
                onInput={changeInput}
                aria-label="minimum height"
                minRows={5}
                placeholder="Minimum 3 rows"
                style={{ width: 300 }}
            />
            <TextareaAutosize
                value={output}
                aria-label="minimum height"
                minRows={5}
                placeholder="Minimum 3 rows"
                style={{ width: 300 }}
            />
        </>
    )
}

export default Inputtext
