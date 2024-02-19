import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Checkbox, Tooltip, Typography, Box, Table } from '@mui/material';
import { API } from '../API';
import DeleteIcon from '@mui/icons-material/DeleteOutlineTwoTone';
import { Button } from '@mui/material';
import { TopBar } from './TopBar';
import Navbar from './Navbar';
import StarBorder from '@mui/icons-material/StarBorder';
import { toast } from 'react-toastify';
import RefreshIcon from '@mui/icons-material/Refresh';
import Modal from '@mui/material/Modal';
import { Avatar } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import CloseIcon from '@mui/icons-material/Close';

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
export function Trash() {
    const [modal, setModal] = useState([])

    const handleClose = () => setOpen(false);
    const [open, setOpen] = useState(false);
    const handleOpen = (val) => {
        setOpen(true)
        setModal(val)
    };
    const [sent, setSent] = useState([])
    const [remove, setRemove] = useState(false);
    const [removedata, setRemovedata] = useState(false)
    const [check, setCheck] = useState([]);
    useEffect(() => {
        axios.get(`${API}/info/getting-delete`)
            .then((res) => setSent(res.data))
    }, [remove, removedata])
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
    const avatar = localStorage.getItem("email")

    return (
        <div>
            <Box> <TopBar /> </Box>

            <Box sx={{ display: "flex" }}>
                <Box sx={{ display: { xs: "none", sm: "flex", md: "flex" } }}><Navbar /></Box>

                <Box>
                    <Box sx={{ marginLeft: { xs: "0px", sm: "80px", md: "100px" }, marginTop: "20px", display: "flex" }}>

                        <Tooltip title="Refresh to see the new Data"><Button onClick={refreshPage} ><RefreshIcon /></Button></Tooltip>
                        <Button onClick={handleMultiple}><DeleteIcon /></Button>

                    </Box>
                    <Box>
                        {sent.map((val) => {
                            return (
                                <Box sx={{ marginTop: "30px" }}>
                                    <Tooltip title={val.message}>
                                        <Table sx={{ marginLeft: { xs: "0px", sm: "80px", md: "100px" }, border: "1px solid black", display: "flex", alignItems: "center", width: { xs: "270px", sm: "400px", md: "100%" }, cursor: "pointer", backgroundColor: "lightgray" }} >
                                            <Checkbox size='small' onChange={() => {
                                                if (check.includes(val._id)) {
                                                    setCheck(prev => prev.filter(ele => ele !== val._id))
                                                } else {
                                                    setCheck(prev => [...prev, val._id])
                                                }
                                            }} checked={check.includes(val._id)} />
                                            <Button>                                            <StarBorder fontSize='small' style={{ marginRight: 10 }} /></Button>

                                            <Box onClick={() => handleOpen(val)} sx={{
                                                overflow: "hidden",
                                                display: "flex", width: { xs: 100, sm: 200, md: 300, lg: 500 }
                                            }}>

                                                <Typography sx={{
                                                    fontSize: { xs: 10, sm: 11, md: 15, lg: 17, },
                                                    fontWeight: 600,
                                                    width: 180,

                                                }}>{val.to}</Typography>
                                                <Typography sx={{
                                                    marginLeft: "40px",
                                                    fontSize: { xs: 8, sm: 11, md: 15, lg: 17, },
                                                    fontWeight: "bold",
                                                    width: 180,
                                                    textOverflow: "ellipsis",
                                                    overflow: "hidden"
                                                }}>{val.subject}</Typography>
                                                <Typography sx={{
                                                    fontSize: { xs: 8, sm: 11, md: 15, lg: 17 },
                                                    width: 180,
                                                    textOverflow: "ellipsis",
                                                    overflow: " hidden",
                                                }}>{val.message}</Typography>
                                            </Box>
                                            <Button onClick={() => handleDelete(val._id)}><DeleteIcon color='inherit' /></Button>

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


        </div>
    )
}
