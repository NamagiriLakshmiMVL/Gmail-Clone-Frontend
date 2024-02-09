import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { API } from '../API';
import DeleteIcon from '@mui/icons-material/DeleteOutlineTwoTone';
import { Button, Checkbox, Tooltip, Typography } from '@mui/material';
import StarBorder from '@mui/icons-material/StarBorder';
import ArrowBackTwoToneIcon from '@mui/icons-material/ArrowBackTwoTone';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { star_message } from '../redux/starSlice';
import { useDispatch } from 'react-redux';


function DisplayMsg({ send }) {
    const dispatch = useDispatch()
    const [message, setMessage] = useState([])
    const [remove, setRemove] = useState(false);
    const [star, setStar] = useState(false)
    const items = JSON.parse(localStorage.getItem('email'));
    const result = {
        items
    }
    useEffect(() => {
        console.log("useEfect called")
        axios.post(`${API}/gmail/getting-msg`, result)
            .then((res) => setMessage(res.data))
    }, [send, remove])



    const handleDelete = async (id) => {
        const newdata = {
            id
        }
        await axios.post(`${API}/info/delete`, id)
            .then((res) => console.log(res.data))


        await axios.post(`${API}/gmail/deleting-msg`, newdata)
            .then((res) => alert(res.data))
        setRemove(prev => !prev);
    }

    const handleStar = async (id) => {
        dispatch(star_message(id))

    }
    return (
        <div>
            <ArrowBackTwoToneIcon />
            {message.map((details) => {
                return (
                    <div className='displaymsg-root'>
                        <Tooltip title={details.message}>
                            <table className="displaymsg">
                                <Checkbox size='small' />
                                <Button onClick={() => handleStar(details._id)}> <StarBorderIcon /></Button>
                                <Typography style={{ width: 200 }}>{details.from}</Typography>
                                <Typography style={{ width: 200 }}>{details.subject}</Typography>
                                <Typography style={{ width: 200 }}>{details.message}</Typography>
                                <Button onClick={() => handleDelete(details)}><DeleteIcon color='inherit' /></Button>
                            </table>
                        </Tooltip>
                    </div>
                )
            })}
        </div >
    )
}
export default DisplayMsg

