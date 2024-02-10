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
import StarIcon from '@mui/icons-material/Star';
import { Sample } from './Sample';


function DisplayMsg({ send }) {
    const dispatch = useDispatch()
    const [message, setMessage] = useState([])
    const [remove, setRemove] = useState(false);
    const [star, setStar] = useState([])
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
        console.log(id)
        if(star.includes(id)){
            setStar(prev => prev.filter(ele => ele !==id))
        } else {
        setStar(prev => [...prev, id])
        }
    }
    console.log(star)
    return (
        <div>
            <ArrowBackTwoToneIcon />
            {message.map((details) => {
                return (
                    <div className='displaymsg-root'>
                        <Tooltip title={details.message}>
                            <table className="displaymsg">
                                <Checkbox size='small' />
                                {console.log(star,details,star.includes(details._id))}
                                <Button onClick={() => handleStar(details._id)}> {star.includes(details._id) ? <StarIcon /> : <StarBorderIcon />}</Button>
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

