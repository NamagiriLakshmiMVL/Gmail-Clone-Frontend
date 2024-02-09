import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Checkbox, Tooltip, Typography } from '@mui/material';
import { API } from '../API';
import DeleteIcon from '@mui/icons-material/DeleteOutlineTwoTone';
import { Button } from '@mui/material';

import DeleteOutlineTwoToneIcon from '@mui/icons-material/DeleteOutlineTwoTone';
import StarBorder from '@mui/icons-material/StarBorder';


export function Trash() {
    const [sent, setSent] = useState([])
    const [remove, setRemove] = useState(false);
    
    useEffect(() => {
        axios.get(`${API}/info/getting-delete`)
            .then((res) => setSent(res.data))
    },[remove])
    const handleDelete = async (id) => {
        const newdata = {
            id
        }
       
        await axios.post(`${API}/info/delete-delete`, newdata)
            .then((res) => alert(res.data))
            setRemove(prev => !prev);
    }

    return (
        <div>
            
            <div>
                {sent.map((val) => {
                    return (
                        <div className='displaymsg-root'>
                            <Tooltip title={val.message}>
                                <table className="displaymsg" onClick={() => console.log(val._id)}>
                                    <Checkbox size='small' />
                                    <StarBorder fontSize='small' style={{ marginRight: 10 }} />
                                    <Typography style={{ width: 200 }}>{val.to}</Typography>
                                    <Typography style={{ width: 200 }}>{val.subject}</Typography>
                                    <Typography style={{ width: 200 }}>{val.message}</Typography>
                                    <Button onClick={() => handleDelete(val._id)}><DeleteIcon color='inherit' /></Button>

                                </table>
                            </Tooltip>


                        </div>
                    )
                })}
            </div>
        </div>
    )
}
