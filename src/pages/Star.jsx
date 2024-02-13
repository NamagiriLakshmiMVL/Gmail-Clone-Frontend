import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Checkbox, Tooltip, Typography } from '@mui/material';
import { API } from '../API';
import { useSelector } from 'react-redux';
import { TopBar } from './TopBar';
import Navbar from './Navbar';
import StarIcon from '@mui/icons-material/Star';
import DeleteIcon from '@mui/icons-material/DeleteOutlineTwoTone';


export function Star() {
    const [sent, setSent] = useState([])

    const id = useSelector((state) => state.starSlice.starMessage)
    const result = {
        id
    }


    useEffect(() => {
        axios.post(`${API}/gmail/getting-star`, result)
            .then((res) => setSent(res.data))
    }, [])
    const handleDelete = (val) =>{
        setSent(sent.filter((item)=>item._id !== val._id))
    }

    console.log(sent)
    return (
        <div>
            <TopBar />
            <div style={{ display: "flex" }}>
                <Navbar />
                <div style={{ marginLeft: "80px", marginTop: "60px" }}>
                    {sent.map((val) => {
                        return (
                            <div className='displaymsg-root'>
                                <Tooltip title={val.message}>
                                    <table className="displaymsg" style={{ width: "130%", cursor: "pointer", backgroundColor: "lightgray" }} onClick={() => console.log(val._id)}>
                                        <Checkbox size='small' />
                                        <Button> <StarIcon fontSize='small' style={{ marginRight: 10 }} /></Button>
                                        <Typography style={{ width: 200 }}>{val.to}</Typography>
                                        <Typography style={{ width: 200 }}>{val.subject}</Typography>
                                        <Typography style={{ width: 200 }}>{val.message}</Typography>
                                        <Button onClick={() => handleDelete(val)}><DeleteIcon color='inherit' /></Button>

                                    </table>
                                </Tooltip>


                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
