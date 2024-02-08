import { Box, Checkbox, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { API } from '../API';

function DisplayMsg() {
    const [message, setMessage] = useState([])
    const items = JSON.parse(localStorage.getItem('email'));
    const result = {
        items
    }
    useEffect(() => {
        axios.post(`${API}/gmail//getting-msg`, result)
            .then((res) => setMessage(res.data))
    }, [])


    console.log(message)
    return (
        <div>
            {message.map((details) => {
                return (
                    <div>
                        <h1>{details.from}</h1>
                        <h1>{details.to}</h1>
                        <h1>{details.message}</h1>
                    </div>
                )

            })}

        </div >
    )
}
export default DisplayMsg

