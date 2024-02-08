import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { API } from '../API';
import DeleteIcon from '@mui/icons-material/DeleteOutlineTwoTone';
import { Button, Checkbox, Tooltip, Typography } from '@mui/material';
import StarBorder from '@mui/icons-material/StarBorder';
import ArrowBackTwoToneIcon from '@mui/icons-material/ArrowBackTwoTone';


function DisplayMsg({ send }) {
    const [message, setMessage] = useState([])
    const items = JSON.parse(localStorage.getItem('email'));
    const result = {
        items
    }
    useEffect(() => {
        console.log("useEfect called")
        axios.post(`${API}/gmail/getting-msg`, result)
            .then((res) => setMessage(res.data))
    }, [send])

    const handleDelete = (id) => {
        const newdata = {
            id
        }
        axios.post(`${API}/gmail/deleting-msg`, newdata)
            .then((res) => alert(res.data))
    }
    return (
        <div>
            <ArrowBackTwoToneIcon />
            {message.map((details) => {
                return (
                    <div className='displaymsg-root'>
                        <Tooltip title={details.message}>
                            <table className="displaymsg" onClick={() => console.log(details._id)}>
                                <Checkbox size='small' />
                                <StarBorder fontSize='small' style={{ marginRight: 10 }} />
                                <Typography style={{ width: 200 }}>{details.from}</Typography>
                                <Typography style={{ width: 200 }}>{details.subject}</Typography>
                                <Typography style={{ width: 200 }}>{details.message}</Typography>
                                <Button onClick={() => handleDelete(details._id)}><DeleteIcon color='inherit' /></Button>
                            </table>
                        </Tooltip>
                    </div>
                )
            })}
        </div >
    )
}
export default DisplayMsg

