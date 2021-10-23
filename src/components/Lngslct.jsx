import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Inputtext from './Inputtext';
import Button from '@mui/material/Button';
import Slctlng from './Slctlng';

const Lngslct = () => {

    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [options, setOptions] = useState([]);
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");

    const translate = async () => {

        const params = new URLSearchParams();
        params.append('q', input);
        params.append('source', from);
        params.append('target', to);
        params.append('api_key', 'process.env.REACT_APP_API_KEY');

        try {
            const res = await axios.post("https://libretranslate.de/translate",params,{
                headers:{
                    "accept":"application/json",
                    "Content-Type":"application/x-www-form-urlencoded",
                }});
            setOutput(res.data.translatedText);
        } catch (error) {
            console.log("my output error is "+ error);
        }
    };

    const getData = async () => {
        try {
            const res = await axios.get("https://libretranslate.com/languages",
            {headers:{"accept":"application/json"}});
            setOptions(res.data);
        } catch (error) {
            console.log("my error is "+ error);
        }
    }
    
    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <div className="language d-flex justify-content-around">
                <Slctlng want={e=>setFrom(e.target.value)} form="From" options={options} />
                <Slctlng want={e=>setTo(e.target.value)} form="To" options={options} />
            </div>
            <div className=" d-flex justify-content-around mt-5 ">
                <Inputtext output={output} setInput={setInput} />
            </div>
            <Button className="w-25 m-auto mt-3" variant="contained" onClick={translate}>Translate</Button>
        </>
    )
}

export default Lngslct
