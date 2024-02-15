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
import Modal from '@mui/material/Modal';
import { Avatar } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import { toast } from 'react-toastify';
import RefreshIcon from '@mui/icons-material/Refresh';



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 900,
    height: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const style1 = {
    overflow: "scroll",
    textindent: "50px",
    border: "1px solid #808080",
    bgcolor: "#D0D0D0",
    height: 300

}

export function Sent() {

    const dispatch = useDispatch()
    const [modal, setModal] = useState([])
    const [removedata, setRemovedata] = useState(false)
    const [check, setCheck] = useState([]);
    const handleClose = () => setOpen(false);
    const [open, setOpen] = useState(false);
    const handleOpen = (val) => {
        setOpen(true)
        setModal(val)
    };
    const [sent, setSent] = useState([])
    const [star, setStar] = useState([])
    const data = JSON.parse(localStorage.getItem("email"))
    const result = {
        data
    }
    useEffect(() => {
        axios.post(`${API}/gmail/getting-sent`, result)
            .then((res) => setSent(res.data))
    }, [removedata])
    const handleMultiple = async () => {
        const check1 = {
            _id: check
        }
        await axios.post(`${API}/gmail/multiple-delete`, check1)
            .then((res) => {
                res.data === "Deleted SuccessFully" ? toast.success("Deleted Successfully", {
                    position: "top-center",
                    autoClose: 1000,
                }) : toast.error(res.data)
            })
        setRemovedata(prev => !prev);
        setCheck([])
    }
    const handleStar = async (id) => {
        dispatch(star_message(id))

        if (star.includes(id)) {
            setStar(prev => prev.filter(ele => ele !== id))
        } else {
            setStar(prev => [...prev, id])
        }
    }

    function refreshPage() {
        window.location.reload(false);
    }
    const handleDelete = (val) => {
        setSent(sent.filter((item) => item._id !== val._id))
    }
    const avatar = localStorage.getItem("email")

    return (
        <div>
            <TopBar />
            <div style={{ display: "flex" }}>
                <Navbar />
                <div style={{ marginLeft: "80px", marginTop: "20px" }}>
                    <Tooltip title="Refresh to see the new Data"><Button onClick={refreshPage} ><RefreshIcon /></Button></Tooltip>
                    <Button onClick={handleMultiple}><DeleteIcon /></Button>
                    {sent.map((val) => {
                        return (
                            <div className='displaymsg-root'>
                                <Tooltip title={val.message}>
                                    <table className="displaymsg" style={{ width: "110%", cursor: "pointer", backgroundColor: "lightgray" }} >
                                        <Checkbox size='small' onChange={() => {
                                            if (check.includes(val._id)) {
                                                setCheck(prev => prev.filter(ele => ele !== val._id))
                                            } else {
                                                setCheck(prev => [...prev, val._id])
                                            }
                                        }} checked={check.includes(val._id)} />
                                        <Button onClick={() => handleStar(val._id)}> {star.includes(val._id) ? <StarIcon /> : <StarBorderIcon />}</Button>
                                        <Box onClick={() => handleOpen(val)} sx={{
                                            overflow: "hidden",
                                            display: "flex", width: {
                                                xs: 100,
                                                sm: 200,
                                                md: 300,
                                                lg: 500
                                            }
                                        }}>
                                            <Typography sx={{
                                                fontSize: {
                                                    xs: 10,
                                                    sm: 11,
                                                    md: 15,
                                                    lg: 17,
                                                },
                                                fontWeight:600,
                                                width: 180,
                                               
                                            }} >{val.to}</Typography>
                                            <Typography sx={{
                                                fontSize: {
                                                    xs: 8,
                                                    sm: 11,
                                                    md: 15,
                                                    lg: 17,
                                                },
                                                fontWeight:"bold",
                                                width: 180,
                                                textOverflow: "ellipsis",
                                                overflow: "hidden"
                                            }} >{val.subject}</Typography>
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
                                            }} >{val.message}</Typography>
                                        </Box>
                                        <Button onClick={() => handleDelete(val)}><DeleteIcon color='inherit' /></Button>

                                    </table>
                                </Tooltip>


                            </div>
                        )
                    })}
                </div>
            </div>
            <div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <div style={{ display: "flex" }}>
                                <Avatar sx={{ bgcolor: deepOrange[500] }}>{avatar[1]}</Avatar>
                                <div style={{ marginLeft: "8px" }}>
                                    <Typography id="modal-modal-title" sx={{ fontSize: "16px" }}>
                                        <b>From:{modal.from}</b>
                                    </Typography>
                                    <Typography id="modal-modal-title" sx={{ fontSize: "16px" }}>
                                        To:{modal.to}
                                    </Typography>
                                </div>


                            </div>
                            <CloseIcon style={{ cursor: "pointer", marginRight: "10px" }} onClick={() => setOpen(false)} />

                        </div>
                        <Box sx={{ backgroundColor: "#C0C0C0", marginTop: "20px" }}>
                            <Typography id="modal-modal-description" variant="h6" component="h2">
                                Sub: <b>{modal.subject}</b>
                            </Typography>
                        </Box>
                        <br /><br />
                        <Typography id="modal-modal-title" variant="h6" component="h2" sx={style1}>
                            {modal.message}
                        </Typography>
                        <br />
                        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "10px" }}>
                            <Button variant="contained" onClick={() => setOpen(false)}>Close</Button>
                        </div>
                    </Box>



                </Modal>
            </div>
        </div>
    )
}
