import React, { useEffect, useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';
import axios from 'axios';
import Inputtext from './Inputtext';
import Button from '@mui/material/Button';

const Lngslct = () => {

    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [options, setOptions] = useState([]);
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");

    console.log(process.env);

    const translate = () => {
        const params = new URLSearchParams();
        params.append('q', input);
        params.append('source', from);
        params.append('target', to);
        params.append('api_key', 'process.env.REACT_APP_API_KEY');

        axios.post("https://libretranslate.de/translate",params,{
            headers:{
                "accept":"application/json",
                "Content-Type":"application/x-www-form-urlencoded",
            },
        }).then( res=>{
            console.log(res.data);
            setOutput(res.data.translatedText);
        } )
    };

    const getData = async () => {
        try {
            const res = await axios.get("https://libretranslate.com/languages",
            {headers:{"accept":"application/json"}});
            console.log(res.data);
            setOptions(res.data);
        } catch (error) {
            console.log("my error is "+ error);
        }
    }

    const fromChange = (event) => {
        setFrom(event.target.value);
      };
    const toChange = (event) => {
        setTo(event.target.value);
      };
    
    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <div className="language d-flex justify-content-around">
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-label">From</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Age"
                    onChange={fromChange}
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
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-label">To</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Age"
                    onChange={toChange}
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
            </div>
            <div className=" d-flex justify-content-around mt-5 ">
                <Inputtext output={output} setInput={setInput} />
            </div>
            <Button className="w-25 m-auto mt-3" variant="contained" onClick={translate}>Translate</Button>
        </>
    )
}

export default Lngslct
