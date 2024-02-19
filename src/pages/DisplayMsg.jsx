import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { API } from '../API';
import DeleteIcon from '@mui/icons-material/DeleteOutlineTwoTone';
import { Button, Checkbox, Table, Tooltip, Typography } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { star_message } from '../redux/starSlice';
import { useDispatch, useSelector } from 'react-redux';
import StarIcon from '@mui/icons-material/Star';
import { TopBar } from './TopBar';
import Navbar from './Navbar';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Avatar } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import CloseIcon from '@mui/icons-material/Close';
import { toast } from 'react-toastify';
import RefreshIcon from '@mui/icons-material/Refresh';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { xs: 250, sm: 600, md: 800 },
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
    height: { xs: "fit-content", sm: 150, md: 150 }

}
const style2 = {
    overflow: "scroll",
    textindent: "50px",
    border: "1px solid #808080",
    bgcolor: "#D0D0D0",
    height: { xs: 100, sm: 150, md: 150 }

}
function DisplayMsg() {
    const dispatch = useDispatch()
    const [message, setMessage] = useState([])
    const [remove, setRemove] = useState(false);
    const [removedata, setRemovedata] = useState(false)
    const [check, setCheck] = useState([]);
    const [star, setStar] = useState([])
    const [modal, setModal] = useState([])
    const items = JSON.parse(localStorage.getItem('email'));
    console.log("items", items)
    const [sample, setSample] = useState([])
    const data = useSelector((state) => state.searchSlice.searchMessage)
    const result = { items, data }
    console.log(result)


    console.log(data)
    useEffect(() => {

        console.log("useEffect fired");
        axios.post(`${API}/gmail/getting-msg`, result)
            .then((res) => {
                setMessage(res.data)

            })
    }, [remove, removedata, data])


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

    const handleClose = () => setOpen(false);
    const [open, setOpen] = useState(false);
    const handleOpen = (val) => {
        setOpen(true)
        setModal(val)
    };



    const handleDelete = async (id) => {
        const newdata = {
            id
        }
        await axios.post(`${API}/info/delete`, id)
            .then((res) => console.log(res.data))

        await axios.post(`${API}/gmail/deleting-msg`, newdata)
            .then((res) => toast.success(res.data, {
                position: "top-center",
                autoClose: 1000,
            }))
        setRemove(prev => !prev);
    }

    const handleStar = async (id) => {
        dispatch(star_message(id))

        if (star.includes(id)) {
            setStar(prev => prev.filter(ele => ele !== id))
        } else {
            setStar(prev => [...prev, id])
        }
    }
    const avatar = localStorage.getItem("email")
    return (
        <div>

            <Box> <TopBar /> </Box>
            <Box sx={{ display: "flex" }}>
                <Box sx={{ display: { xs: "none", sm: "flex", md: "flex" } }}><Navbar /></Box>
                <Box>
                    <Box sx={{ marginLeft: { xs: "0px", sm: "80px", md: "100px" }, marginTop: "20px", display: "flex" }}>

                        <Tooltip title="Refresh to see the new Data"><Button onClick={() => setRemove(prev => !prev)} ><RefreshIcon /></Button></Tooltip>
                        <Button onClick={handleMultiple}><DeleteIcon /></Button>

                    </Box>
                    <Box>
                        {message.map((details) => {
                            return (
                                <Box sx={{ marginTop: "30px" }}>

                                    <Tooltip title={details.message}>
                                        <Table sx={{ marginLeft: { xs: "0px", sm: "80px", md: "100px" }, border: "1px solid black", display: "flex", alignItems: "center", justifyContent: "space-evenly", width: { xs: "100%", sm: "100%", md: "100%" }, cursor: "pointer", backgroundColor: "lightgray" }} >
                                            <div style={{ display: "flex", alignItems: "center" }}>
                                                <Checkbox sx={{ width: { xs: 5, sm: 10, md: 30 } }} size='small' onChange={() => {
                                                    if (check.includes(details._id)) {
                                                        setCheck(prev => prev.filter(ele => ele !== details._id))
                                                    } else {
                                                        setCheck(prev => [...prev, details._id])
                                                    }
                                                }} checked={check.includes(details._id)} />
                                                <Button sx={{ marginLeft: { xs: 0, sm: 0, md: 0 }, width: { xs: 5, sm: 10, md: 30 } }} onClick={() => handleStar(details._id)}> {star.includes(details._id) ? <StarIcon /> : <StarBorderIcon />}</Button>
                                            </div>
                                            <Box onClick={() => handleOpen(details)} sx={{
                                                overflow: "hidden",
                                                display: "flex", width: { xs: 100, sm: 200, md: 300, lg: 500 }
                                            }}>
                                                <Typography sx={{
                                                    fontSize: { xs: 10, sm: 11, md: 15, lg: 17, },
                                                    fontWeight: 600,
                                                    width: { xs: 130, sm: 100, md: 120 },
                                                    textOverflow: "ellipsis",
                                                    whiteSpace: "nowrap",
                                                    overflow: "hidden"
                                                }}>{details.from}</Typography>
                                                <Typography sx={{
                                                    marginLeft: "40px",
                                                    fontSize: { xs: 8, sm: 11, md: 15, lg: 17, },
                                                    fontWeight: "bold",
                                                    whiteSpace: "nowrap",
                                                    width: { xs: 130, sm: 100, md: 180 },
                                                    textOverflow: { xs: "ellipsis", sm: "ellipsis", md: "ellipsis" },
                                                    overflow: { xs: "hidden", sm: "hidden", md: "hidden" },
                                                }} id="subject">{details.subject}</Typography>
                                                <Typography sx={{
                                                    fontSize: { xs: 8, sm: 11, md: 15, lg: 17 },
                                                    width: { xs: 130, sm: 100, md: 180 },
                                                    textOverflow: { xs: "ellipsis", sm: "ellipsis", md: "ellipsis" },
                                                    overflow: { xs: "hidden", sm: "hidden", md: "hidden" },
                                                }} id="message">{details.message}</Typography>
                                            </Box>
                                            <Button sx={{ width: { xs: 5, sm: 10, md: 30 } }} onClick={() => handleDelete(details)}><DeleteIcon color='inherit' /></Button>
                                        </Table>
                                    </Tooltip>
                                </Box>

                            )
                        })}
                    </Box>
                </Box>

            </Box>

            <div >
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <div style={{ display: "flex" }}>
                                <Avatar sx={{ bgcolor: deepOrange[500] }}>B</Avatar>
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
                            <Typography id="modal-modal-description" variant="h6" component="h2" sx={style1}>
                                Sub: <b>{modal.subject}</b>
                            </Typography>
                        </Box>
                        <br /><br />
                        <Typography id="modal-modal-title" variant="h6" component="h2" sx={style2}>
                            {modal.message}
                        </Typography>
                        <br />
                        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "10px" }}>
                            <Button variant="contained" onClick={() => setOpen(false)}>Close</Button>
                        </div>
                    </Box>



                </Modal>
            </div >
        </div >
    )
}
export default DisplayMsg

