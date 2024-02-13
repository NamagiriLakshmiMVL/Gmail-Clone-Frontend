import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Checkbox, Tooltip, Typography } from '@mui/material';
import { API } from '../API';
import { TopBar } from './TopBar';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Navbar from './Navbar';
import StarIcon from '@mui/icons-material/Star';
import { star_message } from '../redux/starSlice';
import { useDispatch } from 'react-redux';
import DeleteIcon from '@mui/icons-material/DeleteOutlineTwoTone';




export function Sent() {
    const dispatch = useDispatch()

    const [sent, setSent] = useState([])
    const [star, setStar] = useState([])
    const data = JSON.parse(localStorage.getItem("email"))
    const result = {
        data
    }
    useEffect(() => {
        axios.post(`${API}/gmail/getting-sent`, result)
            .then((res) => setSent(res.data))
    }, [])

    const handleStar = async (id) => {
        dispatch(star_message(id))
        console.log(id)
        if (star.includes(id)) {
            setStar(prev => prev.filter(ele => ele !== id))
        } else {
            setStar(prev => [...prev, id])
        }
    }


    const handleDelete = (val) =>{
        setSent(sent.filter((item)=>item._id !== val._id))
    }
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
                                        <Button onClick={() => handleStar(val._id)}> {star.includes(val._id) ? <StarIcon /> : <StarBorderIcon />}</Button>

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
