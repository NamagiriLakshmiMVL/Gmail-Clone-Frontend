import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Checkbox, Tooltip, Typography } from '@mui/material';
import { API } from '../API';
import DeleteOutlineTwoToneIcon from '@mui/icons-material/DeleteOutlineTwoTone';
import StarBorder from '@mui/icons-material/StarBorder';
import { useSelector } from 'react-redux';
import { TopBar } from './TopBar';
import Navbar from './Navbar';


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


    console.log(sent)
    return (
        <div>
            <TopBar />
            <div style={{ display: "flex" }}>
                <Navbar />
                <div style={{marginLeft:"80px"}}>
                    {sent.map((val) => {
                        return (
                            <div className='displaymsg-root'>
                                <Tooltip title={val.message}>
                                    <table className="displaymsg" style={{ width: "130%",cursor:"pointer", backgroundColor:"lightgray"}} onClick={() => console.log(val._id)}>
                                        <Checkbox size='small' />
                                        <StarBorder fontSize='small' style={{ marginRight: 10 }} />
                                        <Typography style={{ width: 200 }}>{val.to}</Typography>
                                        <Typography style={{ width: 200 }}>{val.subject}</Typography>
                                        <Typography style={{ width: 200 }}>{val.message}</Typography>

                                        <DeleteOutlineTwoToneIcon />
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
