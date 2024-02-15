import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Checkbox, Tooltip, Typography } from '@mui/material';
import { API } from '../API';
import DeleteIcon from '@mui/icons-material/DeleteOutlineTwoTone';
import { Button } from '@mui/material';
import { TopBar } from './TopBar';
import Navbar from './Navbar';
import StarBorder from '@mui/icons-material/StarBorder';
import { toast } from 'react-toastify';
import RefreshIcon from '@mui/icons-material/Refresh';


export function Trash() {
    const [sent, setSent] = useState([])
    const [remove, setRemove] = useState(false);
    const [removedata, setRemovedata] = useState(false)
    const [check, setCheck] = useState([]);
    useEffect(() => {
        axios.get(`${API}/info/getting-delete`)
            .then((res) => setSent(res.data))
    }, [remove,removedata])
    const handleDelete = async (id) => {
        const newdata = {
            id
        }

        await axios.post(`${API}/info/delete-delete`, newdata)
            .then((res) => toast.success(res.data, {
                position: "top-center",
                autoClose: 1000,
            }))
        setRemove(prev => !prev);
    }
    function refreshPage() {
        window.location.reload(false);
    }
    const handleMultiple = async () => {
        const check1 = {
            _id: check
        }
        await axios.post(`${API}/info/multiple-delete`, check1)
            .then((res) => {
                res.data === "Deleted SuccessFully" ? toast.success("Deleted Successfully", {
                    position: "top-center",
                    autoClose: 1000,
                }) : toast.error(res.data)
            })
        setRemovedata(prev => !prev);
        setCheck([])
    }

    return (
        <div>
            <TopBar />
            <div style={{ display: "flex" }}>
                <Navbar />
                <div style={{ marginLeft: "80px", marginTop: "30px" }} >
                    <Tooltip title="Refresh to see the new Data"><Button onClick={refreshPage} ><RefreshIcon /></Button></Tooltip>
                    <Button onClick={handleMultiple}><DeleteIcon /></Button>
                    {sent.map((val) => {
                        return (
                            <div className='displaymsg-root'>
                                <Tooltip title={val.message}>
                                    <table className="displaymsg" style={{ width: "130%", cursor: "pointer", backgroundColor: "lightgray" }} onClick={() => console.log(val._id)}>
                                        <Checkbox size='small' onChange={() => {
                                            if (check.includes(val._id)) {
                                                setCheck(prev => prev.filter(ele => ele !== val._id))
                                            } else {
                                                setCheck(prev => [...prev, val._id])
                                            }
                                        }} checked={check.includes(val._id)} />
                                        <StarBorder fontSize='small' style={{ marginRight: 10 }} />


                                        <Typography sx={{
                                            fontSize: {
                                                xs: 10,
                                                sm: 11,
                                                md: 15,
                                                lg: 17,
                                            },
                                            fontWeight: 600,
                                            width: 180,

                                        }} style={{ width: 200 }}>{val.to}</Typography>
                                        <Typography sx={{
                                            fontSize: {
                                                xs: 8,
                                                sm: 11,
                                                md: 15,
                                                lg: 17,
                                            },
                                            fontWeight: "bold",
                                            width: 180,
                                            textOverflow: "ellipsis",
                                            overflow: "hidden"
                                        }} style={{ width: 200 }}>{val.subject}</Typography>
                                        <Typography sx={{
                                            fontSize: {
                                                xs: 8,
                                                sm: 11,
                                                md: 15,
                                                lg: 17,
                                            },
                                            width: 180,
                                            textOverflow: "ellipsis",
                                            overflow: " hidden"
                                        }} style={{ width: 200 }}>{val.message}</Typography>
                                        <Button onClick={() => handleDelete(val._id)}><DeleteIcon color='inherit' /></Button>

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
